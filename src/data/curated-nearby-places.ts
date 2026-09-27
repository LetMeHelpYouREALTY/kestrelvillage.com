import type { AmenityCategoryId } from '@/data/amenity-categories';

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  schemaType: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  lat: number;
  lng: number;
  note?: string;
};

/** Verified destinations near Kestrel Village / Summerlin West (public addresses). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: 'Downtown Summerlin',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    streetAddress: '1980 Festival Plaza Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    lat: 36.0697,
    lng: -115.3342,
    note: 'Regional shopping, dining, and entertainment district',
  },
  {
    name: 'Whole Foods Market',
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '1980 Festival Plaza Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    lat: 36.0712,
    lng: -115.3335,
  },
  {
    name: "Smith's Food and Drug",
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '4750 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89102',
    lat: 36.1594,
    lng: -115.2062,
  },
  {
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    streetAddress: '657 Town Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1798,
    lng: -115.3334,
  },
  {
    name: 'TPC Summerlin',
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '1700 Village Center Cir',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89134',
    lat: 36.1889,
    lng: -115.3153,
  },
  {
    name: "Bear's Best Las Vegas",
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '2400 N Tenaya Way',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89128',
    lat: 36.2112,
    lng: -115.2525,
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '1000 Scenic Loop Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89161',
    lat: 36.1357,
    lng: -115.4279,
  },
  {
    name: 'Veterans Memorial Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '101 S Pavilion Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1759,
    lng: -115.3347,
  },
  {
    name: 'Palo Verde High School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '333 S Pavilion Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1689,
    lng: -115.3358,
  },
  {
    name: 'Sig Rogich Middle School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '7875 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    lat: 36.1582,
    lng: -115.2634,
  },
  {
    name: 'CVS Pharmacy',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
    streetAddress: '9430 W Sahara Ave',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    lat: 36.1445,
    lng: -115.2958,
  },
  {
    name: 'Life Time',
    category: 'fitness',
    schemaType: 'ExerciseGym',
    streetAddress: '10721 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    lat: 36.1541,
    lng: -115.2795,
  },
];

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}
