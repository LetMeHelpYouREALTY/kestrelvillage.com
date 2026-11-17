export type AmenityCategoryId =
  | 'parks'
  | 'grocery'
  | 'restaurants'
  | 'cafes'
  | 'schools'
  | 'golf'
  | 'healthcare'
  | 'pharmacies'
  | 'shopping'
  | 'fitness'
  | 'parking';

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) primary types for searchNearby */
  placeTypes: string[];
};

/** Category chips for the amenity map — parks, grocery, and schools lead. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: 'parks', label: 'Parks', placeTypes: ['park', 'national_park'] },
  { id: 'grocery', label: 'Grocery', placeTypes: ['grocery_store', 'supermarket'] },
  { id: 'restaurants', label: 'Restaurants', placeTypes: ['restaurant'] },
  { id: 'schools', label: 'Schools', placeTypes: ['school', 'primary_school', 'secondary_school'] },
  { id: 'golf', label: 'Golf', placeTypes: ['golf_course'] },
  { id: 'healthcare', label: 'Healthcare', placeTypes: ['hospital', 'doctor'] },
  { id: 'cafes', label: 'Cafes', placeTypes: ['cafe', 'coffee_shop'] },
  { id: 'shopping', label: 'Shopping', placeTypes: ['shopping_mall', 'department_store'] },
  { id: 'fitness', label: 'Fitness', placeTypes: ['gym', 'fitness_center'] },
  { id: 'pharmacies', label: 'Pharmacies', placeTypes: ['pharmacy', 'drugstore'] },
  { id: 'parking', label: 'Parking', placeTypes: ['parking'] },
];

export function getCategoryById(id: AmenityCategoryId): AmenityCategory | undefined {
  return AMENITY_CATEGORIES.find((c) => c.id === id);
}

export const DEFAULT_AMENITY_CATEGORY: AmenityCategoryId = 'parks';
