'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendlyLink } from '@/components/CalendlyLink';
import { communities, getCommunityBySlug, type Community } from '@/data/communities';

const MAX_SELECT = 3;

function ComparisonTable({ selected }: { selected: Community[] }) {
  const rows: { label: string; key: keyof Community | 'salesOfficeHours'; format?: (c: Community) => string }[] = [
    { label: 'Builder', key: 'builder' },
    { label: 'Type', key: 'type' },
    { label: 'Sq Ft', key: 'sqft' },
    { label: 'Beds', key: 'beds' },
    { label: 'Baths', key: 'baths' },
    { label: 'Garage', key: 'garage' },
    { label: 'Price', key: 'price' },
    { label: 'Status', key: 'status' },
    { label: 'Homes', key: 'units', format: (c) => String(c.units) },
    { label: 'Highlight', key: 'highlight' },
    { label: 'Sales office hours', key: 'salesOfficeHours', format: (c) => c.salesOfficeHours ?? '—' },
  ];

  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="w-full border-collapse text-left min-w-[600px]">
        <thead>
          <tr className="border-b border-stone-700">
            <th className="py-3 pr-4 text-sm font-medium text-stone-500 uppercase tracking-wider w-36">
              Spec
            </th>
            {selected.map((c) => (
              <th key={c.slug} className="py-3 px-4 border-l border-stone-800">
                <Link
                  href={`/communities/${c.slug}`}
                  className="font-semibold text-stone-100 hover:text-amber-400 transition-colors"
                >
                  {c.name}
                </Link>
                <p className="text-xs text-amber-500 mt-0.5">{c.builder}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, key, format }) => (
            <tr key={key} className="border-b border-stone-800/50">
              <td className="py-3 pr-4 text-sm text-stone-500">{label}</td>
              {selected.map((c) => (
                <td key={c.slug} className="py-3 px-4 border-l border-stone-800/50 text-stone-300 text-sm">
                  {format ? format(c) : String((c as Record<string, unknown>)[key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex flex-wrap gap-4">
        {selected.map((c) => (
          <Link
            key={c.slug}
            href={`/communities/${c.slug}`}
            className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
          >
            View {c.name} details →
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ComparePage() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  const toggle = (slug: string) => {
    setSelectedSlugs((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_SELECT) return prev;
      return [...prev, slug];
    });
  };

  const selected = selectedSlugs
    .map((slug) => getCommunityBySlug(slug))
    .filter((c): c is Community => c != null);

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
            Compare Communities
          </p>
          <h1
            className="mt-4 text-4xl font-light tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Side-by-Side <span className="italic text-amber-400">Comparison</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Select up to 3 communities to compare specs, price, and features.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-sm uppercase tracking-widest text-amber-500">
            Select communities ({selectedSlugs.length}/{MAX_SELECT})
          </h2>
          <div className="flex flex-wrap gap-4">
            {communities.map((c) => {
              const checked = selectedSlugs.includes(c.slug);
              const disabled = !checked && selectedSlugs.length >= MAX_SELECT;
              return (
                <label
                  key={c.slug}
                  className={`flex items-center gap-3 rounded-sm border px-4 py-3 cursor-pointer transition-colors ${
                    disabled
                      ? 'border-stone-800 bg-stone-900/30 opacity-60 cursor-not-allowed'
                      : checked
                        ? 'border-amber-500/50 bg-amber-500/10'
                        : 'border-stone-800 bg-stone-900/50 hover:border-amber-500/30'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(c.slug)}
                    disabled={disabled}
                    className="h-4 w-4 rounded border-stone-600 bg-stone-800 text-amber-500 focus:ring-amber-500"
                  />
                  <span className="font-medium text-stone-100">{c.name}</span>
                  <span className="text-sm text-stone-500">({c.builder})</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      {selected.length >= 2 && (
        <section className="px-6 py-12 border-t border-stone-800/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-light md:text-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Comparison <span className="italic text-amber-400">Table</span>
            </h2>
            <div className="rounded-sm border border-stone-800 bg-stone-900/30 p-4 md:p-6">
              <ComparisonTable selected={selected} />
            </div>
          </div>
        </section>
      )}

      {selected.length < 2 && selectedSlugs.length > 0 && (
        <p className="px-6 pb-12 text-center text-stone-500">
          Select at least 2 communities to see the comparison table.
        </p>
      )}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-stone-400 mb-6">
            Have questions? Call Dr. Jan Duffy before your first model home visit.
          </p>
          <CalendlyLink className="inline-flex items-center gap-3 rounded-sm bg-amber-500 px-6 py-4 font-semibold text-stone-950 hover:bg-amber-400 transition-colors">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Tour
          </CalendlyLink>
        </div>
      </section>

      <footer className="border-t border-stone-800 px-6 py-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/communities" className="text-stone-400 hover:text-amber-400 transition-colors">Communities</Link>
            <Link href="/neighborhood-map" className="text-stone-400 hover:text-amber-400 transition-colors">Map</Link>
            <Link href="/compare" className="text-stone-400 hover:text-amber-400 transition-colors">Compare</Link>
            <Link href="/testimonials" className="text-stone-400 hover:text-amber-400 transition-colors">Testimonials</Link>
            <Link href="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-stone-500 md:text-left">
              Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC
            </p>
            <CalendlyLink className="font-semibold text-amber-400 hover:text-amber-300">
              Schedule a Tour
            </CalendlyLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
