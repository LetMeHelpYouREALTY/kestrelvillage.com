import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';
const PAGE_PATH = '/sell-your-home-to-buy-at-kestrel-village';

export const metadata: Metadata = {
  title: 'Sell to Buy at Kestrel Village | Dr. Jan Duffy',
  description:
    'Planning a Kestrel Village new-build? Dr. Jan Duffy helps you price, prepare, and sell your current home so you can buy at Kestrel Village. Call 725-720-2805.',
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'Sell Your Home to Buy at Kestrel Village',
    description:
      'Listing strategy, timing, and buyer representation for Kestrel Village new construction—without losing your place in line.',
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const listingApproach = [
  {
    title: 'Market pricing for your timeline',
    body:
      'We review comparable sales near your current home, builder deposit deadlines, and your Kestrel Village community choice so list price supports both closings.',
  },
  {
    title: 'Preparation before photos go live',
    body:
      'Simple repairs, staging priorities, and disclosure prep so your listing shows well while you still tour Kestrel models with me.',
  },
  {
    title: 'Marketing that reaches ready buyers',
    body:
      'Professional photography, MLS exposure through Berkshire Hathaway HomeServices Nevada Properties, and targeted outreach while I keep your builder registration intact.',
  },
  {
    title: 'Negotiation through both transactions',
    body:
      'From list-side offers to builder upgrade credits, one advisor coordinates contingencies so you are not juggling two contracts alone.',
  },
];

export default function SellToBuyAtKestrelPage() {
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
          <div className="flex items-center gap-4 text-sm">
            <Link href="/communities" className="text-stone-400 hover:text-amber-400 transition-colors hidden sm:block">
              Communities
            </Link>
            <Link href="/sell-your-home-to-buy-at-kestrel-village" className="text-amber-400 font-medium hidden sm:block">
              Sell to Buy
            </Link>
            <CalendlyLink className="rounded-sm bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
              Listing Consultation
            </CalendlyLink>
          </div>
        </div>
      </nav>

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">Sell · Buy · Kestrel Village</p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-5xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sell Your Current Home to Buy at{' '}
            <span className="italic text-amber-400">Kestrel Village</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg leading-relaxed">
            New construction at Kestrel moves fast. I help you list your existing home with a clear plan—pricing,
            preparation, marketing, and negotiation—so you can reserve the Kestrel floor plan you want.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyLink className="px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
              Book a Listing Consultation
            </CalendlyLink>
            <a
              href="tel:+17257202805"
              className="px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-all"
            >
              Call 725-720-2805
            </a>
          </div>
        </div>
      </header>

      <section className="px-6 py-16 border-b border-stone-800/50">
        <div className="mx-auto max-w-5xl">
          <h2
            className="text-2xl font-light mb-10 text-center md:text-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What&apos;s my home worth{' '}
            <span className="italic text-amber-400">before I buy at Kestrel?</span>
          </h2>
          <p className="text-stone-400 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            A valuation conversation is not a generic Summerlin West pitch—it is about your current property, your
            equity, and how that pairs with builder deposits and design-center timing at Kestrel Village. We map both
            sides before you tour models.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {listingApproach.map((item) => (
              <div key={item.title} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
                <h3 className="text-lg font-semibold text-stone-100 mb-3">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-stone-900/40">
        <div className="mx-auto max-w-4xl">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-8 md:p-10 text-center">
            <h2
              className="text-2xl font-light md:text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Ready for a <span className="italic text-amber-400">sell-to-buy</span> plan?
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Schedule a listing consultation to review your home, Kestrel communities on your short list, and the order
              of operations—still call before your first model visit so builder registration stays with me as your buyer
              agent.
            </p>
            <CalendlyLink className="inline-flex px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
              Schedule Listing Consultation
            </CalendlyLink>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl text-center text-sm text-stone-500 leading-relaxed">
          <p>
            Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties · License S.0197614.LLC ·
            1980 Festival Plaza Drive, Suite 300, Las Vegas, NV 89135 · 725-720-2805
          </p>
          <p className="mt-4 text-xs text-stone-600">
            Data relating to real estate for sale on this website comes in part from the Internet Data Exchange program of
            the Greater Las Vegas Association of REALTORS® (GLVAR). Real estate listings held by brokerage firms other
            than Berkshire Hathaway HomeServices Nevada Properties are marked with the GLVAR IDX logo. Information deemed
            reliable but not guaranteed. All buyers should register with their agent before visiting builder model homes.
          </p>
          <p className="mt-4">
            <Link href="/" className="text-amber-400 hover:text-amber-300">← Back to Kestrel Village new homes</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
