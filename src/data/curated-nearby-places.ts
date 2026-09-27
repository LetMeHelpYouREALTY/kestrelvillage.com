import type { AmenityCategoryId } from '@/data/amenity-categories';

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  schemaType: string;
  streetAddress?: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  lat: number;
  lng: number;
  sourceUrl: string;
  note?: string;
};

/** Verified destinations near Kestrel Village / Summerlin West (primary-source addresses). */
export const CURATED_NEARBY_PLACES: CuratedPlace[] = [
  {
    name: 'Downtown Summerlin',
    category: 'shopping',
    schemaType: 'ShoppingCenter',
    streetAddress: '1980 Festival Plaza Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    lat: 36.1494,
    lng: -115.3333,
    sourceUrl: 'https://www.downtownsummerlin.com/',
    note: 'Regional shopping, dining, and entertainment district',
  },
  {
    name: 'Whole Foods Market — Summerlin',
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '2475 S Town Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    lat: 36.0712,
    lng: -115.3335,
    sourceUrl: 'https://www.wholefoodsmarket.com/stores/summerlin',
  },
  {
    name: "Smith's Food and Drug",
    category: 'grocery',
    schemaType: 'GroceryStore',
    streetAddress: '9851 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    lat: 36.1594,
    lng: -115.2634,
    sourceUrl: 'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/charleston/68751',
  },
  {
    name: 'Summerlin Hospital Medical Center',
    category: 'healthcare',
    schemaType: 'Hospital',
    streetAddress: '657 N Town Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1798,
    lng: -115.3334,
    sourceUrl: 'https://www.summerlinhospital.com/about/contact-us',
  },
  {
    name: 'TPC Las Vegas',
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '9851 Canyon Run Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1889,
    lng: -115.3153,
    sourceUrl: 'https://tpc.com/lasvegas/',
    note: 'Public PGA TOUR golf course in Summerlin',
  },
  {
    name: 'Angel Park Golf Club',
    category: 'golf',
    schemaType: 'GolfCourse',
    streetAddress: '100 S Rampart Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89145',
    lat: 36.1755,
    lng: -115.2898,
    sourceUrl: 'https://angelpark.com/',
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
    sourceUrl: 'https://www.blm.gov/visit/red-rock-canyon-national-conservation-area',
  },
  {
    name: 'Veterans Memorial Park',
    category: 'parks',
    schemaType: 'Park',
    streetAddress: '101 N Pavilion Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1759,
    lng: -115.3347,
    sourceUrl: 'https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Veterans-Memorial-Park',
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
    sourceUrl: 'https://www.paloverde.org/',
  },
  {
    name: 'Sig Rogich Middle School',
    category: 'schools',
    schemaType: 'School',
    streetAddress: '235 N Pavilion Center Dr',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89144',
    lat: 36.1725,
    lng: -115.3355,
    sourceUrl: 'https://www.rogichms.info/',
  },
  {
    name: 'Walgreens Pharmacy',
    category: 'pharmacies',
    schemaType: 'Pharmacy',
    streetAddress: '8633 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89117',
    lat: 36.1585,
    lng: -115.2725,
    sourceUrl:
      'https://www.walgreens.com/locator/walgreens-8633+w+charleston+blvd-las-vegas-nv-89117/id=3872',
  },
  {
    name: 'Life Time — Summerlin',
    category: 'fitness',
    schemaType: 'ExerciseGym',
    streetAddress: '10721 W Charleston Blvd',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    lat: 36.1541,
    lng: -115.2795,
    sourceUrl: 'https://www.lifetime.life/locations/nv/summerlin.html',
  },
];

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_NEARBY_PLACES.filter((p) => p.category === category);
}
