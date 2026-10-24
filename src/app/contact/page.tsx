import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Kestrel Village Real Estate Expert',
  description: 'Contact Dr. Jan Duffy for Kestrel Village new construction homes in Summerlin West. Call 702-222-1964 for VIP tours. In real estate since 1983.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Kestrel Village Expert',
    description: 'Schedule your VIP tour of Kestrel Village new construction homes. Call or text 702-222-1964.',
    url: `${SITE_URL}/contact`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dr. Jan Duffy - Kestrel Village Specialist',
  description: 'Expert REALTOR® specializing in Kestrel Village new construction in Summerlin West, Las Vegas. In real estate since 1983.',
  url: SITE_URL,
  telephone: '+1-702-222-1964',
  email: 'jan@drjanduffy.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1980 Festival Plaza Drive, Suite 300',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89135',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.2468, longitude: -115.328 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },
  priceRange: '$455,000 - $900,000+',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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

      <header className="border-b border-stone-800/50 px-6 py-16 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">
            Get in Touch
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contact <span className="italic text-amber-400">Dr. Jan Duffy</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400">
            Your Kestrel Village specialist, in real estate since 1983.
            Call me before visiting any model homes to protect your buyer representation.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-900 to-stone-950">
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

      {/* Contact Methods */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary Contact */}
            <div className="space-y-6">
              <CalendlyLink className="flex items-center gap-4 p-6 bg-amber-500 text-stone-950 rounded-sm hover:bg-amber-400 transition-colors">
                <div className="w-12 h-12 bg-stone-950/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xl font-semibold">Schedule a Tour</span>
                  <span className="text-stone-800 text-lg">Book online</span>
                </div>
              </CalendlyLink>

              <a 
                href="mailto:jan@drjanduffy.com" 
                className="flex items-center gap-4 p-6 bg-stone-900 border border-stone-800 text-stone-200 rounded-sm hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-semibold">Email</span>
                  <span className="text-stone-400">jan@drjanduffy.com</span>
                </div>
              </a>

              <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <h3 className="text-lg font-semibold text-stone-100 mb-4">Office Hours</h3>
                <div className="space-y-2 text-stone-400">
                  <p><strong className="text-stone-300">Monday - Sunday:</strong> 8:00 AM - 8:00 PM</p>
                  <p className="text-sm mt-4 text-amber-400">
                    Text messages welcome for quick questions!
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1980+Festival+Plaza+Drive+Suite+300+Las+Vegas+NV+89135"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-stone-900 border border-stone-800 text-stone-200 rounded-sm hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-semibold">Office Location</span>
                  <span className="text-stone-400">1980 Festival Plaza Dr, Suite 300</span>
                </div>
              </a>

              <a
                href="https://www.google.com/search?q=Dr+Jan+Duffy+Las+Vegas+real+estate"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-stone-900 border border-stone-800 text-stone-200 rounded-sm hover:border-amber-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-semibold">View Google Reviews</span>
                  <span className="text-stone-400">See what clients say</span>
                </div>
              </a>

              
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="rounded-sm overflow-hidden border border-stone-800 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.5!2d-115.3!3d36.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0f!2s1980%20Festival%20Plaza%20Dr%2C%20Las%20Vegas%2C%20NV%2089135!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location - 1980 Festival Plaza Drive"
                />
              </div>
              <div className="p-6 bg-stone-900/50 border border-stone-800 rounded-sm">
                <h3 className="text-lg font-semibold text-stone-100 mb-2">Office Address</h3>
                <p className="text-stone-300 font-medium">1980 Festival Plaza Drive, Suite 300</p>
                <p className="text-stone-400">Las Vegas, NV 89135</p>
                <p className="text-stone-500 text-sm mt-4">
                  Specializing in Kestrel Village &amp; Summerlin new construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-stone-100 mb-2">
                  Important: Call Before Visiting Model Homes
                </h3>
                <p className="text-stone-300 leading-relaxed">
                  Builders require agent registration on your <strong className="text-amber-400">very first visit</strong>. 
                  If you walk into a model home alone, the builder&apos;s sales rep will be assigned to represent you, 
                  and I can no longer help negotiate on your behalf. 
                  <span className="text-amber-400"> Call me first—I&apos;ll meet you there!</span>
                </p>
              </div>
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
