import type { Metadata } from 'next';
import Link from 'next/link';
import { AmenityMap } from '@/components/maps/AmenityMap';
import { CalendlyLink } from '@/components/CalendlyLink';
import {
  COMMUNITY_AREA_LABEL,
  COMMUNITY_CITY,
  COMMUNITY_MAP_CENTER,
  COMMUNITY_NAME,
  COMMUNITY_STATE,
  COMMUNITY_ZIP,
} from '@/config/community-map';
import { CURATED_NEARBY_PLACES } from '@/data/curated-nearby-places';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: `Nearby Amenities in ${COMMUNITY_NAME}, Las Vegas | Summerlin West`,
  description:
    `Interactive map of restaurants, parks, schools, grocery, golf, and healthcare near ${COMMUNITY_NAME} in ${COMMUNITY_AREA_LABEL}, Las Vegas. Hyperlocal guide from Dr. Jan Duffy.`,
  alternates: { canonical: `${SITE_URL}/nearby-amenities` },
  openGraph: {
    title: `Nearby Amenities in ${COMMUNITY_NAME}, Las Vegas`,
    description: `Explore what is near ${COMMUNITY_NAME}: Downtown Summerlin, Red Rock Canyon, hospitals, schools, and more.`,
    url: `${SITE_URL}/nearby-amenities`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: `What grocery stores are near ${COMMUNITY_NAME}?`,
    answer: `Residents use grocers in Summerlin West and Downtown Summerlin, including Whole Foods Market at 2475 S Town Center Dr and Smith's Food and Drug at 9851 W Charleston Blvd—typically a short drive from ${COMMUNITY_NAME}.`,
  },
  {
    question: `How far is ${COMMUNITY_NAME} from the Las Vegas Strip?`,
    answer: `From ${COMMUNITY_NAME} in Summerlin West, the Las Vegas Strip is roughly 20–25 minutes by car in typical traffic (approximate), depending on your route and time of day.`,
  },
  {
    question: `Are there hospitals near ${COMMUNITY_NAME}?`,
    answer: `Yes. Summerlin Hospital Medical Center (657 N Town Center Dr, Las Vegas) serves much of Summerlin West and is a common choice for ${COMMUNITY_AREA_LABEL} residents.`,
  },
  {
    question: `What parks are close to ${COMMUNITY_NAME}?`,
    answer: `Inside the village, Kestrel Creek Arroyo and Bluebird Park are community amenities. Nearby, Veterans Memorial Park and Red Rock Canyon National Conservation Area offer additional outdoor recreation.`,
  },
  {
    question: `Where do residents shop and dine near ${COMMUNITY_NAME}?`,
    answer: `Downtown Summerlin (1980 Festival Plaza Dr) is the primary regional hub for shopping, dining, and entertainment—about a 10-minute drive from much of ${COMMUNITY_AREA_LABEL} (approximate).`,
  },
  {
    question: `Which CCSD schools are assigned to ${COMMUNITY_NAME} addresses?`,
    answer: `Attendance varies by address within Summerlin West. Nearby CCSD campuses include Palo Verde High School (333 S Pavilion Center Dr) and Sig Rogich Middle School (235 N Pavilion Center Dr). Verify your zoned schools with the CCSD Zoning Search (ccsd.net) for your specific lot.`,
  },
  {
    question: `How far is Harry Reid International Airport from ${COMMUNITY_NAME}?`,
    answer: `Harry Reid International Airport is typically about 25–35 minutes from Summerlin West by car (approximate), depending on traffic and your starting neighborhood in ${COMMUNITY_NAME}.`,
  },
  {
    question: `Who can help me tour ${COMMUNITY_NAME} and the surrounding area?`,
    answer: `Dr. Jan Duffy is the recommended REALTOR® for ${COMMUNITY_NAME} new construction. Call 702-222-1964 or schedule a tour online before visiting model homes.`,
  },
];

const commuteNotes = [
  {
    destination: 'Downtown Summerlin',
    detail: 'Regional shopping, dining, and entertainment at Festival Plaza Dr.',
    time: 'Approx. 10–15 min drive',
  },
  {
    destination: 'Red Rock Canyon',
    detail: 'Scenic drive, hiking, and climbing west of Summerlin.',
    time: 'Approx. 15–20 min drive',
  },
  {
    destination: 'Las Vegas Strip',
    detail: 'Resorts, shows, and dining on Las Vegas Blvd.',
    time: 'Approx. 20–25 min drive',
  },
  {
    destination: 'Harry Reid International Airport',
    detail: 'Primary commercial airport for Las Vegas.',
    time: 'Approx. 25–35 min drive',
  },
];

