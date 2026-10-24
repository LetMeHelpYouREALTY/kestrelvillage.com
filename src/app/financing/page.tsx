import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Nevada Home Financing & Down Payment Assistance | Kestrel Village',
  description: 'Nevada down payment assistance programs for Kestrel Village buyers. Home is Possible offers up to $20,000 DPA. Worker Advantage, first-time buyer, teacher & veteran programs.',
  alternates: { canonical: `${SITE_URL}/financing` },
  keywords: ['Nevada down payment assistance', 'Home is Possible', 'first time homebuyer Nevada', 'Las Vegas DPA programs', 'Worker Advantage Nevada'],
  openGraph: {
    title: 'Nevada Down Payment Assistance | Kestrel Village',
    description: 'Up to $20,000 in down payment assistance for Kestrel Village homebuyers through Nevada Housing Division programs.',
    url: `${SITE_URL}/financing`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const programs = [
  {
    name: 'Worker Advantage',
    highlight: 'Up to $20,000 DPA',
    description: 'Nevada\'s newest program for essential workers. No first-time buyer requirement. Must be employed in an "Essential Worker" category and Nevada resident for 6+ months.',
    eligibility: [
      'Essential Worker employment required',
      'Nevada resident for 6+ months',
      'NOT required to be first-time buyer',
      'Max purchase price: $832,750',
      'Min credit score: 640',
    ],
    rates: [
      { type: 'FHA/VA/USDA (4% pts)', rate: '5.125%', dpa: '$20,000' },
      { type: 'FHA/VA/USDA (2% pts)', rate: '5.500%', dpa: '$20,000' },
      { type: 'FHA/VA/USDA', rate: '6.250%', dpa: '$20,000' },
      { type: 'Conventional (4% pts)', rate: '5.375%', dpa: '$20,000' },
      { type: 'Conventional', rate: '6.750%', dpa: '$20,000' },
    ],
    secondMortgage: '30-year no interest, no payment',
    icon: '👷',
    color: 'amber',
  },
  {
    name: 'HIP for First-Time Homebuyers',
    highlight: 'Best Rates',
    description: 'Nevada\'s flagship program for first-time buyers with excellent rates and flexible down payment assistance options.',
    eligibility: [
      'Must be first-time homebuyer (no ownership in 3 years)',
      'Income limits by county',
      'Min credit score: 640',
      'Primary residence only',
    ],
    rates: [
      { type: 'FHA/VA/USDA (2% DPA)', rate: '6.125%', dpa: '2%' },
      { type: 'FHA/VA/USDA (4% DPA)', rate: '6.375%', dpa: '4%' },
      { type: 'Conventional <80% AMI (2%)', rate: '6.375%', dpa: '2%' },
      { type: 'Conventional <80% AMI (4%)', rate: '6.500%', dpa: '4%' },
    ],
    secondMortgage: '30-year no interest, no payment',
    icon: '🏠',
    color: 'green',
  },
  {
    name: 'HIP-DPA',
    highlight: '3% or 5% Down',
    description: 'Flexible down payment assistance for buyers who don\'t qualify for first-time buyer programs. Available for FHA, VA, USDA, and Conventional loans.',
    eligibility: [
      'NOT required to be first-time buyer',
      'Max purchase price: $832,750',
      'Max income: $165,000',
      'Min credit score: 640',
      'Can own another property outside Nevada',
    ],
    rates: [
      { type: 'FHA/VA/USDA (3% DPA)', rate: '6.875%', dpa: '3%' },
      { type: 'FHA/VA/USDA (5% DPA)', rate: '7.125%', dpa: '5%' },
      { type: 'Conventional (3% DPA)', rate: '7.125%', dpa: '3%' },
      { type: 'Conventional (5% DPA)', rate: '7.250%', dpa: '5%' },
    ],
    secondMortgage: '30-year no interest, no payment',
    icon: '💰',
    color: 'blue',
  },
  {
    name: 'HIP for Teachers',
    highlight: '$7,500 Forgivable',
    description: 'Special program for Nevada K-12 public school teachers with forgivable down payment assistance.',
    eligibility: [
      'Nevada licensed K-12 public/charter school teacher',
      'Full-time classroom teacher',
      'Max purchase price: $832,750',
      'Min credit score: 640',
    ],
    rates: [
      { type: 'FHA/VA/USDA', rate: '6.250%', dpa: '$7,500' },
      { type: 'Conventional', rate: '6.500%', dpa: '$7,500' },
    ],
    secondMortgage: '5-year prorated forgivable',
    icon: '📚',
    color: 'purple',
  },
  {
    name: 'HIP for Heroes',
    highlight: 'No DPA Needed',
    description: 'VA and USDA loans with competitive rates for veterans and rural buyers who don\'t need down payment assistance.',
    eligibility: [
      'VA or USDA loan eligible',
      'Max purchase price: $832,750',
      'Max income: $165,000',
      'Min credit score: 640',
    ],
    rates: [
      { type: 'VA & USDA', rate: '6.250%', dpa: '0%' },
    ],
    secondMortgage: 'N/A',
    icon: '🎖️',
    color: 'red',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Financing', item: `${SITE_URL}/financing` },
  ],
};

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
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
            <CalendlyLink className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              Schedule a Tour
            </CalendlyLink>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-green-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-green-500">Nevada Housing Division Programs</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Down Payment <span className="italic text-green-400">Assistance</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Nevada offers up to <span className="text-green-400 font-semibold">$20,000</span> in down payment assistance through 
            the Home is Possible program. These programs can make Kestrel Village homes more affordable.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes Eligible for <span className="italic text-green-400">DPA Programs</span>
            </h2>
          </div>

          <RealScoutListingsSection />

          <p className="text-xs text-stone-600 text-center mt-4">
            Showing homes under $832,750 (max purchase price for most HIP programs)
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="px-6 py-12 border-b border-stone-800/50 bg-gradient-to-r from-green-500/10 to-transparent">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>$20,000</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Max DPA Available</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>5.125%</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Lowest Rate*</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>$832K</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Max Purchase Price</div>
            </div>
            <div>
              <div className="text-3xl font-light text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>640</div>
              <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Min Credit Score</div>
            </div>
          </div>
          <p className="text-xs text-stone-600 text-center mt-6">*Rates as of January 27, 2026. Subject to change.</p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 py-8 bg-amber-500/10 border-b border-amber-500/30">
        <div className="mx-auto max-w-4xl flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-amber-500">💡</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-stone-100 mb-2">Kestrel Village + DPA = Affordable Homeownership</h2>
            <p className="text-stone-300 text-sm">
              With homes starting at <strong className="text-amber-400">$477,000</strong> and up to <strong className="text-amber-400">$20,000</strong> in 
              down payment assistance available, Kestrel Village is within reach for many Nevada buyers. 
              Dr. Jan Duffy can connect you with HIP-approved lenders who specialize in new construction.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Home is Possible <span className="italic text-green-400">Programs</span>
            </h2>
            <p className="text-stone-400 mt-4">Compare Nevada Housing Division programs to find your best option</p>
          </div>

          <div className="space-y-8">
            {programs.map((program, idx) => (
              <div key={idx} className="border border-stone-800 rounded-sm overflow-hidden hover:border-stone-700 transition-all">
                <div className={`p-6 border-b border-stone-800 bg-gradient-to-r ${
                  program.color === 'amber' ? 'from-amber-500/10' :
                  program.color === 'green' ? 'from-green-500/10' :
                  program.color === 'blue' ? 'from-blue-500/10' :
                  program.color === 'purple' ? 'from-purple-500/10' :
                  'from-red-500/10'
                } to-transparent`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{program.icon}</span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {program.name}
                        </h3>
                        <span className={`text-sm font-medium ${
                          program.color === 'amber' ? 'text-amber-400' :
                          program.color === 'green' ? 'text-green-400' :
                          program.color === 'blue' ? 'text-blue-400' :
                          program.color === 'purple' ? 'text-purple-400' :
                          'text-red-400'
                        }`}>{program.highlight}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-stone-500 uppercase">2nd Mortgage</p>
                      <p className="text-stone-300 text-sm">{program.secondMortgage}</p>
                    </div>
                  </div>
                  <p className="text-stone-400 mt-4">{program.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Rates */}
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Current Rates</h4>
                      <div className="space-y-2">
                        {program.rates.map((rate, i) => (
                          <div key={i} className="flex items-center justify-between p-3 bg-stone-900/50 rounded-sm">
                            <span className="text-stone-300 text-sm">{rate.type}</span>
                            <div className="text-right">
                              <span className={`font-semibold ${
                                program.color === 'amber' ? 'text-amber-400' :
                                program.color === 'green' ? 'text-green-400' :
                                program.color === 'blue' ? 'text-blue-400' :
                                program.color === 'purple' ? 'text-purple-400' :
                                'text-red-400'
                              }`}>{rate.rate}</span>
                              <span className="text-stone-500 text-xs ml-2">({rate.dpa} DPA)</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-stone-500 mb-4">Eligibility</h4>
                      <ul className="space-y-2">
                        {program.eligibility.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-stone-400 text-sm">
                            <span className={`mt-0.5 ${
                              program.color === 'amber' ? 'text-amber-500' :
                              program.color === 'green' ? 'text-green-500' :
                              program.color === 'blue' ? 'text-blue-500' :
                              program.color === 'purple' ? 'text-purple-500' :
                              'text-red-500'
                            }`}>✓</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick <span className="italic text-green-400">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-800">
                  <th className="py-4 px-3 text-stone-400 font-medium">Program</th>
                  <th className="py-4 px-3 text-stone-400 font-medium">First-Time?</th>
                  <th className="py-4 px-3 text-stone-400 font-medium">Max DPA</th>
                  <th className="py-4 px-3 text-stone-400 font-medium">Best Rate</th>
                  <th className="py-4 px-3 text-stone-400 font-medium">Loan Terms</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-3 text-stone-100">Worker Advantage</td>
                  <td className="py-4 px-3 text-green-400">No</td>
                  <td className="py-4 px-3 text-amber-400">$20,000</td>
                  <td className="py-4 px-3 text-stone-300">5.125%</td>
                  <td className="py-4 px-3 text-stone-400">30-yr deferred</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-3 text-stone-100">HIP First-Time</td>
                  <td className="py-4 px-3 text-amber-400">Yes</td>
                  <td className="py-4 px-3 text-amber-400">4%</td>
                  <td className="py-4 px-3 text-stone-300">6.125%</td>
                  <td className="py-4 px-3 text-stone-400">30-yr deferred</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-3 text-stone-100">HIP-DPA</td>
                  <td className="py-4 px-3 text-green-400">No</td>
                  <td className="py-4 px-3 text-amber-400">5%</td>
                  <td className="py-4 px-3 text-stone-300">6.875%</td>
                  <td className="py-4 px-3 text-stone-400">30-yr deferred</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-3 text-stone-100">HIP Teachers</td>
                  <td className="py-4 px-3 text-green-400">No</td>
                  <td className="py-4 px-3 text-amber-400">$7,500</td>
                  <td className="py-4 px-3 text-stone-300">6.250%</td>
                  <td className="py-4 px-3 text-stone-400">5-yr forgivable</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-3 text-stone-100">HIP Heroes</td>
                  <td className="py-4 px-3 text-green-400">No</td>
                  <td className="py-4 px-3 text-stone-500">N/A</td>
                  <td className="py-4 px-3 text-stone-300">6.250%</td>
                  <td className="py-4 px-3 text-stone-400">VA/USDA only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              How It <span className="italic text-green-400">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Check Eligibility', desc: 'Review income limits, credit requirements, and program-specific criteria.' },
              { step: '2', title: 'Find a HIP Lender', desc: 'Work with a Nevada Housing Division approved lender who knows these programs.' },
              { step: '3', title: 'Get Pre-Approved', desc: 'Complete your loan application and receive pre-approval with DPA.' },
              { step: '4', title: 'Buy Your Home', desc: 'Use your DPA at closing to reduce your out-of-pocket costs.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-stone-950 font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-stone-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'Can I use DPA for new construction?', acceptedAnswer: { '@type': 'Answer', text: "Yes! Nevada Housing Division programs can be used for new construction homes in Kestrel Village. The home must be your primary residence and meet program requirements." } },
                { '@type': 'Question', name: "What is a 'deferred' second mortgage?", acceptedAnswer: { '@type': 'Answer', text: "Most HIP programs provide DPA as a 30-year second mortgage with no interest and no monthly payments. You only repay it when you sell, refinance, or pay off your first mortgage." } },
                { '@type': 'Question', name: 'Can I combine DPA with builder incentives?', acceptedAnswer: { '@type': 'Answer', text: "In most cases, yes! Builder closing cost credits can often be combined with DPA programs. We'll help you maximize your benefits." } },
                { '@type': 'Question', name: 'What income limits apply?', acceptedAnswer: { '@type': 'Answer', text: 'Income limits vary by program and county. For Clark County (Las Vegas), limits range from 80% AMI to $165,000 depending on the program. Contact us for current limits.' } },
                { '@type': 'Question', name: 'How do I find a HIP-approved lender?', acceptedAnswer: { '@type': 'Answer', text: 'Dr. Jan Duffy works with several HIP-approved lenders who specialize in new construction. Call 702-222-1964 for referrals to lenders experienced with these programs.' } },
              ],
            }),
          }}
        />
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Common <span className="italic text-green-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I use DPA for new construction?",
                a: "Yes! Nevada Housing Division programs can be used for new construction homes in Kestrel Village. The home must be your primary residence and meet program requirements."
              },
              {
                q: "What is a 'deferred' second mortgage?",
                a: "Most HIP programs provide DPA as a 30-year second mortgage with no interest and no monthly payments. You only repay it when you sell, refinance, or pay off your first mortgage."
              },
              {
                q: "Can I combine DPA with builder incentives?",
                a: "In most cases, yes! Builder closing cost credits can often be combined with DPA programs. We'll help you maximize your benefits."
              },
              {
                q: "What income limits apply?",
                a: "Income limits vary by program and county. For Clark County (Las Vegas), limits range from 80% AMI to $165,000 depending on the program. Contact us for current limits."
              },
              {
                q: "How do I find a HIP-approved lender?",
                a: "Dr. Jan Duffy works with several HIP-approved lenders who specialize in new construction. Call 702-222-1964 for referrals to lenders experienced with these programs."
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-stone-950 border border-stone-800 rounded-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-stone-100 pr-4">{faq.q}</h3>
                  <span className="text-green-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-stone-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Official <span className="italic text-green-400">Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.homeispossiblenv.org/todays-rates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-green-500/50 transition-all text-center"
            >
              <span className="text-3xl mb-4 block">📊</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">Today&apos;s Rates</h3>
              <p className="text-stone-400 text-sm">Current HIP program rates</p>
            </a>

            <a 
              href="https://www.homeispossiblenv.org/homebuyers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-green-500/50 transition-all text-center"
            >
              <span className="text-3xl mb-4 block">🏠</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">Homebuyer Info</h3>
              <p className="text-stone-400 text-sm">Full program details</p>
            </a>

            <a 
              href="https://www.homeispossiblenv.org/find-a-hip-lender" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-green-500/50 transition-all text-center"
            >
              <span className="text-3xl mb-4 block">🏦</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">Find a Lender</h3>
              <p className="text-stone-400 text-sm">HIP-approved lenders</p>
            </a>
          </div>

          <p className="text-xs text-stone-600 text-center mt-8">
            Information from <a href="https://www.homeispossiblenv.org/todays-rates" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">Nevada Housing Division</a>. 
            Rates and programs subject to change. Contact a HIP lender for current information.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-green-500/10 via-stone-900 to-stone-900 border border-green-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Use <span className="italic text-green-400">DPA</span> for Your New Home?
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy can connect you with HIP-approved lenders and help you navigate both 
              down payment assistance programs AND new construction builder negotiations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-stone-950 font-semibold rounded-sm hover:bg-green-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </CalendlyLink>
              <Link href="/communities" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-green-500/50 hover:text-green-400 transition-colors">
                View Communities →
              </Link>
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
        <p className="text-stone-600 text-xs text-center mt-4 max-w-4xl mx-auto">
          Down payment assistance information provided for educational purposes. Rates and program details subject to change. 
          Contact Nevada Housing Division or a HIP-approved lender for current information. Dr. Jan Duffy is not a lender.
        </p>
      </footer>
    </div>
  );
}
