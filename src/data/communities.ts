export type Community = {
  slug: string;
  name: string;
  builder: string;
  type: string;
  sqft: string;
  beds: string;
  baths: string;
  garage: string;
  price: string;
  status: string;
  units: number;
  highlight: string;
  description: string;
  highlights: string[];
  amenities: string[];
  /** Verified sales office / model home hours when available (e.g. KB Home). */
  salesOfficeHours?: string;
};

export const communities: Community[] = [
  {
    slug: 'dove-rock',
    name: 'Dove Rock',
    builder: 'Woodside Homes',
    type: 'Townhomes',
    sqft: '1,724 - 2,217',
    beds: '2-4',
    baths: '2.5',
    garage: '2-car',
    price: 'From $520K',
    status: 'Now Preselling',
    units: 67,
    highlight: 'Community pool, master-planned Summerlin lifestyle',
    description: 'Dove Rock in Summerlin offers Woodside Homes townhomes from $519,990. 4 floor plans (Arden, Briar, Cora, Haven) with 2–4 beds, 1,724–2,217 sq ft. Community pool, near Red Rock Canyon, Downtown Summerlin, and TPC golf.',
    highlights: [
      'Community pool',
      'Master-planned Summerlin community',
      '4 floor plans: Arden, Briar, Cora, Haven',
      '2–4 bedrooms, 1,724–2,217 sq ft',
      'Near Red Rock Canyon & Downtown Summerlin'
    ],
    amenities: ['Community pool', '200+ miles of trails', 'Near TPC Summerlin golf', 'Downtown Summerlin shopping', 'Energy-efficient features', 'Near CCSD schools (see Schools page)']
  },
  {
    slug: 'falcon-crest',
    name: 'Falcon Crest',
    builder: 'Woodside Homes',
    type: 'Single-Story',
    sqft: '1,950 - 2,218',
    beds: '3',
    baths: '2-2.5',
    garage: '2-car',
    price: 'From $580K',
    status: 'Now Selling',
    units: 110,
    highlight: 'All single-story homes with gourmet kitchens and flex spaces',
    description: 'Falcon Crest at Kestrel Village offers Woodside Homes single-story homes from $580K. 3 beds, 2–2.5 baths, 1,950–2,218 sq ft. Gourmet kitchens with space for guests and flex spaces for den or gym in Summerlin West.',
    highlights: [
      'All single-story living',
      'Gourmet kitchens',
      'Flex spaces for den or gym',
      '3 bedrooms, 2–2.5 baths',
      '1,950–2,218 sq ft'
    ],
    amenities: ['Single-story living', 'Gourmet kitchen', 'Flex spaces', 'Near Kestrel Creek Arroyo', '200+ miles of Summerlin trails']
  },
  {
    slug: 'crested-canyon',
    name: 'Crested Canyon',
    builder: 'Taylor Morrison',
    type: '2-3 Story',
    sqft: '1,649 - 2,242',
    beds: '3-4',
    baths: '2',
    garage: '2-car',
    price: 'Sold Out',
    status: 'Sold Out',
    units: 85,
    highlight: 'Gated community with rooftop decks and 9-foot ceilings - SOLD OUT',
    description: 'Crested Canyon at Kestrel Village by Taylor Morrison is SOLD OUT. This secure gated community featured 2–3 story homes with 3–4 beds, 1,649–2,242 sq ft, 9-foot ceilings, and rooftop decks. Contact Dr. Jan Duffy for resale opportunities.',
    highlights: [
      'SOLD OUT - Contact for resales',
      'Secure gated community',
      '9-foot ceilings throughout',
      'Rooftop decks on 3-story plans',
      'Healthy home products'
    ],
    amenities: ['Gated entry', '9-foot ceilings', 'Rooftop decks', 'Healthy home products', 'Near Downtown Summerlin', 'Contemporary Spanish architecture']
  },
  {
    slug: 'nighthawk',
    name: 'Nighthawk',
    builder: 'KB Home',
    type: 'Two-Story',
    sqft: '1,720 - 2,466',
    beds: '3-5',
    baths: '2.5-4',
    garage: '2-car',
    price: 'From mid-$500K',
    status: 'Now Selling',
    units: 90,
    highlight: 'Gated neighborhood with private park in Kestrel Commons',
    description: 'Nighthawk at Kestrel Commons by KB Home offers 6 distinctive two-story floor plans from mid-$500Ks. 3–5 beds, 1,720–2,466 sq ft. Gated neighborhood with future private park for residents. Easy 215 Beltway access.',
    highlights: [
      '6 distinctive floor plans',
      'Gated neighborhood',
      'Future private park for residents',
      'Personalize layout and design options',
      'Easy 215 Beltway access'
    ],
    amenities: ['Gated entry', 'Private neighborhood park', 'Walking paths', 'Near Downtown Summerlin', 'Elevated views', 'Smart thermostats'],
    salesOfficeHours: 'Mon 1–6pm, Tue–Sun 10am–6pm',
  },
  {
    slug: 'quail-cove',
    name: 'Quail Cove',
    builder: 'KB Home',
    type: 'Three-Story',
    sqft: '1,651 - 2,302',
    beds: '2-4',
    baths: '2.5-3.5',
    garage: '2-car',
    price: 'From $455K',
    status: 'Now Selling',
    units: 80,
    highlight: 'First-ever KB Home 3-story floor plans in Las Vegas',
    description: 'Quail Cove at Kestrel Commons features KB Home\'s first-ever three-story floor plans in Las Vegas from $454,990. 4 modern designs with 2–4 beds, 1,651–2,302 sq ft. Mountain views, planned park, and 1 mile to Grand Park.',
    highlights: [
      'First 3-story KB Homes in Las Vegas',
      '4 modern contemporary floor plans',
      'Mountain views',
      'Planned community park',
      '1 mile to Grand Park'
    ],
    amenities: ['Three-story living', 'Mountain views', 'Walking paths', 'Planned park', 'Near Downtown Summerlin', 'Easy I-215 access'],
    salesOfficeHours: 'Mon 1–6pm, Tue–Sun 10am–6pm',
  },
  {
    slug: 'mockingbird',
    name: 'Mockingbird',
    builder: 'Lennar',
    type: 'Two-Story',
    sqft: '3,000 - 3,335',
    beds: '5',
    baths: '3-4',
    garage: '2-3 car',
    price: 'From $838K',
    status: 'Now Selling',
    units: 79,
    highlight: 'NextGen suites for multigenerational living',
    description: 'Mockingbird at Kestrel Village offers Lennar two-story homes from $837,990, located at Fleet Wing & Scurry Bend. 3 floor plans (Bobby, Peter, Greg NextGen) with 5 beds, 3,000–3,335 sq ft. NextGen suites for multigenerational living in Summerlin West.',
    highlights: [
      'NextGen suites available',
      'Located at Fleet Wing & Scurry Bend',
      '3 floor plans: Bobby, Peter, Greg NextGen',
      '5 bedrooms, 3-4 baths',
      '3,000–3,335 sq ft',
      'Multigenerational living options'
    ],
    amenities: ['NextGen private suite', 'Dual master options', 'Expansive great rooms', 'Outdoor living spaces', 'Smart home features']
  },
  {
    slug: 'blacktail',
    name: 'Blacktail',
    builder: 'Pulte Homes',
    type: 'Three-Story',
    sqft: '2,338 - 2,572',
    beds: '3-4',
    baths: '2.5-3.5',
    garage: '2-car',
    price: 'From $636K',
    status: 'Now Selling',
    units: 95,
    highlight: 'Three-story homes with rooftop decks in Kestrel Village',
    description: 'Blacktail at Kestrel Village offers Pulte Homes three-story homes from $635,990. 4 floor plans (Kendall, Carson, Hayden, Peyton) with 3–4 beds, 2,338–2,572 sq ft. Features rooftop decks and Life Tested® designs in Summerlin West.',
    highlights: [
      '4 floor plans: Kendall, Carson, Hayden, Peyton',
      'Three-story homes with rooftop decks',
      '3–4 bedrooms, 2.5–3.5 baths',
      '2,338–2,572 sq ft',
      'Life Tested® Pulte designs'
    ],
    amenities: ['Rooftop decks', 'Smart home technology', 'Energy-efficient construction', 'Life Tested® floor plans', 'Near Kestrel Creek Arroyo', '200+ miles of Summerlin trails']
  },
  {
    slug: 'vireo',
    name: 'Vireo',
    builder: 'Woodside Homes',
    type: '2-3 Story',
    sqft: '1,441 - 2,034',
    beds: '2-3',
    baths: '2.5-3.5',
    garage: '2-car',
    price: 'From $477K',
    status: 'Final Opportunity',
    units: 112,
    highlight: 'Final homes available, covered patios & decks',
    description: 'Vireo in Summerlin offers Woodside Homes 2–3 story homes from $477,490. 5 floor plans (Aspen, Sage, Acacia, Laurel, Rowan) with 2–3 beds, 1,441–2,034 sq ft. Final opportunity - selling out! Energy Star certified with covered patios.',
    highlights: [
      'Final Opportunity - Selling Out!',
      '5 floor plans: Aspen, Sage, Acacia, Laurel, Rowan',
      '2–3 bedrooms, 2.5–3.5 baths',
      '1,441–2,034 sq ft',
      'Quick Move-In homes available'
    ],
    amenities: ['Energy Star certified', 'WaterSense fixtures', 'MERV 13 air filtration', 'Covered patios & decks', '200+ miles of Summerlin trails', 'Near Red Rock Canyon']
  }
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}

export function getAllCommunitySlugs(): string[] {
  return communities.map((c) => c.slug);
}
