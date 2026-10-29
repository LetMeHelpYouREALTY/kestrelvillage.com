import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Relocating to Las Vegas | Moving to Summerlin Guide | Kestrel Village',
  description: 'Complete guide to relocating to Las Vegas and Summerlin. Cost of living, no state income tax, climate, schools, and why Kestrel Village is perfect for newcomers.',
  alternates: { canonical: `${SITE_URL}/relocation` },
  keywords: ['relocating to Las Vegas', 'moving to Summerlin', 'Las Vegas relocation guide', 'Nevada no income tax', 'Summerlin cost of living'],
  openGraph: {
    title: 'Relocating to Las Vegas | Summerlin Moving Guide',
    description: 'Everything you need to know about moving to Las Vegas and Summerlin. Cost of living, climate, schools, and new construction options.',
    url: `${SITE_URL}/relocation`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RelocationPage() {
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

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-purple-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-purple-400">New to Las Vegas?</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Relocating to <span className="italic text-purple-400">Las Vegas</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Thousands of people move to Las Vegas every month. Here&apos;s why—and why Kestrel Village 
            in Summerlin is the perfect place to call home.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Start Your Search</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              New Construction in <span className="italic text-amber-400">Summerlin</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-6 py-12 bg-gradient-to-r from-purple-500/10 to-green-500/10 border-b border-purple-500/30">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>0%</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">State Income Tax</div>
            </div>
            <div>
              <div className="text-3xl font-light text-purple-400" style={{ fontFamily: "'Playfair Display', serif" }}>300+</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Days of Sunshine</div>
            </div>
            <div>
              <div className="text-3xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>15%</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">Lower Cost of Living*</div>
            </div>
            <div>
              <div className="text-3xl font-light text-blue-400" style={{ fontFamily: "'Playfair Display', serif" }}>#1</div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">U.S. Moving Destination</div>
            </div>
          </div>
          <p className="text-xs text-stone-600 text-center mt-6">*Compared to California coastal cities</p>
        </div>
      </section>

      {/* Why Las Vegas */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why People Are Moving to <span className="italic text-purple-400">Las Vegas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-500/10 border border-green-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💰</span>
                <h3 className="text-xl font-semibold text-green-400">No State Income Tax</h3>
              </div>
              <p className="text-stone-400 mb-4">
                Nevada has no state income tax, meaning you keep more of what you earn. 
                For a household earning $150,000, that&apos;s potentially $10,000+ in annual savings compared to California.
              </p>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> No state income tax</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> No inheritance tax</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> No estate tax</li>
                <li className="flex items-start gap-2"><span className="text-green-500">✓</span> Lower property taxes than many states</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏠</span>
                <h3 className="text-xl font-semibold text-purple-400">Affordable Housing</h3>
              </div>
              <p className="text-stone-400 mb-4">
                Get more home for your money. A new construction home in Kestrel Village 
                costs a fraction of comparable homes in California, Seattle, or Phoenix.
              </p>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> New construction from $477K</li>
                <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> Larger lots than coastal cities</li>
                <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> Modern floor plans & finishes</li>
                <li className="flex items-start gap-2"><span className="text-purple-500">✓</span> Up to $20K in DPA available</li>
              </ul>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">☀️</span>
                <h3 className="text-xl font-semibold text-amber-400">Year-Round Sunshine</h3>
              </div>
              <p className="text-stone-400 mb-4">
                Las Vegas averages 300+ days of sunshine per year. Say goodbye to gray winters and 
                hello to outdoor living, pools, and golf year-round.
              </p>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-amber-500">✓</span> 300+ days of sunshine</li>
                <li className="flex items-start gap-2"><span className="text-amber-500">✓</span> Low humidity</li>
                <li className="flex items-start gap-2"><span className="text-amber-500">✓</span> Mild winters (rarely freezes)</li>
                <li className="flex items-start gap-2"><span className="text-amber-500">✓</span> 5-10° cooler in Summerlin</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💼</span>
                <h3 className="text-xl font-semibold text-blue-400">Growing Economy</h3>
              </div>
              <p className="text-stone-400 mb-4">
                Las Vegas has diversified far beyond gaming. Tech companies, healthcare, and 
                professional sports are driving growth and high-paying jobs.
              </p>
              <ul className="space-y-2 text-stone-300 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> NFL Raiders, NHL Knights, WNBA Aces</li>
                <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Major tech company expansions</li>
                <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Healthcare industry growth</li>
                <li className="flex items-start gap-2"><span className="text-blue-500">✓</span> Remote work friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Summerlin */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why <span className="italic text-amber-400">Summerlin</span>?
            </h2>
            <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
              Summerlin is Las Vegas&apos;s master-planned community—a common destination for buyers relocating to Southern Nevada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏫', title: 'Local Schools', desc: 'CCSD campuses plus private schools such as Bishop Gorman and The Meadows School—verify zones with the district.' },
              { icon: '🏔️', title: 'Natural Beauty', desc: 'Red Rock Canyon views, 200+ miles of trails, and 300+ parks.' },
              { icon: '🛡️', title: 'Services', desc: 'Summerlin Hospital Medical Center, Downtown Summerlin, and LVMPD serve Summerlin West.' },
              { icon: '🛍️', title: 'Amenities', desc: 'Downtown Summerlin, restaurants, entertainment all nearby.' },
              { icon: '✈️', title: 'Easy Access', desc: '20 minutes to the airport, easy freeway access.' },
              { icon: '🏘️', title: 'Community', desc: 'Older neighborhoods with HOAs that maintain standards.' },
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

      {/* Cost Comparison */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cost of Living <span className="italic text-green-400">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-800">
                  <th className="py-4 px-4 text-stone-400 font-medium">Category</th>
                  <th className="py-4 px-4 text-stone-400 font-medium">Las Vegas</th>
                  <th className="py-4 px-4 text-stone-400 font-medium">Los Angeles</th>
                  <th className="py-4 px-4 text-stone-400 font-medium">San Francisco</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-300">Median Home Price</td>
                  <td className="py-4 px-4 text-green-400">$425K</td>
                  <td className="py-4 px-4 text-stone-400">$950K</td>
                  <td className="py-4 px-4 text-stone-400">$1.4M</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-300">State Income Tax</td>
                  <td className="py-4 px-4 text-green-400">0%</td>
                  <td className="py-4 px-4 text-stone-400">13.3%</td>
                  <td className="py-4 px-4 text-stone-400">13.3%</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-300">Sales Tax</td>
                  <td className="py-4 px-4 text-amber-400">8.38%</td>
                  <td className="py-4 px-4 text-stone-400">9.5%</td>
                  <td className="py-4 px-4 text-stone-400">8.63%</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-300">Property Tax Rate</td>
                  <td className="py-4 px-4 text-green-400">~0.6%</td>
                  <td className="py-4 px-4 text-stone-400">~1.2%</td>
                  <td className="py-4 px-4 text-stone-400">~1.2%</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-300">Overall Cost Index</td>
                  <td className="py-4 px-4 text-green-400">103</td>
                  <td className="py-4 px-4 text-stone-400">173</td>
                  <td className="py-4 px-4 text-stone-400">188</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-600 text-center mt-4">
            Data approximate and subject to change. National average cost index = 100.
          </p>
        </div>
      </section>

      {/* Relocation Checklist */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Relocation <span className="italic text-purple-400">Checklist</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-4 flex items-center gap-2">
                <span className="text-purple-400">📋</span> Before You Move
              </h3>
              <ul className="space-y-3">
                {[
                  'Research neighborhoods (compare Summerlin West villages and commute times)',
                  'Get pre-approved for a mortgage',
                  'Connect with a local real estate agent (call Dr. Jan!)',
                  'Visit Las Vegas for a scouting trip',
                  'Research schools if you have children',
                  'Compare job opportunities or remote work options',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <span className="text-purple-500 mt-1">□</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-stone-100 mb-4 flex items-center gap-2">
                <span className="text-green-400">✅</span> After You Arrive
              </h3>
              <ul className="space-y-3">
                {[
                  'Get Nevada driver\'s license (within 30 days)',
                  'Register vehicles in Nevada',
                  'Register to vote',
                  'Update address with banks, employers, etc.',
                  'Find local doctors, dentists, etc.',
                  'Explore your new neighborhood!',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <span className="text-green-500 mt-1">□</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kestrel Village */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why <span className="italic text-amber-400">Kestrel Village</span> for Relocators?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: '🏠', title: 'Brand New Homes', desc: 'No surprises with new construction—everything has warranties.' },
                { icon: '🎨', title: 'Choose Your Finishes', desc: 'Personalize your home at the design center.' },
                { icon: '📍', title: 'Prime Location', desc: 'CCSD school zones, Red Rock views, 3,000+ ft elevation in Summerlin West.' },
                { icon: '💰', title: 'DPA Available', desc: 'Up to $20,000 in down payment assistance.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-100">{item.title}</h3>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 pt-8 border-t border-stone-800">
              <p className="text-stone-400 mb-4">
                Dr. Jan Duffy helps relocating buyers tour Kestrel Village communities and navigate new-build contracts.
              </p>
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </CalendlyLink>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-stone-500 md:text-left">
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC
          </p>
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">Schedule a Tour</CalendlyLink>
        </div>
      </footer>
    </div>
  );
}
