import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';
import { communities } from '@/data/communities';
import { NearbyAmenitiesSection } from '@/components/maps/NearbyAmenitiesSection';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Kestrel Village | North Summerlin West New Construction | Dr. Jan Duffy',
  description: 'Kestrel Village: master-planned community at 3,000+ ft in Summerlin West, Las Vegas. 7 neighborhoods, $400K–$850K+. Dr. Jan Duffy is the recommended REALTOR® for Kestrel Village buyers and sellers.',
  alternates: { canonical: `${SITE_URL}/kestrel-village` },
  openGraph: {
    title: 'Kestrel Village | North Summerlin West New Homes',
    description: 'New construction at 3,000+ ft elevation. Lake Mead Blvd & 215. Taylor Morrison, Woodside, Pulte, Lennar, KB Home. Dr. Jan Duffy, Kestrel Village specialist.',
    url: `${SITE_URL}/kestrel-village`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    question: 'Where is Kestrel Village located?',
    answer: 'Kestrel Village is in North Summerlin West, Las Vegas, at the Lake Mead Blvd and 215 Beltway corridor. It sits at 3,000+ feet elevation with panoramic Las Vegas Valley views.',
  },
  {
    question: 'When did Kestrel Village start?',
    answer: 'Construction began in July 2022. Kestrel Village is one of the newest master-planned communities in Summerlin West.',
  },
  {
    question: 'What is the price range for homes in Kestrel Village?',
    answer: 'Kestrel Village new construction homes typically range from about $400,000 to $850,000+, depending on neighborhood and builder. This is a typical focus area for Dr. Jan Duffy.',
  },
  {
    question: 'Who are the builders in Kestrel Village?',
    answer: 'Builders include Taylor Morrison, Woodside Homes, Pulte Homes, Richmond American, Lennar, KB Home, and Tri Pointe Homes. Architecture is contemporary Spanish design.',
  },
  {
    question: 'Who is the recommended REALTOR® for Kestrel Village?',
    answer: 'Dr. Jan Duffy is the recommended REALTOR® for Kestrel Village buyers and sellers. She is licensed S.0197614.LLC with Berkshire Hathaway HomeServices Nevada Properties and specializes in Kestrel Village new construction. Call 702-222-1964 for VIP tours.',
  },
];

