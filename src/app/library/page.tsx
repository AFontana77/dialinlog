import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, Search, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DialInLog Library — Espresso Roaster Reference Database",
  description: "Browse 176+ specialty espresso roasters with tasting notes, dose/yield ratios, and brew temp guidance. Full search available in the free DialInLog app.",
};

const ROASTER_REGIONS = [
  {
    name: "US Pacific Northwest",
    count: 28,
    highlights: ["Stumptown Coffee", "Coava", "Olympia Coffee", "Heart Coffee", "Water Avenue"],
    notes: "The PNW is where much of the third-wave espresso movement took shape. Roasters here tend toward medium-light profiles with fruit-forward acidity. Stumptown's Hair Bender is one of the most-referenced blends in the database — a touchstone for dialing in ratio-first. Olympia Coffee entries include notes on their micro-lot sourcing and the higher brew temps their lighter roasts often need.",
  },
  {
    name: "US East Coast",
    count: 32,
    highlights: ["Intelligentsia", "Counter Culture", "George Howell", "Onyx", "Madcap"],
    notes: "East Coast specialty roasters include some of the most technically rigorous producers in the US. Counter Culture's approach to transparency gives DialInLog users a reference point for shot quality expectations. George Howell entries stand out for Ethiopian naturals that behave differently under pressure than their washed counterparts — faster extraction, sweeter at the same yield.",
  },
  {
    name: "US South & Midwest",
    count: 22,
    highlights: ["Onyx Coffee Lab", "PT's Coffee", "Revelator", "Odd Otter", "Kaldi's"],
    notes: "A growing specialty scene with roasters like Onyx producing competition-level espresso in Arkansas. Regional roasters here often source distinctively — Ethiopian naturals, Kenyan washed lots, Honduran anaerobic — and the database reflects those sourcing patterns in tasting notes. Onyx's Geometry blend entry includes the higher ratio (1:2.5) that works better than a standard 1:2 for their profile.",
  },
  {
    name: "International",
    count: 40,
    highlights: ["Square Mile (UK)", "Tim Wendelboe (Norway)", "Five Elephant (Germany)", "Proud Mary (Australia)", "Nomad (Spain)"],
    notes: "International specialty roasters represent a different dialing philosophy — lighter roasts, longer extractions, higher ratios. Scandinavian-influenced roasters like Tim Wendelboe include notes on the higher brew temperatures (204–206°F) often needed for their ultra-light profiles. Square Mile entries reflect their systematic, documentation-heavy approach to espresso recipe development.",
  },
  {
    name: "High-Volume & Accessible",
    count: 24,
    highlights: ["Blue Bottle", "Peet's Espresso", "La Colombe", "Caribou Coffee", "Equator"],
    notes: "Well-distributed roasters with consistent year-round offerings. Blue Bottle's Three Africas and Bella Donovan appear frequently in DialInLog shot logs precisely because they're consistent enough to build reliable recipes around. Good for benchmarking your machine and grinder — a stable reference roast is more useful than a rotating single-origin when you're validating equipment changes.",
  },
  {
    name: "Natural Process Specialists",
    count: 30,
    highlights: ["Passenger Coffee", "Brandywine Coffee", "Populace", "Driftaway", "La Cabra"],
    notes: "Natural and anaerobic coffees behave differently under pressure than washed coffees. They extract faster, run sweeter at the same dose/yield, and often benefit from lower brew temps to avoid fermented or boozy over-extraction. The database notes process type prominently for every entry. Anaerobic naturals in particular need a different starting point — entries include the adjusted starting ratios that work.",
  },
];

