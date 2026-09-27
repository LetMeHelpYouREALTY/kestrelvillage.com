'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  COMMUNITY_MAP_CENTER,
  COMMUNITY_MAP_DEFAULT_ZOOM,
  COMMUNITY_NAME,
  communityEmbedMapUrl,
  directionsUrl,
} from '@/config/community-map';
import {
  AMENITY_CATEGORIES,
  DEFAULT_AMENITY_CATEGORY,
  type AmenityCategoryId,
  getCategoryById,
} from '@/data/amenity-categories';
import { curatedPlacesForCategory, type CuratedPlace } from '@/data/curated-nearby-places';

const MAP_MIN_HEIGHT = 420;

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.google?.maps) {
      resolve();
      return;
    }
    const existing = document.querySelector<HTMLScriptElement>('script[data-amenity-map]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Maps script failed')), { once: true });
      return;
    }
    if (!API_KEY) {
      reject(new Error('No API key'));
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(API_KEY)}&loading=async`;
    script.async = true;
    script.defer = true;
    script.dataset.amenityMap = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Maps script failed'));
    document.head.appendChild(script);
  });
}

function CuratedList({
  category,
  places,
}: {
  category: AmenityCategoryId;
  places: CuratedPlace[];
}) {
  const label = getCategoryById(category)?.label ?? category;
  if (places.length === 0) {
    return (
      <p className="text-stone-500 text-sm">
        No curated {label.toLowerCase()} listings for this view. Use the map or switch categories.
      </p>
    );
  }
  return (
    <ul className="space-y-3" aria-label={`${label} near ${COMMUNITY_NAME}`}>
      {places.map((place) => (
        <li
          key={`${place.name}-${place.streetAddress}`}
          className="border border-stone-800 rounded-sm p-4 bg-stone-900/40"
        >
          <h4 className="font-medium text-stone-100">{place.name}</h4>
          <p className="text-stone-400 text-sm mt-1">
            {place.streetAddress}, {place.addressLocality}, {place.addressRegion} {place.postalCode}
          </p>
          {place.note && <p className="text-stone-500 text-xs mt-1">{place.note}</p>}
          <a
            href={directionsUrl(place.lat, place.lng, place.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-amber-400 hover:text-amber-300"
          >
            Directions →
          </a>
        </li>
      ))}
    </ul>
  );
}

function MapFallback({
  category,
  showCuratedList,
}: {
  category: AmenityCategoryId;
  showCuratedList: boolean;
}) {
  const curated = curatedPlacesForCategory(category);
  return (
    <div className="space-y-4">
      <div
        className="w-full rounded-sm overflow-hidden border border-stone-800"
        style={{ minHeight: MAP_MIN_HEIGHT, height: MAP_MIN_HEIGHT }}
      >
        <iframe
          title={`Map of ${COMMUNITY_NAME}, Summerlin West`}
          src={communityEmbedMapUrl()}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: MAP_MIN_HEIGHT }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showCuratedList && <CuratedList category={category} places={curated} />}
    </div>
  );
}

type AmenityMapProps = {
  /** Show curated place list below map (full page vs compact section) */
  showCuratedList?: boolean;
  className?: string;
};

export function AmenityMap({ showCuratedList = false, className = '' }: AmenityMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapDivRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [inView, setInView] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(DEFAULT_AMENITY_CATEGORY);
  const [useFallback, setUseFallback] = useState(!API_KEY);
  const [mapReady, setMapReady] = useState(false);
  const [loadingPlaces, setLoadingPlaces] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: '120px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clearMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
  }, []);

  const showInfo = useCallback((name: string, address: string, rating?: number, lat?: number, lng?: number) => {
    if (!mapRef.current || !infoWindowRef.current) return;
    const dest =
      lat !== undefined && lng !== undefined
        ? directionsUrl(lat, lng, name)
        : directionsUrl(COMMUNITY_MAP_CENTER.lat, COMMUNITY_MAP_CENTER.lng, name);
    const ratingHtml =
      rating !== undefined ? `<p style="margin:4px 0;font-size:13px">Rating: ${rating.toFixed(1)}</p>` : '';
    infoWindowRef.current.setContent(
      `<div style="color:#1c1917;max-width:240px;padding:4px">
        <strong>${name}</strong>
        ${ratingHtml}
        <p style="margin:4px 0;font-size:13px">${address}</p>
        <a href="${dest}" target="_blank" rel="noopener" style="color:#d97706;font-size:13px">Directions</a>
      </div>`
    );
  }, []);

  const addCommunityMarker = useCallback(async () => {
    if (!mapRef.current || communityMarkerRef.current) return;
    const { lat, lng } = COMMUNITY_MAP_CENTER;
    const marker = new google.maps.Marker({
      map: mapRef.current,
      position: { lat, lng },
      title: COMMUNITY_NAME,
      label: { text: 'KV', color: '#0c0a09', fontWeight: '700', fontSize: '11px' },
      zIndex: 1000,
    });
    marker.addListener('click', () => {
      showInfo(COMMUNITY_NAME, 'Summerlin West, Las Vegas, NV 89138');
      infoWindowRef.current?.open({ map: mapRef.current!, anchor: marker });
    });
    communityMarkerRef.current = marker;
  }, [showInfo]);

  const plotCuratedOnMap = useCallback(
    (category: AmenityCategoryId) => {
      if (!mapRef.current) return;
      clearMarkers();
      const places = curatedPlacesForCategory(category);
      places.forEach((place) => {
        const marker = new google.maps.Marker({
          map: mapRef.current!,
          position: { lat: place.lat, lng: place.lng },
          title: place.name,
        });
        marker.addListener('click', () => {
          const address = `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion}`;
          showInfo(place.name, address, undefined, place.lat, place.lng);
          infoWindowRef.current?.open({ map: mapRef.current!, anchor: marker });
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers, showInfo]
  );

  const searchNearby = useCallback(
    async (category: AmenityCategoryId) => {
      if (!mapRef.current || useFallback) return;
      const cat = getCategoryById(category);
      if (!cat) return;

      setLoadingPlaces(true);
      clearMarkers();

      try {
        const placesLib = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
        const { Place } = placesLib;
        const primaryTypes = cat.placeTypes.slice(0, 1);

        const request = {
          fields: ['displayName', 'formattedAddress', 'location', 'rating', 'id'],
          locationRestriction: {
            center: COMMUNITY_MAP_CENTER,
            radius: 8000,
          },
          includedPrimaryTypes: primaryTypes,
          maxResultCount: 15,
          rankPreference: google.maps.places.SearchNearbyRankPreference.POPULARITY,
        };

        const { places } = await Place.searchNearby(request);

        if (!places?.length) {
          plotCuratedOnMap(category);
          setLoadingPlaces(false);
          return;
        }

        const bounds = new google.maps.LatLngBounds();
        bounds.extend(COMMUNITY_MAP_CENTER);

        places.forEach((place) => {
          const loc = place.location;
          if (!loc) return;
          const lat = loc.lat();
          const lng = loc.lng();
          bounds.extend({ lat, lng });
          const displayName =
            place.displayName?.toString() ?? 'Place';
          const address = place.formattedAddress ?? '';
          const rating = place.rating;

          const marker = new google.maps.Marker({
            map: mapRef.current!,
            position: { lat, lng },
            title: displayName,
          });
          marker.addListener('click', () => {
            showInfo(displayName, address, rating ?? undefined, lat, lng);
            infoWindowRef.current?.open({ map: mapRef.current!, anchor: marker });
          });
          markersRef.current.push(marker);
        });

        mapRef.current.fitBounds(bounds, 48);
      } catch {
        plotCuratedOnMap(category);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [clearMarkers, plotCuratedOnMap, showInfo, useFallback]
  );

  useEffect(() => {
    if (!inView || useFallback || mapReady) return;

    let cancelled = false;

    (async () => {
      try {
        await loadGoogleMapsScript();
        if (cancelled || !mapDivRef.current) return;

        const mapOptions: google.maps.MapOptions = {
          center: COMMUNITY_MAP_CENTER,
          zoom: COMMUNITY_MAP_DEFAULT_ZOOM,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        };
        if (MAP_ID) {
          mapOptions.mapId = MAP_ID;
        }

        mapRef.current = new google.maps.Map(mapDivRef.current, mapOptions);
        infoWindowRef.current = new google.maps.InfoWindow();
        await addCommunityMarker();
        setMapReady(true);
      } catch {
        if (!cancelled) setUseFallback(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [inView, useFallback, mapReady, addCommunityMarker]);

  useEffect(() => {
    if (!mapReady || useFallback) return;
    searchNearby(activeCategory);
  }, [activeCategory, mapReady, useFallback, searchNearby]);

  const curated = curatedPlacesForCategory(activeCategory);

  return (
    <div ref={containerRef} className={className}>
      <div
        role="tablist"
        aria-label="Filter nearby places by category"
        className="flex flex-wrap gap-2 mb-4"
      >
        {AMENITY_CATEGORIES.map((cat) => {
          const selected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="amenity-map-panel"
              id={`amenity-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-sm rounded-full border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 ${
                selected
                  ? 'bg-amber-500 text-stone-950 border-amber-500 font-medium'
                  : 'bg-stone-900/60 text-stone-300 border-stone-700 hover:border-amber-500/40'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        id="amenity-map-panel"
        role="tabpanel"
        aria-labelledby={`amenity-tab-${activeCategory}`}
      >
        {useFallback ? (
          <MapFallback category={activeCategory} showCuratedList={showCuratedList} />
        ) : (
          <div className="space-y-4">
            <div
              className="relative w-full rounded-sm overflow-hidden border border-stone-800 bg-stone-900"
              style={{ minHeight: MAP_MIN_HEIGHT, height: MAP_MIN_HEIGHT }}
            >
              {!inView && (
                <div
                  className="absolute inset-0 flex items-center justify-center text-stone-500 text-sm"
                  aria-hidden
                >
                  Map loads when scrolled into view
                </div>
              )}
              <div ref={mapDivRef} className="w-full h-full" style={{ minHeight: MAP_MIN_HEIGHT }} />
              {loadingPlaces && (
                <div className="absolute top-3 right-3 bg-stone-950/80 text-stone-300 text-xs px-2 py-1 rounded">
                  Updating places…
                </div>
              )}
            </div>
            {showCuratedList && <CuratedList category={activeCategory} places={curated} />}
          </div>
        )}
      </div>
    </div>
  );
}
