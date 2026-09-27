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
import { loadGoogleMaps, mapsAuthFailed } from '@/lib/google-maps-loader';
import { searchCategory } from '@/lib/places-search';

const MAP_MIN_HEIGHT = 420;

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

function formatAddress(place: CuratedPlace): string {
  if (place.streetAddress) {
    return `${place.streetAddress}, ${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
  }
  return `${place.addressLocality}, ${place.addressRegion} ${place.postalCode}`;
}

function buildInfoWindowContent(name: string, address: string, lat: number, lng: number): HTMLElement {
  const div = document.createElement('div');
  div.style.cssText = 'color:#1c1917;max-width:240px;padding:4px';
  const title = document.createElement('strong');
  title.textContent = name;
  div.appendChild(title);
  const p = document.createElement('p');
  p.style.cssText = 'margin:4px 0;font-size:13px';
  p.textContent = address;
  div.appendChild(p);
  const a = document.createElement('a');
  a.href = directionsUrl(lat, lng, name);
  a.target = '_blank';
  a.rel = 'noopener';
  a.style.cssText = 'color:#d97706;font-size:13px';
  a.textContent = 'Directions';
  div.appendChild(a);
  return div;
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
          key={`${place.name}-${place.sourceUrl}`}
          className="border border-stone-800 rounded-sm p-4 bg-stone-900/40"
        >
          <h4 className="font-medium text-stone-100">{place.name}</h4>
          <p className="text-stone-400 text-sm mt-1">{formatAddress(place)}</p>
          {place.note && <p className="text-stone-500 text-xs mt-1">{place.note}</p>}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href={directionsUrl(place.lat, place.lng, place.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300"
            >
              Directions →
            </a>
            <a
              href={place.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 hover:text-amber-400"
            >
              Official site →
            </a>
          </div>
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
  const [showCuratedAfterSearchError, setShowCuratedAfterSearchError] = useState(false);

  const enterFallback = useCallback(() => {
    mapRef.current = null;
    communityMarkerRef.current = null;
    infoWindowRef.current = null;
    markersRef.current = [];
    setMapReady(false);
    setUseFallback(true);
  }, []);

  useEffect(() => {
    const onAuthFailure = () => enterFallback();
    window.addEventListener('gmaps:auth-failure', onAuthFailure);
    return () => window.removeEventListener('gmaps:auth-failure', onAuthFailure);
  }, [enterFallback]);

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

  const openInfo = useCallback((name: string, address: string, lat: number, lng: number, anchor: google.maps.Marker) => {
    if (!mapRef.current || !infoWindowRef.current) return;
    infoWindowRef.current.setContent(buildInfoWindowContent(name, address, lat, lng));
    infoWindowRef.current.open({ map: mapRef.current, anchor });
  }, []);

  const addCommunityMarker = useCallback(() => {
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
      openInfo(COMMUNITY_NAME, 'Summerlin West, Las Vegas, NV 89138', lat, lng, marker);
    });
    communityMarkerRef.current = marker;
  }, [openInfo]);

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
          openInfo(place.name, formatAddress(place), place.lat, place.lng, marker);
        });
        markersRef.current.push(marker);
      });
    },
    [clearMarkers, openInfo]
  );

  const loadPlacesForCategory = useCallback(
    async (category: AmenityCategoryId) => {
      if (!mapRef.current || useFallback) return;

      setLoadingPlaces(true);
      setShowCuratedAfterSearchError(false);
      clearMarkers();

      try {
        const places = await searchCategory(COMMUNITY_MAP_CENTER, category);

        if (!places.length) {
          plotCuratedOnMap(category);
          setShowCuratedAfterSearchError(true);
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
          const displayName = place.displayName?.toString() ?? 'Place';
          const address = place.formattedAddress ?? '';

          const marker = new google.maps.Marker({
            map: mapRef.current!,
            position: { lat, lng },
            title: displayName,
          });
          marker.addListener('click', () => {
            openInfo(displayName, address, lat, lng, marker);
          });
          markersRef.current.push(marker);
        });

        mapRef.current.fitBounds(bounds, 48);
      } catch {
        plotCuratedOnMap(category);
        setShowCuratedAfterSearchError(true);
      } finally {
        setLoadingPlaces(false);
      }
    },
    [clearMarkers, plotCuratedOnMap, openInfo, useFallback]
  );

  useEffect(() => {
    if (!inView || useFallback || mapReady) return;
    if (mapsAuthFailed) {
      enterFallback();
      return;
    }
    if (!API_KEY) {
      enterFallback();
      return;
    }

    let cancelled = false;

    loadGoogleMaps(API_KEY)
      .then(() => {
        if (cancelled || mapsAuthFailed || !mapDivRef.current) return;

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
        addCommunityMarker();
        setMapReady(true);
      })
      .catch(() => {
        if (!cancelled) enterFallback();
      });

    return () => {
      cancelled = true;
    };
  }, [inView, useFallback, mapReady, addCommunityMarker, enterFallback]);

  useEffect(() => {
    if (!mapReady || useFallback) return;
    loadPlacesForCategory(activeCategory);
  }, [activeCategory, mapReady, useFallback, loadPlacesForCategory]);

  const curated = curatedPlacesForCategory(activeCategory);
  const listVisible = showCuratedList || showCuratedAfterSearchError;

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
            {listVisible && <CuratedList category={activeCategory} places={curated} />}
          </div>
        )}
      </div>
    </div>
  );
}
