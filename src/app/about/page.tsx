import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Kestrel Village Real Estate Specialist',
  description: 'Dr. Jan Duffy - Licensed since 2008 · 35 years in Las Vegas. Ph.D. in Research. $127M+ in sales. Kestrel Village new construction specialist.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Dr. Jan Duffy | Your Kestrel Village Expert',
    description: 'Licensed since 2008 · 35 years in Las Vegas. Ph.D. in Research. Specializing in Kestrel Village new construction homes.',
    url: `${SITE_URL}/about`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
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
            Your Kestrel Village Expert
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Dr. Jan <span className="italic text-amber-400">Duffy</span>
          </h1>
          <p className="mt-6 text-xl text-stone-400">
            REALTOR® | New Construction Specialist | Summerlin Expert
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">
              Live MLS Listings
            </p>
            <h2
              className="mt-4 text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Current <span className="italic text-amber-400">Kestrel Village</span> Homes
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { value: 'Since 2008', label: 'In Real Estate' },
              { value: 'Ph.D.', label: 'Research' },
              { value: '$127M+', label: 'In Sales' },
              { value: '500+', label: 'Families Served' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <div className="text-3xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-stone-500 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-2xl font-light mb-6 md:text-3xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why Choose <span className="italic text-amber-400">Dr. Jan Duffy?</span>
              </h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  Licensed since 2008 · 35 years in Las Vegas and with a Ph.D. in Research, 
                  I bring an analytical, data-driven approach to helping you find the perfect home. 
                  I specialize in new construction because I understand the unique challenges and 
                  opportunities these transactions present.
                </p>
                <p>
                  Unlike buying a resale home, new construction requires specific expertise in 
                  negotiating with builders, reviewing complex contracts, and understanding 
                  upgrade options and incentives. I&apos;ve helped hundreds of families navigate 
                  this process successfully.
                </p>
                <p>
                  As a Kestrel Village specialist, I know every community, every builder, 
                  and every floor plan. I&apos;ll help you find the right home at the right price 
                  while protecting your interests every step of the way.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-stone-100 mb-4">Specializations</h3>
                <ul className="space-y-3">
                  {[
                    'New Construction Homes',
                    'Kestrel Village Communities',
                    'Summerlin West',
                    'Builder Contract Negotiation',
                    'Buyer Representation',
                    'Investment Properties',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-400">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-stone-100 mb-4">Credentials</h3>
                <div className="space-y-3 text-stone-400">
                  <p><strong className="text-stone-300">Rating:</strong> 5.0★ from 50 Realtor.com reviews</p> <p><strong className="text-stone-300">Education:</strong> Ph.D. in Research</p> <p><strong className="text-stone-300">Experience:</strong> Licensed Since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2
              className="text-2xl font-light md:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What I <span className="italic text-amber-400">Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'Buyer Protection',
                desc: 'I work exclusively for you, not the builder. Your interests come first in every negotiation.'
              },
              {
                icon: '💰',
                title: 'Zero Cost to You',
                desc: 'The builder pays my commission. My expertise, built over 35 years in Las Vegas, costs you nothing extra.'
              },
              {
                icon: '📋',
                title: 'Contract Expertise',
                desc: 'I review every page of builder contracts, catching issues most buyers miss.'
              },
              {
                icon: '🏠',
                title: 'Local Knowledge',
                desc: 'I know every Kestrel Village community, floor plan, and builder incentive available.'
              },
              {
                icon: '📊',
                title: 'Market Analysis',
                desc: 'Ph.D.-level research ensures you pay the right price for your new home.'
              },
              {
                icon: '🤝',
                title: 'Full Service',
                desc: 'From first tour to closing and beyond, I guide you through every step.'
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

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2
              className="text-2xl font-light md:text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Find Your <span className="italic text-amber-400">Dream Home?</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s schedule a VIP tour of Kestrel Village. I&apos;ll meet you at the model homes 
              and ensure you&apos;re properly registered with the builder from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </CalendlyLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors"
              >
                Contact Page →
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
          <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">
            Schedule a Tour
          </CalendlyLink>
        </div>
      </footer>
    </div>
  );
}
