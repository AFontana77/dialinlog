import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
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
    notes: "The PNW is where much of the third-wave espresso movement took shape. Roasters here tend toward medium-light profiles with fruit-forward acidity. Stumptown's Hair Bender is one of the most-referenced blends in the database, a touchstone for dialing in ratio-first. Olympia Coffee entries include notes on their micro-lot sourcing and the higher brew temps their lighter roasts often need.",
  },
  {
    name: "US East Coast",
    count: 32,
    highlights: ["Intelligentsia", "Counter Culture", "George Howell", "Onyx", "Madcap"],
    notes: "East Coast specialty roasters include some of the most technically rigorous producers in the US. Counter Culture's approach to transparency gives DialInLog users a reference point for shot quality expectations. George Howell entries stand out for Ethiopian naturals that behave differently under pressure than their washed counterparts. Faster extraction, sweeter at the same yield.",
  },
  {
    name: "US South & Midwest",
    count: 22,
    highlights: ["Onyx Coffee Lab", "PT's Coffee", "Revelator", "Odd Otter", "Kaldi's"],
    notes: "A growing specialty scene with roasters like Onyx producing competition-level espresso in Arkansas. Regional roasters here often source distinctively. Ethiopian naturals, Kenyan washed lots, Honduran anaerobic. The database reflects those sourcing patterns in tasting notes. Onyx's Geometry blend entry includes the higher ratio (1:2.5) that works better than a standard 1:2 for their profile.",
  },
  {
    name: "International",
    count: 40,
    highlights: ["Square Mile (UK)", "Tim Wendelboe (Norway)", "Five Elephant (Germany)", "Proud Mary (Australia)", "Nomad (Spain)"],
    notes: "International specialty roasters represent a different dialing philosophy. Lighter roasts, longer extractions, higher ratios. Scandinavian-influenced roasters like Tim Wendelboe include notes on the higher brew temperatures (204-206°F) often needed for their ultra-light profiles. Square Mile entries reflect their systematic, documentation-heavy approach to espresso recipe development.",
  },
  {
    name: "High-Volume & Accessible",
    count: 24,
    highlights: ["Blue Bottle", "Peet's Espresso", "La Colombe", "Caribou Coffee", "Equator"],
    notes: "Well-distributed roasters with consistent year-round offerings. Blue Bottle's Three Africas and Bella Donovan appear frequently in DialInLog shot logs precisely because they are consistent enough to build reliable recipes around. Good for benchmarking your machine and grinder. A stable reference roast is more useful than a rotating single-origin when you are validating equipment changes.",
  },
  {
    name: "Natural Process Specialists",
    count: 30,
    highlights: ["Passenger Coffee", "Brandywine Coffee", "Populace", "Driftaway", "La Cabra"],
    notes: "Natural and anaerobic coffees behave differently under pressure than washed coffees. They extract faster, run sweeter at the same dose/yield, and often benefit from lower brew temps to avoid fermented or boozy over-extraction. The database notes process type prominently for every entry. Anaerobic naturals in particular need a different starting point. Entries include the adjusted starting ratios that work.",
  },
];

const DIALING_PRINCIPLES = [
  { title: "Start with ratio, then adjust time", body: "A 1:2 ratio (18g in / 36g out) is a reliable starting point for most espresso blends. If the shot is too bitter, increase the yield toward 1:2.5. If it is sour or thin, drop toward 1:1.8. Do not change grind and ratio at the same time. You will not know which variable made the difference. Log each change separately." },
  { title: "Extraction time is a symptom, not a setting", body: "Targeting 25-30 seconds is useful as a sanity check, not a goal. A 35-second shot at the right ratio and good flavor is a good shot. Chasing a time number by adjusting grind without tasting the result produces worse espresso, not better. Log the time. Do not optimize for it directly." },
  { title: "Temperature changes flavor, not just speed", body: "Most machines run 200-202°F. Lighter roasts often need 203-205°F to extract fully. Darker roasts run bitter at the same temp. If a shot tastes under-extracted at a 28-second pull and your ratio is right, try 2°F higher before going finer on the grind. Log both temp and result together." },
  { title: "Fresh beans dial in differently than rested beans", body: "Beans off-roast (under 5 days) are gassy. Shots channel, yields are inconsistent, and data is noisy. Most specialty espresso is best from day 7 to day 21 after roast. DialInLog's shot log includes a roast date field so you can track how your specific bag dials in across its rest window." },
];

