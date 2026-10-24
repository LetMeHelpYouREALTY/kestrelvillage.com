import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Investment | Kestrel Village New Construction',
  description: 'Invest in Las Vegas real estate. New construction in Kestrel Village offers appreciation potential, rental income, and tax benefits. No state income tax.',
  alternates: { canonical: `${SITE_URL}/investment` },
  keywords: ['Las Vegas real estate investment', 'Summerlin investment property', 'Nevada rental property', 'new construction investment'],
  openGraph: {
    title: 'Las Vegas Real Estate Investment Opportunities',
    description: 'New construction investment in Kestrel Village. Strong appreciation, rental demand, and Nevada tax advantages.',
    url: `${SITE_URL}/investment`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function InvestmentPage() {
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

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-green-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-green-400">Investment Opportunity</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Real Estate <span className="italic text-green-400">Investment</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Why savvy investors are choosing Las Vegas new construction. Tax advantages, appreciation potential, 
            and strong rental demand.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Investment Opportunities</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Available <span className="italic text-amber-400">Properties</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Key Stats */}
      <section className="px-6 py-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-b border-green-500/30">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>0%</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">State Income Tax</div>
            </div>
            <div>
              <div className="text-3xl font-light text-blue-400" style={{ fontFamily: "'Playfair Display', serif" }}>4.2%</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Annual Appreciation*</div>
            </div>
            <div>
              <div className="text-3xl font-light text-purple-400" style={{ fontFamily: "'Playfair Display', serif" }}>$2,400</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Avg Monthly Rent*</div>
            </div>
            <div>
              <div className="text-3xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>#5</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Population Growth</div>
            </div>
          </div>
          <p className="text-xs text-stone-600 text-center mt-6">*Summerlin West averages, 2025 data</p>
        </div>
      </section>

      {/* Why Invest */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Invest in <span className="italic text-green-400">Las Vegas?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-500/10 border border-green-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💰</span>
                <h3 className="text-xl font-semibold text-green-400">Tax Advantages</h3>
              </div>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">No state income tax</strong> on rental income or capital gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Lower property taxes</strong> than California (0.6% vs 1.2%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Depreciation benefits</strong> on new construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">1031 exchange</strong> friendly state</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📈</span>
                <h3 className="text-xl font-semibold text-blue-400">Appreciation Potential</h3>
              </div>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Strong population growth</strong> drives demand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Limited land</strong> in Summerlin (development nearly complete)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Economic diversification</strong> beyond gaming</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Major employers</strong> expanding (tech, healthcare, sports)</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏠</span>
                <h3 className="text-xl font-semibold text-purple-400">Rental Demand</h3>
              </div>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">5,000+ monthly relocations</strong> to Las Vegas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Corporate rentals</strong> from expanding businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Low vacancy rates</strong> in Summerlin (~4%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Premium rents</strong> for new construction</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗️</span>
                <h3 className="text-xl font-semibold text-amber-400">New Construction Benefits</h3>
              </div>
              <ul className="space-y-3 text-stone-400">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Builder warranties</strong> reduce maintenance costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Energy efficiency</strong> lowers operating costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">Modern amenities</strong> attract quality tenants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✓</span>
                  <span><strong className="text-stone-300">No deferred maintenance</strong> at purchase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Analysis */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sample Investment <span className="italic text-green-400">Analysis</span>
            </h2>
            <p className="text-stone-400 mt-4">Hypothetical investment in a Kestrel Village townhome</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-6">Property Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Purchase Price</span>
                  <span className="text-green-400 font-semibold">$520,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Down Payment (20%)</span>
                  <span className="text-stone-300">$104,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Loan Amount</span>
                  <span className="text-stone-300">$416,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Interest Rate</span>
                  <span className="text-stone-300">6.5%</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-stone-400">Monthly P&I</span>
                  <span className="text-stone-300">$2,630</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-6">Monthly Cash Flow</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Gross Rent</span>
                  <span className="text-green-400 font-semibold">$2,800</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Mortgage (P&I)</span>
                  <span className="text-red-400">-$2,630</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Property Tax</span>
                  <span className="text-red-400">-$260</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Insurance</span>
                  <span className="text-red-400">-$100</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">HOA</span>
                  <span className="text-red-400">-$150</span>
                </div>
                <div className="flex justify-between py-2 font-semibold">
                  <span className="text-stone-100">Net Cash Flow</span>
                  <span className="text-red-400">-$340/mo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-sm p-6">
            <h3 className="text-lg font-semibold text-green-400 mb-4">The Full Picture</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-light text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>$21,840</div>
                <p className="text-stone-400 text-sm mt-1">Annual Appreciation (4.2%)</p>
              </div>
              <div>
                <div className="text-2xl font-light text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>$8,400</div>
                <p className="text-stone-400 text-sm mt-1">Principal Paydown (Year 1)</p>
              </div>
              <div>
                <div className="text-2xl font-light text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>$15,000+</div>
                <p className="text-stone-400 text-sm mt-1">Tax Benefits (Depreciation)</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm text-center mt-6">
              While monthly cash flow may be slightly negative, total returns from appreciation, equity buildup, 
              and tax benefits can yield strong overall ROI. This is a simplified example—actual results vary.
            </p>
          </div>
        </div>
      </section>

      {/* NextGen Investment */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🏠</span>
              <div>
                <h2 className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  NextGen® <span className="italic text-purple-400">Investment Strategy</span>
                </h2>
                <p className="text-stone-400 text-sm">Live in one, rent the other</p>
              </div>
            </div>
            
            <p className="text-stone-400 mb-6">
              Lennar&apos;s NextGen® homes in Mockingbird offer a unique investment opportunity: 
              live in the main home while renting the attached suite, or vice versa.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-900/50 rounded-sm p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Main Home</h4>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• 4 bedrooms, 3 bathrooms</li>
                  <li>• Full kitchen & living areas</li>
                  <li>• 2-car garage access</li>
                </ul>
              </div>
              <div className="bg-stone-900/50 rounded-sm p-4">
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Private Suite</h4>
                <ul className="text-stone-400 text-sm space-y-1">
                  <li>• 1 bedroom, 1 bathroom</li>
                  <li>• Kitchenette & living room</li>
                  <li>• Private entrance</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-stone-900/50 rounded-sm">
              <p className="text-stone-300 text-sm">
                <strong className="text-purple-400">Potential rental income:</strong> The private suite can rent for 
                $1,200-$1,500/month, significantly offsetting your mortgage. This arrangement may also help you qualify 
                for the loan with projected rental income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Tips */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Investor <span className="italic text-amber-400">Tips</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Work with a local expert',
                desc: 'Dr. Jan Duffy understands both new construction and investment strategies. She can help you analyze deals and negotiate with builders.',
              },
              {
                title: 'Consider long-term appreciation',
                desc: 'Summerlin has limited remaining land for development. New construction today may appreciate significantly as supply becomes more constrained.',
              },
              {
                title: 'Factor in all costs',
                desc: 'Include HOA fees, property management (if applicable), vacancy reserves, and maintenance when calculating returns.',
              },
              {
                title: 'Understand builder restrictions',
                desc: 'Some communities have rental restrictions. Make sure you can legally rent your property if that\'s part of your strategy.',
              },
              {
                title: 'Consult a tax professional',
                desc: 'Work with a CPA familiar with real estate investing to maximize your tax benefits and structure your investment properly.',
              },
            ].map((tip, i) => (
              <div key={i} className="bg-stone-950 border border-stone-800 rounded-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-950 font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-100 mb-2">{tip.title}</h3>
                    <p className="text-stone-400 text-sm">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-green-500/10 via-stone-900 to-stone-900 border border-green-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to <span className="italic text-green-400">Invest?</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy works with investors of all experience levels. Whether this is your first investment 
              property or you&apos;re building a portfolio, she can help you find the right opportunity.
            </p>
            <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-stone-950 font-semibold rounded-sm hover:bg-green-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Tour
            </CalendlyLink>
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
        <p className="text-stone-600 text-xs text-center mt-4 max-w-4xl mx-auto">
          Investment information is for educational purposes only and does not constitute financial advice. 
          Consult with qualified professionals before making investment decisions.
        </p>
      </footer>
    </div>
  );
}
