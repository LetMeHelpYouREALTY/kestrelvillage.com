import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Report | Summerlin Housing Trends',
  description: 'Las Vegas and Summerlin real estate market report. Home prices, inventory levels, market trends, and new construction statistics for Kestrel Village buyers.',
  alternates: { canonical: `${SITE_URL}/market-report` },
  keywords: ['Las Vegas real estate market', 'Summerlin home prices', 'Las Vegas housing trends', 'Summerlin market report'],
  openGraph: {
    title: 'Las Vegas Real Estate Market Report 2026',
    description: 'Current market statistics, trends, and insights for Las Vegas and Summerlin real estate.',
    url: `${SITE_URL}/market-report`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function MarketReportPage() {
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

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-blue-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400">Market Intelligence</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Las Vegas <span className="italic text-blue-400">Market Report</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Real-time market data and trends for Las Vegas, Summerlin, and Kestrel Village new construction.
          </p>
          <p className="mt-4 text-sm text-stone-500">Last updated: January 2026</p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Current Inventory</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes for Sale <span className="italic text-amber-400">Right Now</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="px-6 py-12 bg-gradient-to-r from-blue-500/10 to-green-500/10 border-b border-blue-500/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-lg font-semibold text-stone-300 mb-8">Las Vegas Metro Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-stone-900/50 rounded-sm p-6 border border-stone-800">
              <div className="text-3xl font-light text-blue-400" style={{ fontFamily: "'Playfair Display', serif" }}>$425K</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Median Home Price</div>
              <div className="text-xs text-green-400 mt-2">↑ 4.2% YoY</div>
            </div>
            <div className="bg-stone-900/50 rounded-sm p-6 border border-stone-800">
              <div className="text-3xl font-light text-purple-400" style={{ fontFamily: "'Playfair Display', serif" }}>32</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Avg Days on Market</div>
              <div className="text-xs text-green-400 mt-2">↓ 5 days</div>
            </div>
            <div className="bg-stone-900/50 rounded-sm p-6 border border-stone-800">
              <div className="text-3xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>2.1</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Months of Inventory</div>
              <div className="text-xs text-amber-400 mt-2">Seller&apos;s Market</div>
            </div>
            <div className="bg-stone-900/50 rounded-sm p-6 border border-stone-800">
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>98.5%</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Sale-to-List Ratio</div>
              <div className="text-xs text-green-400 mt-2">Strong Demand</div>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Focus */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Summerlin <span className="italic text-amber-400">Market Data</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-6">Summerlin West (89138)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Median Price</span>
                  <span className="text-amber-400 font-semibold">$575,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Price per Sq Ft</span>
                  <span className="text-stone-300">$285</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Active Listings</span>
                  <span className="text-stone-300">145</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">New Listings (30 days)</span>
                  <span className="text-stone-300">68</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-stone-400">Avg Days on Market</span>
                  <span className="text-stone-300">28 days</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-6">New Construction Trends</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Kestrel Village Starting</span>
                  <span className="text-green-400 font-semibold">$477,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Builder Incentives</span>
                  <span className="text-green-400">Available</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Avg Build Time</span>
                  <span className="text-stone-300">5-7 months</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-stone-800">
                  <span className="text-stone-400">Move-In Ready Homes</span>
                  <span className="text-amber-400">Limited</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-stone-400">YoY Price Change</span>
                  <span className="text-green-400">↑ 3.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Market <span className="italic text-blue-400">Analysis</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📈</span>
                <h3 className="text-xl font-semibold text-stone-100">Strong Demand Continues</h3>
              </div>
              <p className="text-stone-400 leading-relaxed">
                Las Vegas continues to attract buyers from California and other high-cost states. 
                The combination of no state income tax, affordable housing, and year-round sunshine 
                keeps demand strong. Summerlin, particularly new construction in areas like Kestrel Village, 
                remains highly sought after by relocating buyers and professionals.
              </p>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗️</span>
                <h3 className="text-xl font-semibold text-stone-100">New Construction Premium</h3>
              </div>
              <p className="text-stone-400 leading-relaxed">
                New construction homes in Summerlin command a premium over resale properties, typically 
                10-15% higher per square foot. However, buyers benefit from modern floor plans, energy efficiency, 
                builder warranties, and the ability to customize finishes. With builder incentives often covering 
                closing costs, the effective premium is often much smaller.
              </p>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h3 className="text-xl font-semibold text-stone-100">Buyer Strategies</h3>
              </div>
              <p className="text-stone-400 leading-relaxed mb-4">
                In the current market, successful buyers are:
              </p>
              <ul className="space-y-2">
                {[
                  'Getting pre-approved before touring homes',
                  'Working with agents who know new construction (like Dr. Jan Duffy)',
                  'Taking advantage of down payment assistance programs ($20K available)',
                  'Negotiating for builder credits and upgrades',
                  'Acting quickly when good opportunities arise',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-300">
                    <span className="text-blue-500 mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Ranges */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kestrel Village <span className="italic text-amber-400">Price Ranges</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-900/50 border border-green-500/30 rounded-sm p-6 text-center">
              <div className="text-green-400 text-sm uppercase tracking-wider mb-2">Entry Level</div>
              <div className="text-3xl font-light text-stone-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                $477K - $550K
              </div>
              <p className="text-stone-400 text-sm mb-4">Townhomes & 2-3 Story</p>
              <ul className="text-stone-500 text-xs space-y-1">
                <li>Vireo (Woodside)</li>
                <li>Dove Rock (Woodside)</li>
              </ul>
            </div>

            <div className="bg-stone-900/50 border border-amber-500/30 rounded-sm p-6 text-center">
              <div className="text-amber-400 text-sm uppercase tracking-wider mb-2">Mid Range</div>
              <div className="text-3xl font-light text-stone-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                $550K - $700K
              </div>
              <p className="text-stone-400 text-sm mb-4">Single-Family Homes</p>
              <ul className="text-stone-500 text-xs space-y-1">
                <li>Falcon Crest (Woodside)</li>
                <li>Blacktail (Pulte)</li>
              </ul>
            </div>

            <div className="bg-stone-900/50 border border-purple-500/30 rounded-sm p-6 text-center">
              <div className="text-purple-400 text-sm uppercase tracking-wider mb-2">Premium</div>
              <div className="text-3xl font-light text-stone-100 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                $700K - $900K+
              </div>
              <p className="text-stone-400 text-sm mb-4">Large Homes & NextGen</p>
              <ul className="text-stone-500 text-xs space-y-1">
                <li>Mockingbird (Lennar)</li>
                <li>NextGen Suites Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Forecast */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-500/10 via-stone-900 to-stone-900 border border-blue-500/20 rounded-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                2026 Market <span className="italic text-blue-400">Outlook</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-green-400 text-2xl mb-2">↑</div>
                <h3 className="text-lg font-semibold text-stone-100">Prices</h3>
                <p className="text-stone-400 text-sm mt-2">Expected 3-5% appreciation in Summerlin</p>
              </div>
              <div>
                <div className="text-amber-400 text-2xl mb-2">→</div>
                <h3 className="text-lg font-semibold text-stone-100">Inventory</h3>
                <p className="text-stone-400 text-sm mt-2">Tight supply continues, especially new construction</p>
              </div>
              <div>
                <div className="text-blue-400 text-2xl mb-2">↓</div>
                <h3 className="text-lg font-semibold text-stone-100">Rates</h3>
                <p className="text-stone-400 text-sm mt-2">Rates expected to ease slightly through 2026</p>
              </div>
            </div>

            <p className="text-stone-400 text-center mt-8 text-sm">
              Dr. Jan Duffy&apos;s recommendation: With prices expected to rise and inventory remaining tight, 
              buyers should consider acting now, especially with builder incentives and DPA programs available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get a <span className="italic text-amber-400">Personalized</span> Market Analysis
          </h2>
          <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
            Want detailed market data for a specific Kestrel Village community or Summerlin neighborhood? 
            Dr. Jan Duffy provides free market consultations to help you make informed decisions.
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
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC
          </p>
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">Schedule a Tour</CalendlyLink>
        </div>
        <p className="text-stone-600 text-xs text-center mt-4 max-w-4xl mx-auto">
          Market data is approximate and for informational purposes only. Contact Dr. Jan Duffy for current, accurate market information.
        </p>
      </footer>
    </div>
  );
}
