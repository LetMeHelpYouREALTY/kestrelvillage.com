import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';
import { NearbyAmenitiesSection } from '@/components/maps/NearbyAmenitiesSection';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Homes for Sale in Kestrel Village & Summerlin | MLS Listings',
  description: 'Search homes for sale in Kestrel Village and Summerlin West. New construction and resale properties. Live MLS listings updated daily. From $477K.',
  alternates: { canonical: `${SITE_URL}/listings` },
  keywords: ['Kestrel Village homes for sale', 'Summerlin homes for sale', 'Las Vegas new construction', 'Summerlin West MLS listings'],
  openGraph: {
    title: 'Homes for Sale in Kestrel Village & Summerlin',
    description: 'Search live MLS listings in Kestrel Village and Summerlin. New construction from $477K.',
    url: `${SITE_URL}/listings`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function ListingsPage() {
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

      <header className="border-b border-stone-800/50 px-6 py-16 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Homes for <span className="italic text-amber-400">Sale</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Browse available homes in Kestrel Village and Summerlin West. Updated daily from the MLS.
          </p>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="px-6 py-8 bg-stone-900/50 border-b border-stone-800/50">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>$477K</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>5</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Communities</div>
            </div>
            <div>
              <div className="text-2xl font-light text-blue-400" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Builders</div>
            </div>
            <div>
              <div className="text-2xl font-light text-purple-400" style={{ fontFamily: "'Playfair Display', serif" }}>Daily</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 py-6 bg-gradient-to-r from-amber-500/10 to-rose-500/10 border-b border-amber-500/30">
        <div className="mx-auto max-w-4xl flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-stone-300 text-sm">
            <strong className="text-amber-400">Important:</strong> Call Dr. Jan Duffy at 702-222-1964 BEFORE visiting any model homes. 
            Builder registration is required on your first visit to protect your buyer representation rights.
          </p>
        </div>
      </section>

      {/* Main Listings Widget */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <RealScoutListingsSection />
          <p className="mt-6 text-center text-stone-500 text-sm">
            <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">
              Get personalized listings & alerts →
            </a>
          </p>
        </div>
      </section>

      <NearbyAmenitiesSection
        heading="What's Near Your Next Home"
        subheading="See schools, grocery, parks, and healthcare around Kestrel Village while you browse listings."
      />

      {/* Search Tips */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Search <span className="italic text-amber-400">Tips</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <span className="text-3xl mb-4 block">🏠</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">New Construction</h3>
              <p className="text-stone-400 text-sm">
                Look for "New Construction" tags. These are homes being built by Woodside, Lennar, and Pulte in Kestrel Village.
              </p>
            </div>
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <span className="text-3xl mb-4 block">📍</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">Location Filter</h3>
              <p className="text-stone-400 text-sm">
                Use the map view to focus on Summerlin West (89138) for Kestrel Village properties specifically.
              </p>
            </div>
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <span className="text-3xl mb-4 block">💰</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">Price Alerts</h3>
              <p className="text-stone-400 text-sm">
                Register for an account to save searches and get instant notifications when new homes hit the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Range Guide */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kestrel Village <span className="italic text-amber-400">Price Guide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { community: 'Vireo', builder: 'Woodside', price: 'From $477K', type: '2-3 Story' },
              { community: 'Dove Rock', builder: 'Woodside', price: 'From $520K', type: 'Townhomes' },
              { community: 'Falcon Crest', builder: 'Woodside', price: 'From $580K', type: 'Single-Story' },
              { community: 'Blacktail', builder: 'Pulte', price: 'From $636K', type: 'Three-Story' },
              { community: 'Mockingbird', builder: 'Lennar', price: 'From $838K', type: 'Two-Story' },
            ].map((item, i) => (
              <Link 
                key={i} 
                href={`/communities/${item.community.toLowerCase().replace(' ', '-')}`}
                className="bg-stone-900/50 border border-stone-800 rounded-sm p-4 hover:border-amber-500/50 transition-all text-center"
              >
                <h3 className="text-lg font-semibold text-stone-100">{item.community}</h3>
                <p className="text-amber-400 text-sm mt-1">{item.price}</p>
                <p className="text-stone-500 text-xs mt-2">{item.builder} • {item.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Found a Home You <span className="italic text-amber-400">Love?</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Don&apos;t schedule a showing without calling first! Dr. Jan Duffy will register you with the builder 
              and accompany you on your tour to protect your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </CalendlyLink>
              <a href="mailto:jan@drjanduffy.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors">
                Email Dr. Jan Duffy
              </a>
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
        <p className="text-stone-600 text-xs text-center mt-4 max-w-4xl mx-auto">
          Listings provided by Greater Las Vegas Association of REALTORS® MLS. Information deemed reliable but not guaranteed.
          {' '}
          <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">Get personalized listings</a>.
        </p>
      </footer>
    </div>
  );
}
