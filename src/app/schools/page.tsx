import type { Metadata } from 'next';
import Link from 'next/link';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';

const SITE_URL = 'https://www.kestrelvillage.com';

export const metadata: Metadata = {
  title: 'Schools Near Kestrel Village | Summerlin West Las Vegas',
  description: 'CCSD and private schools near Kestrel Village in Summerlin West. Elementary, middle, and high campuses. Verify zones with Clark County School District.',
  alternates: { canonical: `${SITE_URL}/schools` },
  openGraph: {
    title: 'Schools Near Kestrel Village | Summerlin Education',
    description: 'CCSD and private schools serving Kestrel Village in Summerlin West, Las Vegas. School names, grades, and distances.',
    url: `${SITE_URL}/schools`,
    siteName: 'Kestrel Village',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const schools = {
  elementary: [
    { name: 'William R. Lummis Elementary', rating: '8/10', distance: '2.1 mi', grades: 'K-5', type: 'Public' },
    { name: 'John C. Vanderburg Elementary', rating: '8/10', distance: '2.4 mi', grades: 'K-5', type: 'Public' },
    { name: 'Helen M. Smith Elementary', rating: '7/10', distance: '2.8 mi', grades: 'K-5', type: 'Public' },
    { name: 'Merryhill Elementary', rating: '9/10', distance: '3.2 mi', grades: 'K-5', type: 'Private' },
  ],
  middle: [
    { name: 'Sig Rogich Middle School', rating: '7/10', distance: '2.5 mi', grades: '6-8', type: 'Public' },
    { name: 'Ernest Becker Middle School', rating: '7/10', distance: '3.1 mi', grades: '6-8', type: 'Public' },
    { name: 'The Meadows School', rating: '9/10', distance: '4.5 mi', grades: '6-8', type: 'Private' },
  ],
  high: [
    { name: 'Palo Verde High School', rating: '7/10', distance: '3.8 mi', grades: '9-12', type: 'Public' },
    { name: 'Shadow Ridge High School', rating: '6/10', distance: '4.2 mi', grades: '9-12', type: 'Public' },
    { name: 'Bishop Gorman High School', rating: '9/10', distance: '5.1 mi', grades: '9-12', type: 'Private' },
    { name: 'Faith Lutheran High School', rating: '8/10', distance: '5.5 mi', grades: '9-12', type: 'Private' },
  ],
};

export default function SchoolsPage() {
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
          <p className="text-xs uppercase tracking-widest text-amber-500">Education</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Schools Near <span className="italic text-amber-400">Kestrel Village</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Summerlin has 26 CCSD and private school campuses. Kestrel Village is near William R. Lummis Elementary, Sig Rogich Middle School, Palo Verde High School, and other Clark County schools.
          </p>
        </div>
      </header>

      {/* RealScout Widget */}
      <section className="px-6 py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-amber-500">Live MLS Listings</p>
            <h2 className="mt-4 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Homes Near <span className="italic text-amber-400">Summerlin Schools</span>
            </h2>
          </div>

          <RealScoutListingsSection />
        </div>
      </section>

      {/* School District Info */}
      <section className="px-6 py-12 border-b border-stone-800/50">
        <div className="mx-auto max-w-4xl">
          <div className="bg-stone-900/50 border border-stone-800 rounded-sm p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏫</span>
              <div>
                <h2 className="text-lg font-semibold text-stone-100 mb-2">Clark County School District</h2>
                <p className="text-stone-400">
                  Kestrel Village is served by the Clark County School District (CCSD), the 5th largest school district 
                  in the United States. School assignments are set by CCSD zoning—verify boundaries with the district before you buy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elementary Schools */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Elementary Schools <span className="italic text-amber-400">(K-5)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {schools.elementary.map((school, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-stone-100">{school.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${school.type === 'Private' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {school.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className="text-amber-400">★</span> {school.rating}
                  </span>
                  <span>{school.distance}</span>
                  <span>Grades {school.grades}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Schools */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Middle Schools <span className="italic text-amber-400">(6-8)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {schools.middle.map((school, i) => (
              <div key={i} className="bg-stone-950 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-stone-100">{school.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${school.type === 'Private' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {school.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className="text-amber-400">★</span> {school.rating}
                  </span>
                  <span>{school.distance}</span>
                  <span>Grades {school.grades}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Schools */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-light mb-8 md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            High Schools <span className="italic text-amber-400">(9-12)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {schools.high.map((school, i) => (
              <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-stone-100">{school.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${school.type === 'Private' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                    {school.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className="text-amber-400">★</span> {school.rating}
                  </span>
                  <span>{school.distance}</span>
                  <span>Grades {school.grades}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Schools */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Notable <span className="italic text-amber-400">Schools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏈</span>
                <h3 className="text-lg font-semibold text-stone-100">Bishop Gorman High School</h3>
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Private high school in Las Vegas with varsity athletics and college-prep coursework. 
                Alumni include professional athletes and business leaders.
              </p>
              <div className="text-amber-400 text-sm">★ 9/10 Rating</div>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📚</span>
                <h3 className="text-lg font-semibold text-stone-100">The Meadows School</h3>
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Prestigious college-preparatory school serving grades PreK-12. Known for rigorous academics, 
                small class sizes, and exceptional college placement rates.
              </p>
              <div className="text-amber-400 text-sm">★ 9/10 Rating</div>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⭐</span>
                <h3 className="text-lg font-semibold text-stone-100">Palo Verde High School</h3>
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Public high school serving Summerlin. Magnet programs, Advanced Placement courses, athletics, STEM, and arts.
              </p>
              <div className="text-amber-400 text-sm">★ 7/10 Rating</div>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✝️</span>
                <h3 className="text-lg font-semibold text-stone-100">Faith Lutheran High School</h3>
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Faith-based private high school with college-prep curriculum, athletics, and campus ministries.
              </p>
              <div className="text-amber-400 text-sm">★ 8/10 Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* School Resources */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              School <span className="italic text-amber-400">Resources</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.ccsd.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/50 transition-all text-center"
            >
              <span className="text-3xl mb-4 block">🏛️</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">CCSD Website</h3>
              <p className="text-stone-400 text-sm">Clark County School District official site</p>
            </a>

            <a 
              href="https://www.greatschools.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/50 transition-all text-center"
            >
              <span className="text-3xl mb-4 block">📊</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">GreatSchools</h3>
              <p className="text-stone-400 text-sm">School ratings and reviews</p>
            </a>

            <a 
              href="https://www.niche.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/50 transition-all text-center"
            >
              <span className="text-3xl mb-4 block">🎓</span>
              <h3 className="text-lg font-semibold text-stone-100 mb-2">Niche</h3>
              <p className="text-stone-400 text-sm">School comparisons and rankings</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-stone-900">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12 text-center">
            <h2 className="text-2xl font-light md:text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Questions About <span className="italic text-amber-400">Schools?</span>
            </h2>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
              As a local expert, Dr. Jan Duffy can provide detailed information about schools serving 
              specific Kestrel Village communities and help you find a home in your preferred school zone.
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
        <p className="text-stone-600 text-xs text-center mt-4 max-w-4xl mx-auto">
          School information is approximate and subject to change. Please verify school assignments with Clark County School District.
        </p>
      </footer>
    </div>
  );
}
