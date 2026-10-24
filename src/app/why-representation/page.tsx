import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Why You Need Buyer Representation for New Construction | Kestrel Village',
  description: 'Learn why having your own real estate agent is critical when buying new construction. Builders require registration on your first visit. Protect your interests with Dr. Jan Duffy.',
  alternates: { canonical: `${SITE_URL}/why-representation` },
  openGraph: {
    title: 'Why Buyer Representation Matters for New Construction',
    description: 'Builder sales reps work for the builder, not you. Learn why having your own agent is critical when buying new construction homes.',
    url: `${SITE_URL}/why-representation`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function WhyRepresentationPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
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
            <Link
              href="/communities"
              className="text-sm text-stone-400 hover:text-amber-400 transition-colors hidden sm:block"
            >
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
          <p className="text-xs uppercase tracking-widest text-amber-500">
            Critical Information
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Why You Need <span className="italic text-amber-400">Your Own Agent</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            When buying new construction, having your own buyer&apos;s agent isn&apos;t just helpful—it&apos;s critical to protecting your interests.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-stone-950">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">
              Live MLS Listings
            </p>
            <h2
              className="mt-4 text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Browse <span className="italic text-amber-400">Available Homes</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Warning Banner */}
      <section className="px-6 py-12 bg-gradient-to-r from-amber-500/10 to-rose-500/10 border-y border-amber-500/30">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-stone-100 mb-3">
                First Visit Registration Required
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed">
                Builders require your agent to register you on your <strong className="text-amber-400">very first visit</strong>. 
                If you walk into a model home alone, the builder&apos;s sales representative will be assigned to &quot;represent&quot; you—but they work for the builder, not you. 
                <span className="text-amber-400"> Once this happens, I can no longer represent you in that community.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Without an Agent */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">❌</span>
                <h2 className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Without Your Own Agent
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  'Builder sales rep works for the builder, not you',
                  'No one negotiating on your behalf',
                  'May miss upgrade credits and incentives',
                  'Contract reviewed by builder\'s team only',
                  'No independent inspection recommendations',
                  'No advocate if construction issues arise',
                  'Lost opportunity once you register alone',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <span className="text-rose-400 mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Dr. Jan Duffy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">✅</span>
                <h2 className="text-2xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  With Dr. Jan Duffy
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  'I work exclusively for YOU, not the builder',
                  'Expert negotiation for upgrades and credits',
                  'Know all current builder incentives',
                  'Reviewing builder contracts since 1983',
                  'Independent inspection guidance',
                  'Your advocate from contract to closing',
                  'Zero cost—builder pays my commission',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className="text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How It <span className="italic text-amber-400">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Call First',
                desc: 'Contact me before visiting any model homes. We\'ll discuss your needs and schedule a tour.'
              },
              {
                step: '2',
                title: 'Meet at Models',
                desc: 'I\'ll meet you at the model homes and register you as my client, protecting your representation rights.'
              },
              {
                step: '3',
                title: 'Tour & Compare',
                desc: 'We\'ll tour communities together. I\'ll share insights about each builder, floor plan, and value.'
              },
              {
                step: '4',
                title: 'Negotiate & Close',
                desc: 'I\'ll negotiate upgrades, review contracts, and guide you through closing—all at no cost to you.'
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-stone-950 font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Negotiate */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className="text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What I Can <span className="italic text-amber-400">Negotiate</span>
            </h2>
            <p className="text-stone-400 mt-4">
              Builder contracts have more room for negotiation than most buyers realize.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '💎',
                title: 'Upgrade Credits',
                desc: 'Free or discounted upgrades like flooring, cabinets, countertops, and appliances.'
              },
              {
                icon: '💰',
                title: 'Closing Cost Credits',
                desc: 'Builder contributions toward your closing costs, often $5,000-$20,000+.'
              },
              {
                icon: '📉',
                title: 'Price Adjustments',
                desc: 'Lot premium reductions, price matching, and end-of-quarter incentives.'
              },
              {
                icon: '🏗️',
                title: 'Structural Options',
                desc: 'Additional rooms, garage space, or layout modifications at reduced cost.'
              },
              {
                icon: '🔧',
                title: 'Extended Warranties',
                desc: 'Enhanced warranty coverage beyond standard builder warranties.'
              },
              {
                icon: '📅',
                title: 'Timeline Flexibility',
                desc: 'Extended rate locks, delayed closings, or expedited completion when needed.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-stone-100 mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial-style Quote */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-900 to-stone-950">
        <div className="mx-auto max-w-3xl text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-amber-500/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-2xl md:text-3xl font-light text-stone-300 italic leading-relaxed">
            &quot;The builder&apos;s sales rep was friendly, but Dr. Jan found $15,000 in credits they never mentioned. She paid for herself ten times over—and cost us nothing.&quot;
          </blockquote>
          <p className="mt-6 text-stone-500">
            — Kestrel Village Buyer
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-amber-500 rounded-sm p-8 md:p-12 text-center">
            <h2
              className="text-2xl font-light md:text-3xl mb-4 text-stone-950"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Don&apos;t Visit Model Homes Alone
            </h2>
            <p className="text-stone-800 mb-8 max-w-2xl mx-auto">
              Call me before your first visit to any Kestrel Village community. 
              I&apos;ll meet you there, register you properly, and start working for YOU from day one.
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
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">
            Schedule a Tour
          </CalendlyLink>
        </div>
      </footer>
    </div>
  );
}