const DIALING_PRINCIPLES = [
  {
    title: "Start with ratio, then adjust time",
    body: "A 1:2 ratio (18g in / 36g out) is a reliable starting point for most espresso blends. If the shot is too bitter, increase the yield toward 1:2.5. If it's sour or thin, drop toward 1:1.8. Don't change grind and ratio at the same time — you won't know which variable made the difference. Log each change separately.",
  },
  {
    title: "Extraction time is a symptom, not a setting",
    body: "Targeting 25–30 seconds is useful as a sanity check, not a goal. A 35-second shot at the right ratio and good flavor is a good shot. Chasing a time number by adjusting grind without tasting the result produces worse espresso, not better. Log the time — don't optimize for it directly.",
  },
  {
    title: "Temperature changes flavor, not just speed",
    body: "Most machines run 200–202°F. Lighter roasts often need 203–205°F to extract fully. Darker roasts run bitter at the same temp. If a shot tastes under-extracted at a 28-second pull and your ratio is right, try 2°F higher before going finer on the grind. Log both temp and result together.",
  },
  {
    title: "Fresh beans dial in differently than rested beans",
    body: "Beans off-roast (under 5 days) are gassy — shots channel, yields are inconsistent, and data is noisy. Most specialty espresso is best from day 7 to day 21 after roast. DialInLog's shot log includes a roast date field so you can track how your specific bag dials in across its rest window.",
  },
];

const EXTRACTION_GUIDE = [
  { symptom: "Sour, sharp, thin", cause: "Under-extraction", fix: "Grind finer, increase dose, or raise brew temp by 2°F" },
  { symptom: "Bitter, harsh, dry finish", cause: "Over-extraction", fix: "Grind coarser, reduce dose, or lower brew temp by 2°F" },
  { symptom: "Watery, no body", cause: "Yield too high", fix: "Reduce yield — stop the shot earlier" },
  { symptom: "Thick, syrupy, one-note", cause: "Yield too low", fix: "Increase yield — let the shot run longer" },
  { symptom: "Spurting or inconsistent flow", cause: "Channeling", fix: "Improve distribution and puck prep, check grind uniformity" },
  { symptom: "Shot finishes under 20 seconds", cause: "Grind too coarse", fix: "Go finer in small increments, one click at a time" },
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
              <Database className="text-amber-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">DialInLog Roaster Library</h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-4">
              176+ specialty espresso roasters with tasting notes, starting dose/yield ratios, brew temperature guidance, and origin information. Browse by region below. Full-text search is in the app.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full roaster search available in the free DialInLog app
            </div>
          </div>
        </section>

        {/* Roaster Regions */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Roasters by Region</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              176+ roasters organized by geography. Region matters — PNW roasters trend lighter, East Coast more transparent, and international producers often push further into light-roast territory than US counterparts.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {ROASTER_REGIONS.map((region) => (
                <div key={region.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{region.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-50 text-amber-700">{region.count} roasters</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Includes: {region.highlights.join(", ")}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{region.notes}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-sm text-gray-400">
              Library updated regularly. Custom roaster entries can be added in the app for any roaster not listed.
            </p>
          </div>
        </section>

        {/* Dialing Principles */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Four principles that save wasted shots</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Most espresso problems come from changing too many variables at once, or optimizing for the wrong target. These four rules fix that.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {DIALING_PRINCIPLES.map(({ title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extraction Troubleshooting */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Extraction troubleshooting</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Taste the shot first. Find the symptom. Fix one variable at a time.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">What you taste</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Likely cause</th>
                    <th className="text-left py-3 font-semibold text-gray-700">What to adjust</th>
                  </tr>
                </thead>
                <tbody>
                  {EXTRACTION_GUIDE.map(({ symptom, cause, fix }) => (
                    <tr key={symptom} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{symptom}</td>
                      <td className="py-3 pr-4 text-amber-700 font-medium text-xs">{cause}</td>
                      <td className="py-3 text-gray-600 text-xs">{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search the full library. Log every shot.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The DialInLog app has all 176+ roasters with full-text search, plus a shot log with dose, yield, time, and rating. Build a recipe for every bag you dial in. Free to download. $6.99 one-time for the full log.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Google Play
              </a>
            </div>
            <p className="text-sm text-gray-400">Free. No subscription. No credit card.</p>
            <div className="mt-6">
              <Link href="/free-download" className="text-sm text-amber-700 hover:underline">
                Or download the free espresso ratio reference guide first
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
