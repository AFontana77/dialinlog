import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DialInLog Library — 5,000+ coffees and roasters",
  description: "Espresso roasters and single-origin beans with origin, roast level, process, and tasting notes. Browse the DialInLog reference database — available in the free app.",
};

const CATEGORIES = [
  { name: "Ethiopia", detail: "Yirgacheffe, Sidama, Guji — floral, fruity, light-medium roast profiles." },
  { name: "Colombia", detail: "Huila, Nariño, Antioquia — balanced, caramel, nutty profiles." },
  { name: "Guatemala", detail: "Antigua, Huehuetenango — chocolate, dark fruit, medium-dark." },
  { name: "Brazil", detail: "Cerrado, Sul de Minas — nutty, low acid, espresso-friendly naturals." },
  { name: "Kenya", detail: "AA, AB grades — bright acidity, blackcurrant, berry-forward." },
];

export default function LibraryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-amber-50 rounded-2xl items-center justify-center mb-6">
              <Database className="text-amber-600" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              DialInLog Library
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              5,000+ coffees and roasters from Coffee Review + curated roaster database. Espresso roasters and single-origin beans with origin, roast level, process, and tasting notes.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full search available in the free app
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map((cat) => (
                <div key={cat.name} className="bg-gray-50 rounded-xl p-6 card-hover border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search the full database in the app.
            </h2>
            <p className="text-gray-600 mb-6">
              The DialInLog app has the complete 5,000+ coffees and roasters with full-text search, filters, and your personal log — all free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Google Play
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free. No subscription. No credit card.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
