import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Kestrel Village Amenities | Parks, Trails & Recreation',
  description: 'Explore Kestrel Village amenities: Kestrel Creek Arroyo, Bluebird Park, 7.5-acre linear park, walking trails, playgrounds. Summerlin West outdoor living at its finest.',
  alternates: { canonical: `${SITE_URL}/amenities` },
  openGraph: {
    title: 'Kestrel Village Amenities | Parks & Recreation',
    description: 'Parks, trails, playgrounds and outdoor recreation in Kestrel Village, Summerlin West.',
    url: `${SITE_URL}/amenities`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
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
            <CalendlyLink className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              Schedule a Tour
            </CalendlyLink>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">Village Lifestyle</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Kestrel Village <span className="italic text-amber-400">Amenities</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Discover the parks, trails, and outdoor spaces that make Kestrel Village one of Summerlin&apos;s 
            most desirable new communities.
          </p>
        </div>
      </header>

      <section className="px-6 py-8 border-b border-stone-800/50 bg-amber-500/5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-stone-300 text-sm md:text-base">
            Looking for shops, schools, and services <em>outside</em> the village? See our{' '}
            <Link href="/nearby-amenities" className="text-amber-400 hover:text-amber-300 font-medium">
              Nearby Amenities in Kestrel Village, Las Vegas
            </Link>{' '}
            guide with an interactive map.
          </p>
        </div>
      </section>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes in <span className="italic text-amber-400">Kestrel Village</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Featured Amenity */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-500/10 to-transparent">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-500 text-sm uppercase tracking-wider">Featured Park</span>
              <h2 className="text-3xl font-light mt-2 md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Creek <span className="italic text-green-400">Arroyo</span>
              </h2>
              <p className="text-stone-400 mt-6 leading-relaxed">
                The heart of Kestrel Village is this stunning 7.5-acre linear park that winds through the community. 
                Opened in 2025, Kestrel Creek Arroyo features meandering walking paths, passive turf areas for 
                relaxation and play, and shaded seating areas perfect for enjoying the desert scenery.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  '7.5 acres of landscaped green space',
                  'Interconnected walking and jogging trails',
                  'Passive turf areas for recreation',
                  'Shaded seating and gathering spots',
                  'Desert-adapted native landscaping',
                  'Connectivity between neighborhoods',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-300">
                    <span className="text-green-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-8 text-center">
              <span className="text-6xl mb-4 block">🌿</span>
              <h3 className="text-xl font-semibold text-stone-100">7.5 Acres</h3>
              <p className="text-stone-400 mt-2">of green space and trails</p>
              <div className="mt-6 pt-6 border-t border-stone-800">
                <p className="text-amber-400 text-sm">Opened 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bluebird Park */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-stone-900/50 border border-stone-800 rounded-sm p-8 text-center">
              <span className="text-6xl mb-4 block">🎪</span>
              <h3 className="text-xl font-semibold text-stone-100">Family Fun</h3>
              <p className="text-stone-400 mt-2">Playground and climbing structures</p>
              <div className="mt-6 pt-6 border-t border-stone-800">
                <p className="text-amber-400 text-sm">Perfect for kids of all ages</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-amber-500 text-sm uppercase tracking-wider">Family Recreation</span>
              <h2 className="text-3xl font-light mt-2 md:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Bluebird <span className="italic text-amber-400">Park</span>
              </h2>
              <p className="text-stone-400 mt-6 leading-relaxed">
                Designed with families in mind, Bluebird Park offers a dedicated space for children to play 
                and explore. The park features modern climbing play structures, age-appropriate playground 
                equipment, and shaded seating areas where parents can relax while keeping an eye on their kids.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Modern climbing play structures',
                  'Age-appropriate playground equipment',
                  'Shaded seating for parents',
                  'Open lawn areas',
                  'Safe, enclosed design',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-300">
                    <span className="text-amber-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All Amenities Grid */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Village <span className="italic text-amber-400">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🥾',
                title: 'Walking Trails',
                desc: 'Miles of interconnected paths linking all neighborhoods, parks, and future amenities.',
              },
              {
                icon: '🏔️',
                title: 'Elevated Views',
                desc: '3,000+ ft elevation provides panoramic Las Vegas valley and mountain vistas.',
              },
              {
                icon: '🚶',
                title: 'Walkable Design',
                desc: 'Pedestrian-friendly layout with sidewalks and trails connecting every community.',
              },
              {
                icon: '🌵',
                title: 'Desert Landscaping',
                desc: 'Native, water-efficient landscaping that thrives in the desert climate.',
              },
              {
                icon: '🛡️',
                title: 'Gated Communities',
                desc: 'Several neighborhoods offer gated entry for enhanced security and privacy.',
              },
              {
                icon: '🏗️',
                title: 'Future Retail',
                desc: 'Planned commercial and retail services within walking distance.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-stone-950 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summerlin Amenities */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm uppercase tracking-wider">Beyond Kestrel Village</span>
            <h2 className="text-2xl font-light mt-2 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Summerlin <span className="italic text-amber-400">Amenities</span>
            </h2>
            <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
              As a Kestrel Village resident, you also have access to all of Summerlin&apos;s world-class amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: '🛍️',
                title: 'Downtown Summerlin',
                desc: '1.6 million sq ft of shopping, dining, and entertainment. Features over 125 stores, restaurants, and a minor league ballpark.',
                distance: '10 min drive',
              },
              {
                icon: '🏔️',
                title: 'Red Rock Canyon',
                desc: '13-mile scenic drive, world-class hiking, rock climbing, and stunning desert landscapes just minutes away.',
                distance: '15 min drive',
              },
              {
                icon: '⛳',
                title: 'Championship Golf',
                desc: 'Multiple courses including TPC Summerlin (PGA Tour), Bear\'s Best, and Siena Golf Club.',
                distance: '10-15 min drive',
              },
              {
                icon: '🏊',
                title: 'Aquatic Center',
                desc: 'Summerlin Pool and Aquatic Center offers lap swimming, water features, and seasonal activities.',
                distance: '15 min drive',
              },
              {
                icon: '🎭',
                title: 'The Smith Center',
                desc: 'World-class performing arts center hosting Broadway shows, concerts, and cultural events.',
                distance: '20 min drive',
              },
              {
                icon: '🏥',
                title: 'Medical Facilities',
                desc: 'Summerlin Hospital Medical Center and numerous medical offices provide comprehensive healthcare.',
                distance: '10 min drive',
              },
            ].map((item, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-stone-100">{item.title}</h3>
                      <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded-full">{item.distance}</span>
                    </div>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor Activities */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Outdoor <span className="italic text-amber-400">Activities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🚴', title: 'Cycling', desc: '200+ miles of trails' },
              { icon: '🧗', title: 'Rock Climbing', desc: 'Red Rock Canyon' },
              { icon: '⛰️', title: 'Hiking', desc: 'Desert trails' },
              { icon: '🎾', title: 'Tennis', desc: 'Community courts' },
            ].map((item, i) => (
              <div key={i} className="bg-stone-950 border border-stone-800 rounded-sm p-6">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-stone-100">{item.title}</h3>
                <p className="text-stone-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Year-Round <span className="italic text-amber-400">Outdoor Living</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <span className="text-4xl">☀️</span>
                <h3 className="text-2xl font-light text-amber-400 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>300+</h3>
                <p className="text-stone-400 text-sm">Days of Sunshine</p>
              </div>
              <div>
                <span className="text-4xl">🏔️</span>
                <h3 className="text-2xl font-light text-amber-400 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>3,000+</h3>
                <p className="text-stone-400 text-sm">Feet Elevation</p>
              </div>
              <div>
                <span className="text-4xl">🌡️</span>
                <h3 className="text-2xl font-light text-amber-400 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>5-10°</h3>
                <p className="text-stone-400 text-sm">Cooler Than the Valley</p>
              </div>
            </div>

            <p className="text-stone-400 text-center mt-8">
              Kestrel Village&apos;s elevated location means cooler temperatures than the Las Vegas valley floor, 
              making it perfect for outdoor activities year-round.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Experience Kestrel Village <span className="italic text-amber-400">In Person</span>
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Photos don&apos;t do justice to the views and atmosphere. Schedule a tour with Dr. Jan Duffy 
            to walk the trails and see the amenities firsthand.
          </p>
          <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Tour
          </CalendlyLink>
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
