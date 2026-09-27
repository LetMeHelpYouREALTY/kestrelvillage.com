'use client';

import Link from 'next/link';
import { communities } from '@/data/communities';
import { RealScoutListingsSection } from '@/components/RealScoutListingsSection';
import { CalendlyLink } from '@/components/CalendlyLink';
import { NearbyAmenitiesSection } from '@/components/maps/NearbyAmenitiesSection';

export default function KestrelVillage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Dr. Jan Duffy - Kestrel Village Specialist",
            "description": "Expert REALTOR® specializing in Kestrel Village new construction homes in Summerlin West, Las Vegas.",
            "url": "https://www.kestrelvillage.com",
            "telephone": "+1-702-222-1964",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1980 Festival Plaza Drive, Suite 300",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89135",
              "addressCountry": "US"
            },
            "areaServed": "Kestrel Village, Summerlin West, Las Vegas",
            "priceRange": "$455,000 - $900,000+"
          })
        }}
      />

      <div className="min-h-screen bg-stone-950 text-stone-100">
        {/* Mobile Call Button */}
        <CalendlyLink className="fixed bottom-6 right-6 z-50 md:hidden bg-amber-500 text-stone-950 p-4 rounded-full shadow-2xl shadow-amber-500/30" aria-label="Schedule a tour with Dr. Jan Duffy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </CalendlyLink>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
                <span className="text-stone-950 font-bold text-sm">KV</span>
              </div>
              <span className="font-semibold text-lg hidden sm:block">Kestrel Village</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-stone-400">
              <Link href="/kestrel-village" className="hover:text-amber-400 transition-colors">Kestrel Village</Link>
              <a href="#communities" className="hover:text-amber-400 transition-colors">Communities</a>
              <a href="#listings" className="hover:text-amber-400 transition-colors">Listings</a>
              <Link href="/testimonials" className="hover:text-amber-400 transition-colors">Testimonials</Link>
              <Link href="/neighborhood-map" className="hover:text-amber-400 transition-colors">Map</Link>
              <a href="#why-representation" className="hover:text-amber-400 transition-colors">Why Me</a>
              <Link href="/nearby-amenities" className="hover:text-amber-400 transition-colors">Nearby</Link>
              <a href="#amenities" className="hover:text-amber-400 transition-colors">Amenities</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
            <CalendlyLink className="bg-amber-500 text-stone-950 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-amber-400 transition-colors">
              702-222-1964
            </CalendlyLink>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/20" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
                               radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-amber-400 text-sm tracking-wider uppercase">Summerlin West • 3,000+ Ft Elevation</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 animate-fade-in-delay-1">
              <span className="block text-stone-100">Kestrel Village</span>
              <span className="block text-amber-400 italic mt-2">New Construction</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-delay-2">
              Panoramic valley views from Las Vegas&apos; most sought-after new village. 
              New homes from <span className="text-amber-400 font-medium">$455K</span> by Summerlin&apos;s premier builders.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 animate-fade-in-delay-3">
              {[
                { value: '8', label: 'Communities' },
                { value: '5', label: 'Top Builders' },
                { value: '$455K', label: 'Starting From' },
                { value: '718', label: 'New Homes' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-stone-900/50 rounded-sm border border-stone-800/50">
                  <div className="text-2xl md:text-3xl font-light text-amber-400">{stat.value}</div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <CalendlyLink className="group px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Tour
              </CalendlyLink>
              <a 
                href="#communities"
                className="px-8 py-4 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-all"
              >
                Explore Communities →
              </a>
            </div>
            <p className="mt-6 animate-fade-in-delay-4">
              <Link href="/kestrel-village" className="text-stone-500 hover:text-amber-400 text-sm transition-colors">
                Learn about Kestrel Village →
              </Link>
            </p>

            <div className="mt-16 animate-fade-in-delay-4">
              <p className="text-stone-600 text-xs uppercase tracking-widest mb-4">Featuring Homes By</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-stone-500 text-sm">
                {['Woodside Homes', 'KB Home', 'Taylor Morrison', 'Lennar', 'Pulte Homes'].map((b, i) => (
                  <span key={i} className="hover:text-amber-400 transition-colors">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Active Listings - RealScout Widget (Primary Lead Generator) */}
        <section id="listings" className="py-24 px-6 bg-gradient-to-b from-stone-900 to-stone-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Live MLS Listings</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Homes for Sale in <span className="text-amber-400 italic">Kestrel Village</span>
              </h2>
              <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                Browse current listings updated in real-time from the MLS. Click any home to see details, photos, and schedule a private tour.
              </p>
            </div>

            {/* Call to Action Banner */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <p className="text-stone-300 text-sm">
                  <strong className="text-amber-400">Register before visiting!</strong> Builders require agent registration on your first visit.
                </p>
              </div>
              <CalendlyLink className="flex-shrink-0 px-6 py-2 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors text-sm">
                Schedule a Tour
              </CalendlyLink>
            </div>

            {/* RealScout Office Listings Widget - lazy-loaded when section is in view */}
            <RealScoutListingsSection />

            <div className="mt-8 text-center">
              <p className="text-stone-500 text-sm mb-4">
                Powered by GLVAR MLS • Updated every 15 minutes
                {' • '}
                <a href="http://drjanduffy.realscout.com/onboarding" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">
                  Get personalized listings
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CalendlyLink className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Tour
                </CalendlyLink>
                <a 
                  href="mailto:jan@drjanduffy.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-700 text-stone-300 rounded-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Dr. Jan Duffy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Buyer Representation */}
        <section id="why-representation" className="py-24 px-6 bg-gradient-to-b from-stone-950 to-stone-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Critical Information</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why You Need <span className="text-amber-400 italic">Your Own Agent</span>
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-amber-500/10 to-rose-500/10 border border-amber-500/30 rounded-sm p-8 md:p-10 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-stone-100 mb-3">First Visit Registration Required</h3>
                  <p className="text-stone-300 text-lg leading-relaxed">
                    Builders require your agent to register you on your <strong className="text-amber-400">very first visit</strong>. 
                    If you walk into a model home alone, I can no longer represent you in that community. 
                    <span className="text-amber-400"> Call me first—I&apos;ll meet you there.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🛡️', title: 'Protect Your Interests', desc: "Builder sales reps work for the builder. I work exclusively for you—negotiating upgrades, credits, and terms." },
                { icon: '💰', title: 'Zero Cost To You', desc: "The builder pays my commission. My 30+ years of contract expertise costs you nothing extra." },
                { icon: '📋', title: 'Contract Review', desc: "Builder contracts favor builders. I've reviewed hundreds—I know what to negotiate and what red flags to catch." }
              ].map((item, i) => (
                <div key={i} className="bg-stone-900/50 border border-stone-800 rounded-sm p-6 hover:border-amber-500/30 transition-[border-color]">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="text-lg font-semibold text-stone-100 mb-2">{item.title}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section id="communities" className="py-24 px-6 bg-stone-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm uppercase tracking-widest">New Construction</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Village <span className="text-amber-400 italic">Communities</span>
              </h2>
              <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                Eight distinct neighborhoods offering townhomes to single-family estates. Contemporary Spanish architecture and Summerlin&apos;s signature quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communities.map((n) => (
                <div 
                  key={n.slug}
                  className="group bg-stone-950 border border-stone-800 rounded-sm overflow-hidden hover:border-amber-500/50 transition-[border-color] duration-300"
                >
                  <Link href={`/communities/${n.slug}`} className="block">
                    <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-6 border-b border-stone-800">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-xs text-amber-500 uppercase tracking-wider">{n.builder}</span>
                          <h3 className="text-2xl font-light text-stone-100 mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{n.name}</h3>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          n.status === 'Now Selling' || n.status === 'Now Preselling' ? 'bg-green-500/20 text-green-400' : 
                          n.status === 'Move-In Ready' || n.status === 'Final Opportunity' ? 'bg-amber-500/20 text-amber-400' : 
                          n.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-stone-700 text-stone-400'
                        }`}>
                          {n.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Type</span>
                          <p className="text-stone-200">{n.type}</p>
                        </div>
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Sq Ft</span>
                          <p className="text-stone-200">{n.sqft}</p>
                        </div>
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Beds</span>
                          <p className="text-stone-200">{n.beds}</p>
                        </div>
                        <div>
                          <span className="text-xs text-stone-500 uppercase">Garage</span>
                          <p className="text-stone-200">{n.garage}</p>
                        </div>
                      </div>

                      <p className="text-sm text-stone-400 mb-6 min-h-[40px]">{n.highlight}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-stone-800">
                        <div>
                          <span className="text-2xl font-light text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>{n.price}</span>
                          <span className="text-xs text-stone-500 ml-2">• {n.units} homes</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <CalendlyLink className="block bg-stone-900 border-t border-stone-800 p-4 text-center text-sm font-medium text-stone-400 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                    Schedule a Tour →
                  </CalendlyLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-24 px-6 bg-stone-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Village Lifestyle</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Village <span className="text-amber-400 italic">Amenities</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Kestrel Creek Arroyo', desc: '7.5-acre linear park with trails, passive turf areas, and shaded seating. Opened 2025.', icon: '🌿' },
                { title: 'Bluebird Park', desc: 'Climbing play structure, playground, and shaded seating areas for families.', icon: '🎪' },
                { title: 'Walkable Connectivity', desc: 'Pedestrian access between neighborhoods, parks, and future retail services.', icon: '🚶' },
                { title: 'Elevated Views', desc: '3,000+ ft elevation with panoramic Las Vegas valley and mountain vistas.', icon: '🏔️' },
                { title: 'Minutes to Red Rock', desc: 'Quick access to Red Rock Canyon, Downtown Summerlin, and top-rated schools.', icon: '🚗' },
                { title: 'Contemporary Architecture', desc: 'Modern Spanish-inspired designs with open floor plans and smart home features.', icon: '🏠' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-stone-900/30 border border-stone-800/50 rounded-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-stone-100 mb-1">{item.title}</h4>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection />

        {/* FAQ Section with Schema */}
        <section id="faq" className="py-24 px-6 bg-gradient-to-b from-stone-950 to-stone-900">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Kestrel Village?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Kestrel Village is a new master-planned community in Summerlin West, Las Vegas, featuring new construction homes from top builders including Woodside Homes, KB Home, Taylor Morrison, Lennar, and Pulte Homes. Homes range from $455K to $900K+."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a real estate agent to buy new construction?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While not required, having your own agent is highly recommended. Builders require agent registration on your FIRST visit. If you visit alone, the builder's sales rep becomes your representative. Your agent (like Dr. Jan Duffy) works exclusively for YOU, negotiating upgrades, credits, and reviewing contracts at no extra cost."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What builders are in Kestrel Village?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Kestrel Village features homes by Woodside Homes (Dove Rock, Vireo, Falcon Crest), KB Home (Nighthawk, Quail Cove), Taylor Morrison (Crested Canyon), Lennar (Mockingbird with NextGen suites), and Pulte Homes (Blacktail). Prices range from $455K for Quail Cove to $838K+ for Mockingbird single-family homes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where is Kestrel Village located?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Kestrel Village is located in Summerlin West, Las Vegas, NV 89138, at an elevation of 3,000+ feet. It's minutes from Red Rock Canyon, Downtown Summerlin, TPC Summerlin golf course, and top-rated schools."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I schedule a tour of Kestrel Village?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Call or text Dr. Jan Duffy at 702-222-1964 BEFORE visiting any model homes. She'll meet you there and ensure you're properly registered with the builder, protecting your right to buyer representation."
                    }
                  }
                ]
              })
            }}
          />
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Common Questions</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Village <span className="text-amber-400 italic">FAQ</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is Kestrel Village?",
                  a: "Kestrel Village is a new master-planned community in Summerlin West, Las Vegas, featuring new construction homes from top builders including Woodside Homes, KB Home, Taylor Morrison, Lennar, and Pulte Homes. Homes range from $455K to $900K+."
                },
                {
                  q: "Do I need a real estate agent to buy new construction?",
                  a: "While not required, having your own agent is highly recommended. Builders require agent registration on your FIRST visit. If you visit alone, the builder's sales rep becomes your representative. Your agent (like Dr. Jan Duffy) works exclusively for YOU, negotiating upgrades, credits, and reviewing contracts at no extra cost."
                },
                {
                  q: "What builders are in Kestrel Village?",
                  a: "Kestrel Village features homes by Woodside Homes (Dove Rock, Vireo, Falcon Crest), KB Home (Nighthawk, Quail Cove), Taylor Morrison (Crested Canyon), Lennar (Mockingbird with NextGen suites), and Pulte Homes (Blacktail). Prices range from $455K for Quail Cove to $838K+ for Mockingbird single-family homes."
                },
                {
                  q: "Where is Kestrel Village located?",
                  a: "Kestrel Village is located in Summerlin West, Las Vegas, NV 89138, at an elevation of 3,000+ feet. It's minutes from Red Rock Canyon, Downtown Summerlin, TPC Summerlin golf course, and top-rated schools."
                },
                {
                  q: "How do I schedule a tour of Kestrel Village?",
                  a: "Call or text Dr. Jan Duffy at 702-222-1964 BEFORE visiting any model homes. She'll meet you there and ensure you're properly registered with the builder, protecting your right to buyer representation."
                }
              ].map((faq, i) => (
                <details key={i} className="group bg-stone-900/50 border border-stone-800 rounded-sm">
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

        {/* Location Map */}
        <section id="location" className="py-24 px-6 bg-stone-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-500 text-sm uppercase tracking-widest">Find Us</span>
              <h2 className="text-3xl md:text-5xl font-light mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kestrel Village <span className="text-amber-400 italic">Location</span>
              </h2>
              <p className="text-stone-400 mt-4">
                Summerlin West, Las Vegas, NV 89138 • 3,000+ ft elevation with panoramic valley views
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-sm overflow-hidden border border-stone-800 h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12889.847361817894!2d-115.33559635!3d36.2467995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf3b2b3d3b3b%3A0x3b3b3b3b3b3b3b3b!2sKestrel%20Village%2C%20Las%20Vegas%2C%20NV%2089138!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kestrel Village Location Map"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-stone-950 border border-stone-800 rounded-sm p-6">
                  <h3 className="text-lg font-semibold text-stone-100 mb-4">Getting Here</h3>
                  <ul className="space-y-3 text-stone-400">
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500">•</span>
                      <span>From I-215: Exit at Far Hills Ave, head north into Summerlin West</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500">•</span>
                      <span>From Downtown Summerlin: 10 minutes west via Charleston Blvd</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-500">•</span>
                      <span>From Red Rock Canyon: 5 minutes east on Charleston Blvd</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-2">VIP Tour</h3>
                  <p className="text-stone-300 text-sm mb-4">
                    Don&apos;t visit model homes alone! Call first and I&apos;ll meet you there.
                  </p>
                  <CalendlyLink className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a Tour
                  </CalendlyLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 px-6 bg-gradient-to-b from-stone-900 to-stone-950">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-amber-500 text-sm uppercase tracking-widest">Your Kestrel Village Expert</span>
            <h2 className="text-3xl md:text-5xl font-light mt-4 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dr. Jan Duffy
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              30+ years representing Las Vegas buyers. Ph.D. in Market Research. $127M+ in sales. 
              I specialize in new construction and know exactly how to negotiate with builders.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-500">
              <span>REALTOR® S.0197614.LLC</span>
              <span>•</span>
              <span>Berkshire Hathaway HomeServices</span>
              <span>•</span>
              <span>500+ Vegas Families Served</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-900 border border-amber-500/20 rounded-sm p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to Tour <span className="text-amber-400 italic">Kestrel Village?</span>
                </h2>
                <p className="text-stone-400 mt-4">
                  Call or text me directly. I&apos;ll meet you at the model homes and ensure you&apos;re properly registered.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6 md:sticky md:top-24">
                  <CalendlyLink className="flex items-center gap-4 p-4 bg-amber-500 text-stone-950 rounded-sm hover:bg-amber-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="block font-semibold">Schedule a Tour</span>
                      <span className="text-stone-800">Book online</span>
                    </div>
                  </CalendlyLink>
                  <a href="mailto:jan@drjanduffy.com" className="flex items-center gap-4 p-4 bg-stone-800 text-stone-200 rounded-sm hover:bg-stone-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="block font-semibold">Email</span>
                      <span className="text-stone-400">jan@drjanduffy.com</span>
                    </div>
                  </a>
                  <div className="text-sm text-stone-500 pt-4">
                    <p><strong>Office Hours:</strong> 7 days, 8am - 8pm</p>
                    <p className="mt-2"><strong>Tip:</strong> Text works great for quick questions!</p>
                  </div>
                </div>

                {/* Calendly widget removed for performance - users can click "Schedule a Tour" button */}
                <div className="flex flex-col items-center justify-center text-center p-8 bg-stone-900/50 rounded-sm border border-stone-800" style={{ minHeight: '400px' }}>
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-100 mb-2">Book Your Tour Online</h3>
                  <p className="text-stone-400 mb-6 max-w-sm">
                    Select a convenient time for your private tour of Kestrel Village model homes.
                  </p>
                  <CalendlyLink className="px-8 py-4 bg-amber-500 text-stone-950 font-semibold rounded-sm hover:bg-amber-400 transition-colors">
                    Open Scheduling Calendar
                  </CalendlyLink>
                  <p className="text-stone-500 text-sm mt-4">30-minute tours available 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-stone-950 border-t border-stone-800">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-stone-100 font-semibold">Dr. Jan Duffy | Las Vegas Real Estate Expert</p>
                <p className="text-stone-500 text-sm mt-1">Berkshire Hathaway HomeServices Nevada Properties</p>
                <p className="text-stone-600 text-xs mt-1">REALTOR® S.0197614.LLC</p>
              </div>
              <div className="text-center md:text-right">
                <CalendlyLink className="text-amber-400 font-semibold hover:text-amber-300">Schedule a Tour</CalendlyLink>
                <p className="text-stone-500 text-sm mt-1">© 2025 KestrelVillage.com</p>
              </div>
            </div>
            <p className="text-stone-600 text-xs text-center mt-8">
              Information deemed reliable but not guaranteed. Prices, availability, and incentives subject to change. Contact builder or Dr. Jan Duffy for current information.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