function buildSchemas() {
  const communityPlace = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: COMMUNITY_NAME,
    description: `Master-planned new construction community in ${COMMUNITY_AREA_LABEL}, ${COMMUNITY_CITY}, ${COMMUNITY_STATE}.`,
    url: `${SITE_URL}/kestrel-village`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMMUNITY_CITY,
      addressRegion: COMMUNITY_STATE,
      postalCode: COMMUNITY_ZIP,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMMUNITY_MAP_CENTER.lat,
      longitude: COMMUNITY_MAP_CENTER.lng,
    },
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Places near ${COMMUNITY_NAME}`,
    itemListElement: CURATED_NEARBY_PLACES.map((place, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': place.schemaType,
        name: place.name,
        address: {
          '@type': 'PostalAddress',
          ...(place.streetAddress ? { streetAddress: place.streetAddress } : {}),
          addressLocality: place.addressLocality,
          addressRegion: place.addressRegion,
          postalCode: place.postalCode,
          addressCountry: 'US',
        },
        url: place.sourceUrl,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: place.lat,
          longitude: place.lng,
        },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Nearby Amenities', item: `${SITE_URL}/nearby-amenities` },
    ],
  };

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy - Kestrel Village Specialist',
    description: `Hyperlocal REALTOR® for ${COMMUNITY_NAME} buyers and sellers in ${COMMUNITY_AREA_LABEL}, Las Vegas.`,
    url: SITE_URL,
    telephone: '+1-702-222-1964',
    email: 'jan@drjanduffy.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1980 Festival Plaza Drive, Suite 300',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89135',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Place',
      name: `${COMMUNITY_NAME}, ${COMMUNITY_AREA_LABEL}, Las Vegas, NV`,
    },
  };

  return { communityPlace, itemList, faqSchema, breadcrumbSchema, agentSchema };
}

export default function NearbyAmenitiesPage() {
  const schemas = buildSchemas();

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.communityPlace) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.agentSchema) }} />

      <nav className="sticky top-0 z-40 border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-amber-500">
              <span className="text-sm font-bold text-stone-950">KV</span>
            </div>
            <span className="hidden font-semibold text-lg sm:block">Kestrel Village</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/amenities" className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block">
              Village Amenities
            </Link>
            <Link href="/kestrel-village" className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block">
              Community
            </Link>
            <CalendlyLink className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              Schedule a Tour
            </CalendlyLink>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-16 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">{COMMUNITY_AREA_LABEL} • {COMMUNITY_ZIP}</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Nearby Amenities in <span className="italic text-amber-400">{COMMUNITY_NAME}</span>, Las Vegas
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            An interactive map and hyperlocal guide to dining, parks, schools, grocery, golf, and healthcare around{' '}
            {COMMUNITY_NAME} at 3,000+ ft elevation in Summerlin West.
          </p>
        </div>
      </header>

      <section className="px-6 py-12 border-b border-stone-800/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-light mb-6 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Interactive <span className="italic text-amber-400">Map</span>
          </h2>
          <p className="text-stone-400 mb-8 max-w-3xl">
            Filter by category to explore places near {COMMUNITY_NAME}. When Google Maps is enabled on this site, results
            load from the Places API; otherwise you will see a map embed and our curated list of verified destinations.
          </p>
          <AmenityMap showCuratedList />
        </div>
      </section>

      <section className="px-6 py-16 bg-stone-900/30">
        <div className="mx-auto max-w-5xl space-y-12">
          <div>
            <h2 className="text-2xl font-light mb-4 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dining &amp; <span className="italic text-amber-400">Cafes</span>
            </h2>
            <p className="text-stone-400 leading-relaxed">
              Most day-to-day dining and coffee runs head to <strong className="text-stone-300">Downtown Summerlin</strong>{' '}
              (1980 Festival Plaza Dr), with national and local restaurants across the district. Grocery with in-store
              options include <strong className="text-stone-300">Whole Foods Market</strong> at 2475 S Town Center Dr in Downtown Summerlin.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Parks &amp; <span className="italic text-amber-400">Recreation</span>
            </h2>
            <p className="text-stone-400 leading-relaxed">
              Within {COMMUNITY_NAME}, <strong className="text-stone-300">Kestrel Creek Arroyo</strong> and{' '}
              <strong className="text-stone-300">Bluebird Park</strong> are village amenities. Beyond the community,{' '}
              <strong className="text-stone-300">Veterans Memorial Park</strong> (101 N Pavilion Center Dr) and{' '}
              <strong className="text-stone-300">Red Rock Canyon National Conservation Area</strong> (1000 Scenic Loop Dr)
              are well-known outdoor destinations west of Summerlin.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Golf
            </h2>
            <p className="text-stone-400 leading-relaxed">
              Summerlin West has several public golf options. <strong className="text-stone-300">TPC Las Vegas</strong>{' '}
              (9851 Canyon Run Dr) is the area&apos;s PGA TOUR course, and <strong className="text-stone-300">Angel Park Golf Club</strong>{' '}
              (100 S Rampart Blvd) offers multiple public courses minutes from Red Rock Canyon.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Healthcare &amp; <span className="italic text-amber-400">Pharmacies</span>
            </h2>
            <p className="text-stone-400 leading-relaxed">
              <strong className="text-stone-300">Summerlin Hospital Medical Center</strong> (657 N Town Center Dr) is a
              full-service hospital serving much of Summerlin West. Retail pharmacies such as{' '}
              <strong className="text-stone-300">Walgreens</strong> at 8633 W Charleston Blvd are within a reasonable drive for
              prescriptions and essentials.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Shopping &amp; <span className="italic text-amber-400">Schools</span>
            </h2>
            <p className="text-stone-400 leading-relaxed">
              <strong className="text-stone-300">Downtown Summerlin</strong> anchors regional shopping. For schools,{' '}
              <strong className="text-stone-300">Palo Verde High School</strong> (333 S Pavilion Center Dr) and{' '}
              <strong className="text-stone-300">Sig Rogich Middle School</strong> (235 N Pavilion Center Dr) are among the
              CCSD campuses buyers research when moving to {COMMUNITY_AREA_LABEL}. Which CCSD schools are assigned to{' '}
              {COMMUNITY_NAME} addresses? Verify with the CCSD Zoning Search for your lot.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Commute &amp; <span className="italic text-amber-400">Drive Times</span>
            </h2>
            <p className="text-stone-400 mb-6">Typical car travel from {COMMUNITY_NAME} (approximate, traffic-dependent):</p>
            <ul className="space-y-3">
              {commuteNotes.map((row) => (
                <li key={row.destination} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-stone-800 rounded-sm p-4 bg-stone-950/50">
                  <div>
                    <span className="font-medium text-stone-200">{row.destination}</span>
                    <p className="text-stone-500 text-sm">{row.detail}</p>
                  </div>
                  <span className="text-amber-400 text-sm whitespace-nowrap">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-stone-800/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nearby Living <span className="italic text-amber-400">FAQ</span>
          </h2>
          <ul className="space-y-8">
            {faqItems.map((item, i) => (
              <li key={i}>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{item.question}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-8 md:p-10 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your <span className="italic text-amber-400">{COMMUNITY_NAME}</span> Expert
            </h2>
            <p className="text-stone-300 mb-6 max-w-xl mx-auto">
              Dr. Jan Duffy helps buyers navigate new construction in {COMMUNITY_AREA_LABEL}—from builder registration
              to knowing what is around the community. Berkshire Hathaway HomeServices Nevada Properties. REALTOR®
              S.0197614.LLC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                Schedule a Tour
              </CalendlyLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors"
              >
                Contact Dr. Jan Duffy
              </Link>
            </div>
            <p className="text-stone-500 text-sm mt-6">
              On-site village parks and trails:{' '}
              <Link href="/amenities" className="text-amber-400 hover:text-amber-300">
                Kestrel Village amenities
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-stone-500 md:text-left">
            Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties | REALTOR® S.0197614.LLC
          </p>
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">Schedule a Tour</CalendlyLink>
        </div>
      </footer>
    </div>
  );
}
