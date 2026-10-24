import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Kestrel Village Builders | Woodside, Lennar, Pulte, Taylor Morrison, KB Home',
  description: 'Learn about Kestrel Village builders: Woodside Homes, Lennar, Pulte Homes, Taylor Morrison, and KB Home. Compare floor plans, features, and pricing from $477K.',
  alternates: { canonical: `${SITE_URL}/builders` },
  openGraph: {
    title: 'Kestrel Village Builders | 5 Premier Homebuilders',
    description: 'Compare builders in Kestrel Village: Woodside, Lennar, Pulte, Taylor Morrison, and KB Home. New construction from $477K.',
    url: `${SITE_URL}/builders`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const builders = [
  {
    name: 'Woodside Homes',
    logo: '🏠',
    tagline: 'Building Dreams Since 1977',
    description: 'Woodside Homes has been building quality homes in the Southwest for over 45 years. Known for innovative floor plans, energy-efficient construction, and exceptional customer service. Part of the Sekisui House family, bringing Japanese craftsmanship to American homebuilding.',
    communities: [
      { name: 'Dove Rock', status: 'Now Preselling', price: 'From $520K', type: 'Townhomes', link: '/communities/dove-rock' },
      { name: 'Vireo', status: 'Final Opportunity', price: 'From $477K', type: '2-3 Story', link: '/communities/vireo' },
      { name: 'Falcon Crest', status: 'Now Selling', price: 'From $580K', type: 'Single-Story', link: '/communities/falcon-crest' },
    ],
    features: [
      'Energy Star® certified homes',
      'Smart home technology ready',
      'Premium kitchen and bath finishes',
      'Flexible floor plan options',
      '10-year structural warranty',
    ],
    website: 'https://www.woodsidehomes.com',
  },
  {
    name: 'Taylor Morrison',
    logo: '🏛️',
    tagline: 'Contemporary Spanish Architecture',
    description: 'Taylor Morrison brought contemporary Spanish architecture to Kestrel Village with their Crested Canyon community. Known for quality craftsmanship, innovative designs, and healthy home features. Crested Canyon is now sold out—contact Dr. Jan Duffy for resale opportunities.',
    communities: [
      { name: 'Crested Canyon', status: 'Sold Out', price: 'Resales Only', type: '2-3 Story', link: '/communities/crested-canyon' },
    ],
    features: [
      'Contemporary Spanish architecture',
      '9-foot ceilings throughout',
      'Rooftop decks on 3-story plans',
      'Healthy home products',
      'Secure gated community',
    ],
    website: 'https://www.taylormorrison.com',
  },
  {
    name: 'Lennar',
    logo: '🏡',
    tagline: 'Everything\'s Included®',
    description: 'Lennar is one of America\'s largest homebuilders, known for their Everything\'s Included® program that bundles premium features at no extra cost. Famous for their NextGen® homes—the home within a home perfect for multigenerational living.',
    communities: [
      { name: 'Mockingbird', status: 'Now Selling', price: 'From $838K', type: 'Two-Story', link: '/communities/mockingbird' },
    ],
    features: [
      'Everything\'s Included® upgrades',
      'NextGen® multigenerational suites',
      'Wi-Fi CERTIFIED™ homes',
      'Lennar Home Automation',
      'Premium appliance packages',
    ],
    website: 'https://www.lennar.com',
  },
  {
    name: 'Pulte Homes',
    logo: '🏘️',
    tagline: 'Life Tested® Designs',
    description: 'Pulte Homes builds Life Tested® homes designed around how people actually live. With 70+ years of experience, Pulte focuses on smart design, quality construction, and innovative features that adapt to your lifestyle.',
    communities: [
      { name: 'Blacktail', status: 'Now Selling', price: 'From $636K', type: 'Three-Story', link: '/communities/blacktail' },
    ],
    features: [
      'Life Tested® floor plans',
      'Rooftop decks',
      'Built-in smart home features',
      'Energy-efficient construction',
      'PulteGroup Quality Promise',
    ],
    website: 'https://www.pulte.com',
  },
  {
    name: 'KB Home',
    logo: '🏗️',
    tagline: 'Built to Order®',
    description: 'KB Home offers two neighborhoods in Kestrel Commons with their Built to Order® approach. Nighthawk features gated two-story homes, while Quail Cove introduces KB Home\'s first-ever three-story floor plans in Las Vegas.',
    communities: [
      { name: 'Nighthawk', status: 'Now Selling', price: 'From mid-$500K', type: 'Two-Story', link: '/communities/nighthawk' },
      { name: 'Quail Cove', status: 'Now Selling', price: 'From $455K', type: 'Three-Story', link: '/communities/quail-cove' },
    ],
    features: [
      'Built to Order® personalization',
      'First 3-story homes in Las Vegas (Quail Cove)',
      'Gated neighborhoods with private parks',
      'Tankless water heaters',
      'Smart thermostats included',
    ],
    website: 'https://www.kbhome.com',
  },
];

export default function BuildersPage() {
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

      <header className="border-b border-stone-800/50 px-6 py-20 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-amber-500">Premier Home Builders</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Kestrel Village <span className="italic text-amber-400">Builders</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Five of America&apos;s most trusted homebuilders are creating new communities in Kestrel Village and Kestrel Commons. 
            Each brings unique designs, features, and value to Summerlin West.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Available <span className="italic text-amber-400">Builder Homes</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 py-8 bg-gradient-to-r from-amber-500/10 to-rose-500/10 border-b border-amber-500/30">
        <div className="mx-auto max-w-4xl flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-stone-300 text-sm">
            <strong className="text-amber-400">Remember:</strong> Call Dr. Jan Duffy at 702-222-1964 BEFORE visiting any builder&apos;s model homes. 
            Registration is required on your first visit to protect your buyer representation rights.
          </p>
        </div>
      </section>

      {/* Builders */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-16">
          {builders.map((builder, idx) => (
            <div key={idx} className="border border-stone-800 rounded-sm overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-8 border-b border-stone-800">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{builder.logo}</span>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-light text-stone-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {builder.name}
                    </h2>
                    <p className="text-amber-400 text-sm">{builder.tagline}</p>
                  </div>
                </div>
                <p className="text-stone-400 leading-relaxed max-w-3xl">{builder.description}</p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Communities */}
                  <div>
                    <h3 className="text-lg font-semibold text-stone-100 mb-4">Kestrel Village Communities</h3>
                    <div className="space-y-3">
                      {builder.communities.map((community, i) => (
                        <Link
                          key={i}
                          href={community.link}
                          className="flex items-center justify-between p-4 bg-stone-900/50 border border-stone-800 rounded-sm hover:border-amber-500/50 transition-all"
                        >
                          <div>
                            <span className="font-medium text-stone-100">{community.name}</span>
                            <span className="text-stone-500 text-sm ml-2">• {community.type}</span>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              community.status === 'Now Selling' || community.status === 'Now Preselling' 
                                ? 'bg-green-500/20 text-green-400' 
                                : community.status === 'Final Opportunity' 
                                  ? 'bg-amber-500/20 text-amber-400'
                                  : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {community.status}
                            </span>
                            <p className="text-amber-400 text-sm mt-1">{community.price}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-stone-100 mb-4">Builder Features</h3>
                    <ul className="space-y-3">
                      {builder.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-stone-400">
                          <span className="text-amber-500 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href={builder.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-amber-400 hover:text-amber-300 text-sm"
                    >
                      Visit {builder.name} Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Builder Comparison */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick <span className="italic text-amber-400">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-stone-800">
                  <th className="py-4 px-4 text-stone-400 font-medium">Builder</th>
                  <th className="py-4 px-4 text-stone-400 font-medium">Starting Price</th>
                  <th className="py-4 px-4 text-stone-400 font-medium">Home Types</th>
                  <th className="py-4 px-4 text-stone-400 font-medium">Signature Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-100">Woodside Homes</td>
                  <td className="py-4 px-4 text-amber-400">From $477K</td>
                  <td className="py-4 px-4 text-stone-300">Townhomes, 1-3 Story</td>
                  <td className="py-4 px-4 text-stone-400">Energy Star® Certified</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-100">KB Home</td>
                  <td className="py-4 px-4 text-amber-400">From $455K</td>
                  <td className="py-4 px-4 text-stone-300">2-Story & 3-Story</td>
                  <td className="py-4 px-4 text-stone-400">Built to Order®</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-100">Taylor Morrison</td>
                  <td className="py-4 px-4 text-stone-500">Sold Out</td>
                  <td className="py-4 px-4 text-stone-300">2-3 Story</td>
                  <td className="py-4 px-4 text-stone-400">Spanish Architecture</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-100">Pulte Homes</td>
                  <td className="py-4 px-4 text-amber-400">From $636K</td>
                  <td className="py-4 px-4 text-stone-300">Three-Story</td>
                  <td className="py-4 px-4 text-stone-400">Rooftop Decks</td>
                </tr>
                <tr className="border-b border-stone-800/50">
                  <td className="py-4 px-4 text-stone-100">Lennar</td>
                  <td className="py-4 px-4 text-amber-400">From $838K</td>
                  <td className="py-4 px-4 text-stone-300">Two-Story</td>
                  <td className="py-4 px-4 text-stone-400">NextGen® Suites</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Which Builder is <span className="italic text-amber-400">Right for You?</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              Each builder offers unique advantages. Let Dr. Jan Duffy help you compare options, 
              negotiate upgrades, and find the perfect home—all at no cost to you.
            </p>
            <CalendlyLink className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
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
