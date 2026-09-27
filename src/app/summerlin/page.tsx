import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';
import { NearbyAmenitiesSection } from '@/components/maps/NearbyAmenitiesSection';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Summerlin Las Vegas | Master-Planned Community | Kestrel Village',
  description: 'Discover Summerlin, Las Vegas\'s premier master-planned community. 22,500 acres, 200+ miles of trails, 300+ parks, top-rated schools. Kestrel Village is the newest village in Summerlin West.',
  alternates: { canonical: `${SITE_URL}/summerlin` },
  openGraph: {
    title: 'Summerlin Las Vegas | Premier Master-Planned Community',
    description: 'Summerlin spans 22,500 acres with 200+ miles of trails, 300+ parks, and world-class amenities. Home to Kestrel Village in Summerlin West.',
    url: `${SITE_URL}/summerlin`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function SummerlinPage() {
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
          <p className="text-xs uppercase tracking-widest text-amber-500">Las Vegas Premier Community</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Welcome to <span className="italic text-amber-400">Summerlin</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Nevada&apos;s most celebrated master-planned community, home to Kestrel Village and the finest new construction homes in Las Vegas.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes for Sale in <span className="italic text-amber-400">Summerlin</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-b border-stone-800/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '22,500', label: 'Acres' },
              { value: '200+', label: 'Miles of Trails' },
              { value: '300+', label: 'Parks' },
              { value: '26', label: 'Schools' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <div className="text-3xl md:text-4xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500 uppercase tracking-wider mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summerlin */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                A Legacy of <span className="italic text-amber-400">Excellence</span>
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  Summerlin is a 22,500-acre master-planned community developed by Howard Hughes Corporation, 
                  consistently ranked among the nation&apos;s best-selling master-planned communities. 
                  Located along the western rim of the Las Vegas Valley, Summerlin offers an unparalleled 
                  lifestyle with stunning mountain views and desert landscapes.
                </p>
                <p>
                  The community features world-class amenities including over 200 miles of trails, 
                  300+ parks, championship golf courses, and the vibrant Downtown Summerlin 
                  entertainment district. With 26 schools and easy access to Red Rock Canyon, 
                  Summerlin offers the perfect balance of urban convenience and natural beauty.
                </p>
                <p>
                  <strong className="text-stone-300">Kestrel Village</strong> is one of Summerlin&apos;s newest 
                  villages, located in Summerlin West at an elevation of 3,000+ feet. It offers the latest 
                  new construction homes from premier builders like Woodside Homes, Lennar, and Pulte Homes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-sm overflow-hidden border border-stone-800 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103089.25366366373!2d-115.40!3d36.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4e2e8b2d77b%3A0x9e2a2a9a9a9a9a9a!2sSummerlin%2C%20Las%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Summerlin Las Vegas Map"
                />
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-4">
                <p className="text-stone-300 text-sm">
                  <strong className="text-amber-400">Kestrel Village Location:</strong> Summerlin West, Las Vegas, NV 89138 — the newest and most elevated village in Summerlin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Amenities */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Summerlin <span className="italic text-amber-400">Lifestyle</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🥾',
                title: 'Trails & Parks',
                desc: 'Over 200 miles of interconnected trails and 300+ parks for hiking, biking, and outdoor recreation.'
              },
              {
                icon: '🛍️',
                title: 'Downtown Summerlin',
                desc: '1.6 million sq ft of shopping, dining, and entertainment including a minor league ballpark.'
              },
              {
                icon: '⛳',
                title: 'Championship Golf',
                desc: 'Multiple championship courses including TPC Summerlin, home to the PGA Tour.'
              },
              {
                icon: '🏫',
                title: 'Top-Rated Schools',
                desc: '26 public and private schools with some of Nevada\'s highest academic rankings.'
              },
              {
                icon: '🏔️',
                title: 'Red Rock Canyon',
                desc: 'Minutes from Red Rock Canyon National Conservation Area with world-class hiking and climbing.'
              },
              {
                icon: '🏥',
                title: 'Healthcare',
                desc: 'Summerlin Hospital Medical Center and numerous medical facilities nearby.'
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

      {/* Summerlin Villages */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Summerlin <span className="italic text-amber-400">Villages</span>
            </h2>
            <p className="text-stone-400 mt-4">
              Summerlin is comprised of distinct villages, each with its own character and amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/10 border-2 border-amber-500/50 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⭐</span>
                <h3 className="text-xl font-semibold text-amber-400">Kestrel Village</h3>
                <span className="text-xs bg-amber-500 text-stone-950 px-2 py-1 rounded-full">NEWEST</span>
              </div>
              <p className="text-stone-300 mb-4">
                Summerlin&apos;s newest village in Summerlin West. 3,000+ ft elevation with panoramic valley views. 
                New construction homes from $477K by Woodside, Lennar, and Pulte.
              </p>
              <Link href="/communities" className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                Explore Kestrel Village Communities →
              </Link>
            </div>

            {[
              { name: 'The Paseos', desc: 'Family-friendly village with excellent schools and parks.' },
              { name: 'The Arbors', desc: 'Established village with mature landscaping and golf course access.' },
              { name: 'The Ridges', desc: 'Luxury custom homes with stunning Red Rock views.' },
              { name: 'Stonebridge', desc: 'Guard-gated community with premium amenities.' },
              { name: 'The Cliffs', desc: 'Elevated homes with dramatic desert canyon views.' },
            ].map((village, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{village.name}</h3>
                <p className="text-stone-400 text-sm">{village.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Summerlin */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose <span className="italic text-amber-400">Summerlin?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-stone-100">Quality of Life</h3>
              <ul className="space-y-3">
                {[
                  '#1 Best-Selling Master-Planned Community in Nevada',
                  'Clean air and 300+ days of sunshine annually',
                  'Safe, family-friendly neighborhoods',
                  'Strong property values and appreciation',
                  'Active lifestyle with endless outdoor activities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <span className="text-amber-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-stone-100">Convenience</h3>
              <ul className="space-y-3">
                {[
                  '20 minutes to Las Vegas Strip and airport',
                  'Easy freeway access via I-215 and US-95',
                  'World-class shopping at Downtown Summerlin',
                  'Top-rated restaurants and entertainment',
                  'Minutes from Red Rock Canyon',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <span className="text-amber-500 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NearbyAmenitiesSection
        heading="What's Near Kestrel Village in Summerlin"
        subheading="From new homes in Kestrel Village to regional shopping, parks, and healthcare across Summerlin West."
      />

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Discover Kestrel Village in <span className="italic text-amber-400">Summerlin West</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Experience Summerlin&apos;s newest village with new construction homes from $477K. 
              Contact Dr. Jan Duffy to schedule your VIP tour today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </CalendlyLink>
              <Link href="/communities" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors">
                View Communities →
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
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">Schedule a Tour</CalendlyLink>
        </div>
      </footer>
    </div>
  );
}
