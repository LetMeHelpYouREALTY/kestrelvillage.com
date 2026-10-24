import type { Metadata } from 'next';
import Link from 'next/link';
import { communities } from '@/data/communities';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Kestrel Village Communities | New Construction Summerlin West',
  description:
    'Explore 8 Kestrel Village communities in Summerlin West, Las Vegas. Townhomes to single-family homes from $455K. Woodside, KB Home, Taylor Morrison, Lennar & Pulte.',
  alternates: { canonical: `${SITE_URL}/communities` },
  openGraph: {
    title: 'Kestrel Village Communities | New Construction Summerlin West',
    description:
      'Eight distinct neighborhoods offering townhomes to single-family estates. Contemporary Spanish architecture and Summerlin\'s signature quality.',
    url: `${SITE_URL}/communities`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Communities', item: `${SITE_URL}/communities` },
  ],
};

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="sticky top-0 z-40 border-b border-stone-800/50 bg-stone-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-amber-500">
              <span className="text-sm font-bold text-stone-950">KV</span>
            </div>
            <span className="hidden font-semibold text-lg sm:block">
              Kestrel Village
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <CalendlyLink className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              Schedule a Tour
            </CalendlyLink>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">
            New Construction
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Kestrel Village <span className="italic text-amber-400">Communities</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400">
            Eight distinct neighborhoods offering townhomes to single-family estates.
            Contemporary Spanish architecture and Summerlin&apos;s signature quality.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#communities"
              className="text-sm text-amber-500 hover:text-amber-400 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              href="/compare"
              className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
            >
              Compare communities →
            </Link>
          </div>
        </div>
      </header>

      {/* Active Listings - RealScout Widget */}
      <section className="border-t border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">
              Live MLS Listings
            </p>
            <h2
              className="mt-4 text-3xl font-light md:text-4xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Active Homes <span className="italic text-amber-400">for Sale</span>
            </h2>
            <p className="mt-4 text-stone-400">
              Browse current Kestrel Village listings updated in real-time from the MLS.
            </p>
          </div>

          {/* Registration Reminder */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-300 text-sm text-center md:text-left">
              <strong className="text-amber-400">Important:</strong> Register with Dr. Jan Duffy before your first builder visit to ensure representation.
            </p>
            <CalendlyLink className="flex-shrink-0 px-6 py-2 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors text-sm whitespace-nowrap">
              Schedule a Tour
            </CalendlyLink>
          </div>

          {/* RealScout Widget - lazy-loaded when in view */}
          <RealScoutListingsSection />

          <div className="mt-8 text-center">
            <p className="text-stone-500 text-sm mb-4">
              Powered by GLVAR MLS • Updated every 15 minutes
              {' • '}
              <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">
                Get personalized listings
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {communities.map((c) => {
              const statusClass =
                c.status === 'Now Selling'
                  ? 'bg-green-500/20 text-green-400'
                  : c.status === 'Move-In Ready'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-stone-700 text-stone-400';
              return (
                <Link
                  key={c.slug}
                  href={`/communities/${c.slug}`}
                  className="group block overflow-hidden rounded-sm border border-stone-800 bg-stone-950 transition-all duration-300 hover:border-amber-500/50"
                >
                  <div className="border-b border-stone-800 bg-gradient-to-r from-amber-500/10 to-transparent p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-amber-500">
                          {c.builder}
                        </p>
                        <h2
                          className="mt-1 text-2xl font-light text-stone-100"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {c.name}
                        </h2>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs ${statusClass}`}
                      >
                        {c.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-6 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs uppercase text-stone-500">Type</p>
                        <p className="text-stone-200">{c.type}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-stone-500">Sq Ft</p>
                        <p className="text-stone-200">{c.sqft}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-stone-500">Beds</p>
                        <p className="text-stone-200">{c.beds}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase text-stone-500">Garage</p>
                        <p className="text-stone-200">{c.garage}</p>
                      </div>
                    </div>
                    <p className="mb-6 min-h-[40px] text-sm text-stone-400">
                      {c.highlight}
                    </p>
                    <div className="flex items-center justify-between border-t border-stone-800 pt-4">
                      <span
                        className="text-2xl font-light text-amber-400"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {c.price}
                      </span>
                      <span className="text-xs text-stone-500">
                        {c.units} homes
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-stone-800 bg-stone-900 p-4 text-center text-sm font-medium text-stone-400 transition-all group-hover:bg-amber-500 group-hover:text-stone-950">
                    View {c.name} →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-800 px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-stone-500">
            Ready to tour? Call Dr. Jan Duffy to schedule your VIP visit and ensure
            you&apos;re properly registered with the builder.
          </p>
          <CalendlyLink className="mt-4 inline-flex items-center gap-2 rounded-sm bg-amber-500 px-6 py-3 font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
            Schedule a Tour
          </CalendlyLink>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-stone-500 md:text-left">
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC
          </p>
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">
            Schedule a Tour
          </CalendlyLink>
        </div>
      </footer>
    </div>
  );
}
