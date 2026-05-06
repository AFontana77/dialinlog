import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DialInLog — Espresso Roaster Reference + Shot Log App",
  description: "DialInLog has 176+ espresso roasters with tasting notes, recommended dose, ratio, and yield. Log every shot with dose, yield, time, and your rating. Dial in faster. Free on iPhone and Android.",
};

const SHOT_LOG = [
  { bean: "Sey Coffee Geisha",       dose: "18.2g", yield: "36.5g", time: "28s" },
  { bean: "Onyx Monarch",            dose: "18.0g", yield: "36.0g", time: "26s" },
  { bean: "George Howell",           dose: "18.5g", yield: "37.2g", time: "30s" },
  { bean: "Heart La Voz",            dose: "18.0g", yield: "35.8g", time: "27s" },
  { bean: "Stumptown Hair Bender",   dose: "18.2g", yield: "36.4g", time: "29s" },
];

const SPEC_ROWS = [
  {
    label: "Roaster database",
    body: "Track beans by roaster, origin, process, roast date.",
  },
  {
    label: "Shot log",
    body: "Dose, yield, time, grind setting, temp. Add tasting notes.",
  },
  {
    label: "Recipe presets",
    body: "Save the dial-in for each bag. Pull it up in seconds.",
  },
  {
    label: "Bean retirement",
    body: "Know when a bag is past peak. Order earlier next time.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DialInLog",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Espresso profiles for 176+ roasters and blends. Log your shots, track dial-in notes, and find what works for your setup.",
            "url": "https://www.dialinlog.com"
          })
        }}
      />
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* SECTION 1: HERO */}
        <section
          className="px-6 lg:px-10"
          style={{ backgroundColor: 'oklch(0.10 0.018 30)' }}
        >
          <div className="max-w-[1200px] mx-auto py-20 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">

            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span
                  aria-hidden="true"
                  className="block h-px w-10"
                  style={{ background: 'oklch(0.55 0.17 40)' }}
                />
                <span
                  className="eyebrow"
                  style={{ color: 'oklch(0.55 0.17 40)' }}
                >
                  DialInLog · Espresso Log · Free Reference
                </span>
              </div>

              <h1
                className="font-display uppercase"
                style={{
                  fontSize: 'clamp(2.75rem, 6vw, 5.25rem)',
                  lineHeight: '0.92',
                  letterSpacing: '-0.015em',
                  fontWeight: 700,
                  color: 'oklch(0.93 0.015 50)',
                }}
              >
                Dial in faster.
                <br />
                <span style={{ color: 'oklch(0.72 0.14 70)' }}>
                  Log every shot. Find your recipe.
                </span>
              </h1>

              <p
                className="mt-7 max-w-[34rem] text-base lg:text-lg leading-relaxed"
                style={{ color: 'oklch(0.78 0.015 50)' }}
              >
                DialInLog gives you 176+ specialty roasters with tasting notes, recommended dose-to-yield ratios, and brew temperature guidance built in. Log every shot with dose, yield, time, and rating. Track your adjustments. Find your recipe faster, without starting over every new bag.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/library" className="btn-primary press-feedback">
                  Browse the Roaster Library
                </Link>
                <Link href="/free-download" className="btn-ghost press-feedback">
                  Free Espresso Ratio Guide
                </Link>
              </div>

              <p className="mt-6 text-xs tabular" style={{ color: 'oklch(0.55 0.012 50)' }}>
                Free app · No credit card · 176+ roasters included
              </p>
            </div>

            {/* Right: shot log preview */}
            <div
              className="rounded-md overflow-hidden"
              style={{
                background: 'oklch(0.17 0.025 30)',
                border: '1px solid oklch(0.27 0.025 30)',
                boxShadow: '0 20px 60px -20px oklch(0 0 0 / 0.7)',
              }}
            >
              {/* Card header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="block h-2 w-2 rounded-full"
                    style={{ background: 'oklch(0.55 0.17 40)' }}
                  />
                  <span
                    className="eyebrow"
                    style={{ color: 'oklch(0.72 0.14 70)' }}
                  >
                    Shot Log · Today
                  </span>
                </div>
                <span
                  className="text-xs tabular"
                  style={{ color: 'oklch(0.62 0.015 50)' }}
                >
                  06:47
                </span>
              </div>

              {/* Column headers */}
              <div
                className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] px-6 py-3"
                style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}
              >
                {['Bean', 'Dose', 'Yield', 'Time'].map((h) => (
                  <span
                    key={h}
                    className="eyebrow"
                    style={{ color: 'oklch(0.72 0.14 70)', fontSize: '0.68rem' }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              <div>
                {SHOT_LOG.map((row, i) => (
                  <div
                    key={row.bean}
                    className="grid grid-cols-[1.4fr_0.7fr_0.7fr_0.6fr] px-6 py-4 items-center"
                    style={{
                      borderBottom: i === SHOT_LOG.length - 1 ? 'none' : '1px solid oklch(0.22 0.022 30)',
                    }}
                  >
                    <span
                      className="text-sm font-body"
                      style={{ color: 'oklch(0.93 0.015 50)', fontWeight: 500 }}
                    >
                      {row.bean}
                    </span>
                    <span
                      className="text-sm tabular font-body"
                      style={{ color: 'oklch(0.55 0.17 40)', fontWeight: 600 }}
                    >
                      {row.dose}
                    </span>
                    <span
                      className="text-sm tabular font-body"
                      style={{ color: 'oklch(0.55 0.17 40)', fontWeight: 600 }}
                    >
                      {row.yield}
                    </span>
                    <span
                      className="text-sm tabular font-body"
                      style={{ color: 'oklch(0.55 0.17 40)', fontWeight: 600 }}
                    >
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <Link
                href="/library"
                className="block px-6 py-4 text-xs eyebrow transition-colors"
                style={{
                  color: 'oklch(0.72 0.14 70)',
                  borderTop: '1px solid oklch(0.27 0.025 30)',
                  background: 'oklch(0.15 0.022 30)',
                }}
              >
                View 176 shots logged →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: STAT STRIP */}
        <section
          className="px-6 lg:px-10"
          style={{ background: 'oklch(0.55 0.17 40)' }}
        >
          <div className="max-w-[1200px] mx-auto py-14 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {[
              { num: '176+', label: 'Roasters' },
              { num: '∞',     label: 'Logged shots' },
              { num: '$0',    label: 'To start' },
            ].map((stat) => (
              <div key={stat.label} className="text-left md:text-center">
                <div
                  className="font-display tabular uppercase"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                    lineHeight: '0.95',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: 'oklch(0.13 0.020 30)',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className="mt-2 eyebrow"
                  style={{ color: 'oklch(0.18 0.025 30)', letterSpacing: '0.22em' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EDITORIAL VALUE */}
        <section
          className="px-6 lg:px-10"
          style={{ background: 'oklch(0.17 0.025 30)' }}
        >
          <div className="max-w-[1100px] mx-auto py-24 lg:py-28">
            <div className="flex items-center gap-3 mb-8">
              <span
                aria-hidden="true"
                className="block h-px w-10"
                style={{ background: 'oklch(0.72 0.14 70)' }}
              />
              <span
                className="eyebrow"
                style={{ color: 'oklch(0.72 0.14 70)' }}
              >
                The Method
              </span>
            </div>

            <h2
              className="font-display uppercase"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                lineHeight: '0.94',
                letterSpacing: '-0.01em',
                fontWeight: 700,
                color: 'oklch(0.93 0.015 50)',
                maxWidth: '20ch',
              }}
            >
              Dial in by the numbers.
            </h2>

            <p
              className="mt-7 max-w-[40rem] text-base lg:text-lg leading-relaxed"
              style={{ color: 'oklch(0.78 0.015 50)' }}
            >
              Dialing in espresso without reference data is trial and error with no finish line. DialInLog gives you a starting dose-to-yield ratio and brew temp for your specific roast, so your first shot is calibrated, not random. Then your logged adjustments get you to perfect faster.
            </p>

            <div
              className="mt-14"
              style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}
            >
              {SPEC_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-3 md:gap-12 py-7 lg:py-9"
                  style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}
                >
                  <h3
                    className="font-display uppercase"
                    style={{
                      fontSize: '1.5rem',
                      lineHeight: '1.05',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                      color: 'oklch(0.93 0.015 50)',
                    }}
                  >
                    {row.label}
                  </h3>
                  <p
                    className="font-body text-base lg:text-lg leading-relaxed"
                    style={{ color: 'oklch(0.78 0.015 50)' }}
                  >
                    {row.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CTA PANEL */}
        <section
          className="px-6 lg:px-10"
          style={{
            background: 'oklch(0.10 0.018 30)',
            borderTop: '1px solid oklch(0.27 0.025 30)',
          }}
        >
          <div className="max-w-[900px] mx-auto py-24 lg:py-28">
            <div className="flex items-center gap-3 mb-7">
              <span
                aria-hidden="true"
                className="block h-px w-10"
                style={{ background: 'oklch(0.72 0.14 70)' }}
              />
              <span
                className="eyebrow"
                style={{ color: 'oklch(0.72 0.14 70)' }}
              >
                Free to start
              </span>
            </div>

            <h2
              className="font-display uppercase"
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                lineHeight: '0.94',
                letterSpacing: '-0.01em',
                fontWeight: 700,
                color: 'oklch(0.93 0.015 50)',
                maxWidth: '22ch',
              }}
            >
              Get the dial-in sheet first.
            </h2>

            <p
              className="mt-6 max-w-[36rem] text-base lg:text-lg leading-relaxed"
              style={{ color: 'oklch(0.78 0.015 50)' }}
            >
              Download the printable espresso ratio reference. The 1:2 to 1:3 ratio spectrum, extraction time targets, and what each ratio actually tastes like. Good for any machine, any grinder.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/free-download" className="btn-primary press-feedback">
                Get the Free Guide
              </Link>
              <Link href="/library" className="btn-ghost press-feedback">
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