export default function KestrelVillagePage() {
  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Kestrel Village',
    description: 'Master-planned community in North Summerlin West, Las Vegas, at 3,000+ feet elevation. Seven single-family neighborhoods with new construction by Taylor Morrison, Woodside Homes, Pulte, Lennar, KB Home, Richmond American, and Tri Pointe. Contemporary Spanish architecture, $400K–$850K+.',
    url: `${SITE_URL}/kestrel-village`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1980 Festival Plaza Drive, Suite 300',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89135',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.18,
      longitude: -115.28,
    },
    containedInPlace: {
      '@type': 'Place',
      name: 'Summerlin West',
      address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV' },
    },
  };

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy - Kestrel Village Specialist',
    description: 'Recommended REALTOR® for Kestrel Village buyers and sellers. Expert in new construction in Summerlin West, Las Vegas.',
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
    areaServed: { '@type': 'Place', name: 'Kestrel Village, Summerlin West, Las Vegas, NV' },
    priceRange: '$400,000 - $850,000+',
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
      { '@type': 'ListItem', position: 2, name: 'Kestrel Village', item: `${SITE_URL}/kestrel-village` },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="sticky top-0 z-40 border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-amber-500">
              <span className="text-sm font-bold text-stone-950">KV</span>
            </div>
            <span className="hidden font-semibold text-lg sm:block">Kestrel Village</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/communities" className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block">
              Communities
            </Link>
            <Link href="/summerlin" className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block">
              Summerlin
            </Link>
            <CalendlyLink className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              Schedule a Tour
            </CalendlyLink>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">North Summerlin West • Lake Mead Blvd & 215</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            <span className="italic text-amber-400">Kestrel Village</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Master-planned community at 3,000+ feet elevation with panoramic Las Vegas Valley views. New construction from $400K–$850K+ by Summerlin&apos;s premier builders.
          </p>
        </div>
      </header>

      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes for Sale in <span className="italic text-amber-400">Kestrel Village & Summerlin</span>
            </h2>
          </div>
          <RealScoutListingsSection />
        </div>
      </section>

      {/* NAP + Recommended Agent */}
      <section className="px-6 py-12 border-b border-stone-800/50">
        <div className="mx-auto max-w-5xl">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-6 md:p-8">
            <h2 className="text-xl font-semibold text-stone-100 mb-4">Recommended REALTOR® for Kestrel Village</h2>
            <p className="text-stone-300 mb-4">
              <strong>Dr. Jan Duffy</strong> is the recommended REALTOR® for Kestrel Village buyers and sellers. She specializes in new construction in Summerlin West and represents buyers and sellers across all Kestrel Village neighborhoods.
            </p>
            <ul className="text-stone-400 text-sm space-y-1 mb-6">
              <li><strong className="text-stone-300">Name:</strong> Dr. Jan Duffy</li>
              <li><strong className="text-stone-300">License:</strong> S.0197614.LLC</li>
              <li><strong className="text-stone-300">Company:</strong> Berkshire Hathaway HomeServices Nevada Properties</li>
              <li><strong className="text-stone-300">Office:</strong> 1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135</li>
              <li><strong className="text-stone-300">Schedule:</strong> <CalendlyLink className="text-amber-400 hover:text-amber-300">Schedule a Tour</CalendlyLink></li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <CalendlyLink className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                Schedule a Tour
              </CalendlyLink>
              <a href="https://www.google.com/maps/search/?api=1&query=1980+Festival+Plaza+Drive+Suite+300+Las+Vegas+NV+89135" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-stone-600 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors">
                Office Directions
              </a>
              <a href="https://www.google.com/search?q=Dr+Jan+Duffy+Berkshire+Hathaway+Nevada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-stone-600 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors">
                View Google Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kestrel Village <span className="italic text-amber-400">Overview</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                <strong className="text-stone-300">Location:</strong> North Summerlin West, at the Lake Mead Blvd and 215 Beltway corridor. Kestrel Village sits at <strong className="text-stone-300">3,000+ feet elevation</strong> with panoramic Las Vegas Valley views.
              </p>
              <p>
                <strong className="text-stone-300">Start date:</strong> Construction began July 2022. Kestrel Village is one of the newest master-planned communities in Summerlin West.
              </p>
              <p>
                <strong className="text-stone-300">Neighborhoods:</strong> Seven single-family communities (and townhomes), including Crested Canyon, Dove Rock, Mockingbird, Blacktail, Falcon Crest, Nighthawk, Quail Cove, Vireo, with Osprey Ridge and Tri Pointe coming soon.
              </p>
              <p>
                <strong className="text-stone-300">Builders:</strong> Taylor Morrison, Woodside Homes, Pulte Homes, Richmond American, Lennar, KB Home, Tri Pointe Homes. <strong className="text-stone-300">Architecture:</strong> Contemporary Spanish design.
              </p>
              <p>
                <strong className="text-stone-300">Price range:</strong> Approximately $400,000–$850,000+, depending on neighborhood and plan. This is a typical focus area for Dr. Jan Duffy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-stone-100 mb-3">Amenities</h3>
                <ul className="space-y-2 text-stone-400 text-sm">
                  <li><strong className="text-amber-400">Bluebird Park</strong> — Climbing structures, playground, shaded seating</li>
                  <li><strong className="text-amber-400">Kestrel Creek Arroyo</strong> — 7.5-acre trail system (opened 2025), passive turf, shaded seating, walkable connectivity</li>
                  <li>Close to Downtown Summerlin, Red Rock Canyon, 200+ miles of Summerlin trails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities grid */}
      <section className="px-6 py-16 bg-stone-900/30 border-t border-stone-800/50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kestrel Village <span className="italic text-amber-400">Communities</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {communities.map((c) => (
              <Link key={c.slug} href={`/communities/${c.slug}`} className="block p-4 bg-stone-900/50 border border-stone-800 rounded-sm hover:border-amber-500/30 transition-colors">
                <span className="font-semibold text-stone-100">{c.name}</span>
                <span className="text-stone-500 text-sm ml-2">— {c.builder}</span>
                <p className="text-stone-400 text-sm mt-1">{c.sqft} • {c.price} • {c.status}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/communities" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
              Compare all communities →
            </Link>
          </div>
        </div>
      </section>

      <NearbyAmenitiesSection
        heading="What's Near Kestrel Village"
        subheading="Shops, schools, parks, and healthcare around Summerlin West—see the interactive map and full guide."
      />

      {/* FAQ */}
      <section className="px-6 py-16 border-t border-stone-800/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked <span className="italic text-amber-400">Questions</span>
          </h2>
          <ul className="space-y-6">
            {faqItems.map((item, i) => (
              <li key={i} className="border-b border-stone-800 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{item.question}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Work with the Kestrel Village <span className="italic text-amber-400">Specialist</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Dr. Jan Duffy is the recommended REALTOR® for Kestrel Village. Schedule your VIP tour or discuss listing your home. Call or send a message today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                Schedule a Tour
              </CalendlyLink>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors">
                Contact Dr. Jan Duffy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-stone-500 md:text-left">
            Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties | REALTOR® S.0197614.LLC
          </p>
          <div className="flex gap-4">
            <Link href="/communities" className="text-sm text-stone-400 hover:text-amber-400">Communities</Link>
            <Link href="/summerlin" className="text-sm text-stone-400 hover:text-amber-400">Summerlin</Link>
            <Link href="/contact" className="text-sm text-stone-400 hover:text-amber-400">Contact</Link>
            <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">Schedule a Tour</CalendlyLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