const EXTRACTION_GUIDE = [
  { symptom: "Sour, sharp, thin", cause: "Under-extraction", fix: "Grind finer, increase dose, or raise brew temp by 2°F" },
  { symptom: "Bitter, harsh, dry finish", cause: "Over-extraction", fix: "Grind coarser, reduce dose, or lower brew temp by 2°F" },
  { symptom: "Watery, no body", cause: "Yield too high", fix: "Reduce yield, stop the shot earlier" },
  { symptom: "Thick, syrupy, one-note", cause: "Yield too low", fix: "Increase yield, let the shot run longer" },
  { symptom: "Spurting or inconsistent flow", cause: "Channeling", fix: "Improve distribution and puck prep, check grind uniformity" },
  { symptom: "Shot finishes under 20s", cause: "Grind too coarse", fix: "Go finer in small increments, one click at a time" },
];

export default function LibraryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Roaster Library · 176+ Entries
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              DialInLog Roaster Library.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-7">
              176+ specialty espresso roasters with tasting notes, starting dose/yield ratios, brew temperature guidance, and origin information. Browse by region below. Full-text search is in the app.
            </p>
            <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)', color: 'oklch(0.72 0.14 70)', fontFamily: 'var(--font-display)', letterSpacing: '0.12em', fontSize: '0.72rem' }} className="inline-flex items-center gap-2 px-4 py-2 rounded-md uppercase font-semibold">
              Full search available in the app
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              By Region
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              176+ roasters by geography.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Region matters. PNW roasters trend lighter, East Coast more transparent, and international producers often push further into light-roast territory than US counterparts.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {ROASTER_REGIONS.map((region) => (
                <div key={region.name} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold">{region.name}</h3>
                    <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-2xl font-bold">{region.count}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.62 0.015 50)', letterSpacing: '0.12em', fontSize: '0.68rem' }} className="uppercase font-semibold mb-2">Includes</p>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm mb-4">{region.highlights.join(", ")}</p>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm leading-relaxed">{region.notes}</p>
                </div>
              ))}
            </div>
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-8">
              Library updated regularly. Custom roaster entries can be added in the app for any roaster not listed.
            </p>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Principles
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Four principles that save wasted shots.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Most espresso problems come from changing too many variables at once, or optimizing for the wrong target. These four rules fix that.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {DIALING_PRINCIPLES.map(({ title, body }) => (
                <div key={title} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-3 md:gap-12 py-7">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold">{title}</h3>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TROUBLESHOOTING */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Troubleshooting
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Extraction guide.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
              Taste the shot first. Find the symptom. Fix one variable at a time.
            </p>

            <div className="grid grid-cols-[1.2fr_1fr_1.6fr] gap-4 px-1 pb-3" style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}>
              {['What you taste', 'Likely cause', 'What to adjust'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold">{h}</span>
              ))}
            </div>
            {EXTRACTION_GUIDE.map((row) => (
              <div key={row.symptom} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[1.2fr_1fr_1.6fr] gap-4 px-1 py-5 items-center">
                <span style={{ color: 'oklch(0.93 0.015 50)' }} className="text-sm font-medium">{row.symptom}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.06em' }} className="text-sm font-bold uppercase">{row.cause}</span>
                <span style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm">{row.fix}</span>
              </div>
            ))}
          </div>
        </section>

        {/* APP CTA */}
        <section style={{ background: 'oklch(0.10 0.018 30)', borderTop: '1px solid oklch(0.27 0.025 30)' }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Get the App
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Search the full library. Log every shot.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              The DialInLog app has all 176+ roasters with full-text search, plus a shot log with dose, yield, time, and rating. Build a recipe for every bag you dial in. Free to download. $6.99 one-time for the full log.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary press-feedback">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost press-feedback">
                Google Play
              </a>
            </div>
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mb-4">Free. No subscription. No credit card.</p>
            <Link href="/free-download" style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.12em', fontSize: '0.72rem' }} className="uppercase font-semibold hover:opacity-80 transition-opacity">
              Or download the free ratio guide first →
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
