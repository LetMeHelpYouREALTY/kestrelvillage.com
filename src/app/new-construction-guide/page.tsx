import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'New Construction Home Buying Guide | Kestrel Village Las Vegas',
  description: 'Complete guide to buying new construction homes in Las Vegas. Learn the process, timeline, deposits, upgrades, and what to expect. Expert tips from Dr. Jan Duffy.',
  alternates: { canonical: `${SITE_URL}/new-construction-guide` },
  openGraph: {
    title: 'New Construction Home Buying Guide | Las Vegas',
    description: 'Everything you need to know about buying a new construction home in Kestrel Village and Summerlin.',
    url: `${SITE_URL}/new-construction-guide`,
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
    { '@type': 'ListItem', position: 2, name: 'New Construction Guide', item: `${SITE_URL}/new-construction-guide` },
  ],
};

export default function NewConstructionGuidePage() {
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

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">Buyer&apos;s Guide</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            New Construction <span className="italic text-amber-400">Guide</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Everything you need to know about buying a new construction home in Kestrel Village. 
            From first visit to closing, we&apos;ll guide you through every step.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              New Construction <span className="italic text-amber-400">Available Now</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Important First Step */}
      <section className="px-6 py-12 bg-gradient-to-r from-amber-500/10 to-rose-500/10 border-b border-amber-500/30">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-stone-950 font-bold text-lg">1</span>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-stone-100 mb-3">
                First Step: Get Your Own Agent
              </h2>
              <p className="text-stone-300 leading-relaxed">
                <strong className="text-amber-400">Before visiting any model home</strong>, call Dr. Jan Duffy at 725-720-2805. 
                Builders require agent registration on your very first visit. If you go alone, you lose the right to 
                buyer representation in that community. Your agent (me!) costs you nothing—the builder pays my commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              The New Construction <span className="italic text-amber-400">Process</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Get Pre-Approved',
                duration: '1-3 days',
                desc: 'Before touring homes, get pre-approved for a mortgage. Builders take buyers more seriously with pre-approval, and you\'ll know exactly what you can afford. I can recommend trusted lenders familiar with new construction.',
                tips: ['Shop rates from multiple lenders', 'Ask about builder-preferred lender incentives', 'Get pre-approved, not just pre-qualified']
              },
              {
                step: '2',
                title: 'Tour Communities with Your Agent',
                duration: '1-2 weeks',
                desc: 'Together, we\'ll tour Kestrel Village communities to find the right fit. I\'ll register you with each builder, explain the differences between communities, and help you compare floor plans and pricing.',
                tips: ['Never visit model homes alone', 'Take photos and notes', 'Ask about lot premiums and orientation']
              },
              {
                step: '3',
                title: 'Choose Your Home & Lot',
                duration: '1-2 days',
                desc: 'Select your floor plan and homesite. Lot selection affects price (corner lots, view lots cost more) and orientation (important for energy efficiency). I\'ll help you understand the trade-offs.',
                tips: ['Consider sun exposure and views', 'Check for lot premiums', 'Ask about neighboring construction']
              },
              {
                step: '4',
                title: 'Design Center Selections',
                duration: '2-4 hours',
                desc: 'Visit the builder\'s design center to choose your finishes: flooring, cabinets, countertops, fixtures, and more. This is where costs can add up quickly. I\'ll help you prioritize upgrades that add value.',
                tips: ['Set a strict upgrade budget', 'Focus on hard-to-change items', 'Get everything in writing']
              },
              {
                step: '5',
                title: 'Contract & Deposit',
                duration: '1-3 days',
                desc: 'Sign the purchase agreement and submit your earnest money deposit (typically $5,000-$20,000). I\'ll review every page of the contract, explaining terms and negotiating on your behalf.',
                tips: ['Read the cancellation policy', 'Understand all deadlines', 'Know what\'s included vs. upgrades']
              },
              {
                step: '6',
                title: 'Construction Phase',
                duration: '4-8 months',
                desc: 'Your home is built! You\'ll receive progress updates and may have scheduled walk-throughs. I\'ll monitor progress and address any concerns with the builder.',
                tips: ['Document everything with photos', 'Attend scheduled walk-throughs', 'Start shopping for movers and utilities']
              },
              {
                step: '7',
                title: 'Final Walk-Through & Closing',
                duration: '1-2 weeks',
                desc: 'Inspect your completed home, create a punch list of items to fix, and close on your new home. I\'ll be with you every step, ensuring nothing is overlooked.',
                tips: ['Test everything (outlets, plumbing, appliances)', 'Bring a flashlight and phone charger', 'Don\'t close until punch list items are addressed']
              },
            ].map((phase, idx) => (
              <div key={idx} className="bg-stone-900/50 border border-stone-800 rounded-sm overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-6 border-b border-stone-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-stone-950 font-bold">{phase.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stone-100">{phase.title}</h3>
                      <span className="text-amber-400 text-sm">{phase.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-400 mb-4">{phase.desc}</p>
                  <div className="bg-stone-950 rounded-sm p-4">
                    <p className="text-xs uppercase tracking-wider text-amber-500 mb-2">Pro Tips</p>
                    <ul className="space-y-2">
                      {phase.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-stone-300 text-sm">
                          <span className="text-amber-500">→</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs to Expect */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Costs to <span className="italic text-amber-400">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-4">Upfront Costs</h3>
              <ul className="space-y-3 text-stone-400">
                <li className="flex justify-between">
                  <span>Earnest Money Deposit</span>
                  <span className="text-amber-400">$5,000 - $20,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Lot Premium (if applicable)</span>
                  <span className="text-amber-400">$0 - $50,000+</span>
                </li>
                <li className="flex justify-between">
                  <span>Upgrades Deposit</span>
                  <span className="text-amber-400">Varies</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <h3 className="text-lg font-semibold text-stone-100 mb-4">Closing Costs</h3>
              <ul className="space-y-3 text-stone-400">
                <li className="flex justify-between">
                  <span>Typical Closing Costs</span>
                  <span className="text-amber-400">2-5% of price</span>
                </li>
                <li className="flex justify-between">
                  <span>Down Payment</span>
                  <span className="text-amber-400">3-20%</span>
                </li>
                <li className="flex justify-between">
                  <span>Builder Credits (negotiable!)</span>
                  <span className="text-green-400">-$5,000 - $20,000</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-sm">
            <p className="text-stone-300">
              <strong className="text-amber-400">Money-Saving Tip:</strong> Builders often offer incentives for using their 
              preferred lender, sometimes covering thousands in closing costs. However, always compare rates with other lenders 
              to ensure you&apos;re getting the best deal overall.
            </p>
          </div>
        </div>
      </section>

      {/* Upgrades Guide */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Smart <span className="italic text-amber-400">Upgrade</span> Strategy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-900/50 border border-green-500/30 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-400">✓</span>
                <h3 className="text-lg font-semibold text-stone-100">Worth the Investment</h3>
              </div>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• Electrical outlet placement</li>
                <li>• Structural changes (walls, rooms)</li>
                <li>• Plumbing rough-ins</li>
                <li>• Cabinet height/quality</li>
                <li>• Flooring in main areas</li>
                <li>• Kitchen appliances</li>
              </ul>
              <p className="text-xs text-green-400 mt-4">Difficult or expensive to change later</p>
            </div>

            <div className="bg-stone-900/50 border border-amber-500/30 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-400">~</span>
                <h3 className="text-lg font-semibold text-stone-100">Consider Carefully</h3>
              </div>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• Countertops</li>
                <li>• Light fixtures</li>
                <li>• Hardware</li>
                <li>• Landscaping packages</li>
                <li>• Window treatments</li>
                <li>• Smart home features</li>
              </ul>
              <p className="text-xs text-amber-400 mt-4">Compare builder vs. aftermarket pricing</p>
            </div>

            <div className="bg-stone-900/50 border border-rose-500/30 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-rose-400">✗</span>
                <h3 className="text-lg font-semibold text-stone-100">Often Overpriced</h3>
              </div>
              <ul className="space-y-2 text-stone-400 text-sm">
                <li>• Paint colors</li>
                <li>• Backsplash tile</li>
                <li>• Bathroom accessories</li>
                <li>• Garage floor coating</li>
                <li>• Window tinting</li>
                <li>• Security systems</li>
              </ul>
              <p className="text-xs text-rose-400 mt-4">Usually cheaper to do yourself after closing</p>
            </div>
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
                { '@type': 'Question', name: 'Can I negotiate with builders?', acceptedAnswer: { '@type': 'Answer', text: "Yes! Builders often negotiate on price, upgrades, closing costs, and lot premiums—especially at end of quarter or during slower periods. Having an experienced agent like Dr. Jan Duffy significantly improves your negotiating position." } },
                { '@type': 'Question', name: "Should I use the builder's lender?", acceptedAnswer: { '@type': 'Answer', text: "Compare offers carefully. Builders often provide significant incentives for using their preferred lender (closing cost credits, rate buy-downs), but rates may be higher. Get quotes from multiple lenders and compare the total cost over the life of the loan." } },
                { '@type': 'Question', name: 'How long does new construction take?', acceptedAnswer: { '@type': 'Answer', text: "Typically 4-8 months from contract to closing, depending on the builder, time of year, and whether you're buying a spec home or building from scratch. Some move-in ready homes are available immediately." } },
                { '@type': 'Question', name: 'What if I find issues after moving in?', acceptedAnswer: { '@type': 'Answer', text: 'New homes come with builder warranties—typically 1 year on workmanship, 2 years on systems (electrical, plumbing, HVAC), and 10 years on structural. Document issues promptly and submit warranty claims in writing.' } },
                { '@type': 'Question', name: 'Can I make changes during construction?', acceptedAnswer: { '@type': 'Answer', text: "Changes become increasingly difficult (and expensive) once construction begins. Most builders have cut-off dates for modifications. It's best to finalize all decisions at the design center before construction starts." } },
              ],
            }),
          }}
        />
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Common <span className="italic text-amber-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I negotiate with builders?",
                a: "Yes! Builders often negotiate on price, upgrades, closing costs, and lot premiums—especially at end of quarter or during slower periods. Having an experienced agent like Dr. Jan Duffy significantly improves your negotiating position."
              },
              {
                q: "Should I use the builder's lender?",
                a: "Compare offers carefully. Builders often provide significant incentives for using their preferred lender (closing cost credits, rate buy-downs), but rates may be higher. Get quotes from multiple lenders and compare the total cost over the life of the loan."
              },
              {
                q: "How long does new construction take?",
                a: "Typically 4-8 months from contract to closing, depending on the builder, time of year, and whether you're buying a spec home or building from scratch. Some move-in ready homes are available immediately."
              },
              {
                q: "What if I find issues after moving in?",
                a: "New homes come with builder warranties—typically 1 year on workmanship, 2 years on systems (electrical, plumbing, HVAC), and 10 years on structural. Document issues promptly and submit warranty claims in writing."
              },
              {
                q: "Can I make changes during construction?",
                a: "Changes become increasingly difficult (and expensive) once construction begins. Most builders have cut-off dates for modifications. It's best to finalize all decisions at the design center before construction starts."
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-stone-950 border border-stone-800 rounded-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-medium text-stone-100 pr-4">{faq.q}</h3>
                  <span className="text-amber-500 group-open:rotate-180 transition-transform">
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

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-amber-500 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4 text-stone-950" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Start Your Journey?
            </h2>
            <p className="text-stone-800 mb-8 max-w-2xl mx-auto">
              Don&apos;t navigate new construction alone. Call Dr. Jan Duffy before your first model home visit 
              to ensure you have expert representation from day one.
            </p>
            <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-950 text-amber-400 font-semibold rounded-sm hover:bg-stone-900 transition-colors">
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
      </footer>
    </div>
  );
}
