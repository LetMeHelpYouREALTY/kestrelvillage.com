/**
 * Kestrel Village center — Summerlin West, Las Vegas, NV 89138.
 * Coordinates align with the site's existing Google Maps embed for Kestrel Village
 * (homepage location section: ~36.2468, -115.3356).
 */
export const COMMUNITY_NAME = 'Kestrel Village';

export const COMMUNITY_CITY = 'Las Vegas';

export const COMMUNITY_STATE = 'NV';

export const COMMUNITY_ZIP = '89138';

export const COMMUNITY_AREA_LABEL = 'Summerlin West';

export const COMMUNITY_MAP_CENTER = {
  lat: 36.2467995,
  lng: -115.33559635,
} as const;

export const COMMUNITY_MAP_DEFAULT_ZOOM = 14;

export const COMMUNITY_PLACE_ADDRESS = {
  addressLocality: COMMUNITY_CITY,
  addressRegion: COMMUNITY_STATE,
  postalCode: COMMUNITY_ZIP,
  addressCountry: 'US',
};

export function communityEmbedMapUrl(): string {
  const { lat, lng } = COMMUNITY_MAP_CENTER;
  return `https://www.google.com/maps?q=${lat},${lng}&z=${COMMUNITY_MAP_DEFAULT_ZOOM}&output=embed`;
}

export function directionsUrl(lat: number, lng: number, placeName?: string): string {
  const query = placeName
    ? encodeURIComponent(`${placeName}`)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`;
}
