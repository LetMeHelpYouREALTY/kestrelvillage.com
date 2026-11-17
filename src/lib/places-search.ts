import type { AmenityCategoryId } from '@/data/amenity-categories';
import { getCategoryById } from '@/data/amenity-categories';

const cache = new Map<string, Promise<google.maps.places.Place[]>>();

export function searchCategory(
  center: google.maps.LatLngLiteral,
  categoryId: AmenityCategoryId
): Promise<google.maps.places.Place[]> {
  const cat = getCategoryById(categoryId);
  if (!cat) return Promise.resolve([]);

  let p = cache.get(categoryId);
  if (!p) {
    p = (async () => {
      const { Place } = (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
        locationRestriction: { center, radius: 5000 },
        includedPrimaryTypes: cat.placeTypes,
        maxResultCount: 10,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Google types omit string rankPreference
        rankPreference: 'POPULARITY' as any,
      });
      return places ?? [];
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
