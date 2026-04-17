import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, Star, ArrowRight, Download, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DialInLog — Search 5,000+ espresso roasters",
  description: "DialInLog has 5,000+ espresso roasters and single-origin beans with tasting notes and roast profiles. Log your shots, track grind settings, and dial in your perfect espresso.",
};

const FEATURES = [
  { icon: Database, title: "Roaster database", body: "5,000+ beans and roasters with origin, process, and tasting notes." },
  { icon: BookOpen, title: "Shot log", body: "Log dose, yield, time, pressure, and grind setting for every pull." },
  { icon: BarChart3, title: "Dial-in history", body: "See what settings worked for each bean. Compare shots side by side." },
  { icon: Star, title: "Tasting notes", body: "Rate your shots and add tasting notes. Build your own flavor vocabulary." },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-6">
              Search 5,000+ coffees and roasters. Log your own.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Search 5,000+ espresso roasters.
              <br />
              <span className="text-amber-700">Log your shots.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              DialInLog brings a curated database of espresso roasters, single-origin beans, and tasting notes to your home or cafe setup. Search by origin, roast level, or flavor profile. Log grind settings, dose, yield, and time. Build a record of everything you've dialed in — and what actually worked.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-700 transition-colors press-feedback min-h-[48px]">
                Browse the DialInLog Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Download
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Free app. No credit card. 5,000+ coffees and roasters from Coffee Review + curated roaster database.
            </p>
          </div>
        </section>

        {/* Database pitch */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The database IS the app.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Most log apps give you a blank screen. DialInLog gives you 5,000+ coffees and roasters from Coffee Review + curated roaster database — searchable, organized, and ready to use. Log what you do. Build your personal collection alongside the reference library.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Get the free download first.
            </h2>
            <p className="text-gray-600 mb-6">
              Start with the printable reference sheet. Use it today, no app required. When you want the searchable database and log, get the app free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-700 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free PDF
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-amber-200 text-amber-700 font-medium px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors min-h-[48px]">
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
