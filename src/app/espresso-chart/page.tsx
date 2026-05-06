import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espresso Chart — Dose, Yield, Ratio & Extraction Guide | DialInLog',
  description:
    'Espresso chart with dose, yield, brew ratio, and extraction time targets for ristretto, espresso, and lungo. Reference for dialing in at home.',
};

const SHOT_TYPES = [
  {
    type: 'Ristretto',
    dose: '18g',
    yield: '18-27g',
    ratio: '1:1 to 1:1.5',
    time: '25-35s',
    notes: 'Sweet, thick, intense. Less bitter than a standard shot. Good for milk drinks where you want a strong espresso flavor.',
  },
  {
    type: 'Espresso',
    dose: '18g',
    yield: '36g',
    ratio: '1:2',
    time: '25-30s',
    notes: 'The standard. Balanced sweetness, body, and some brightness. Good starting point for any new bag of beans.',
  },
  {
    type: 'Lungo',
    dose: '18g',
    yield: '54-72g',
    ratio: '1:3 to 1:4',
    time: '35-45s',
    notes: 'Longer pull, more bitter, more volume. Not an Americano. Water comes through the puck. Some roasts taste better this way.',
  },
];

const EXTRACTION_SIGNS = [
  {
    symptom: 'Sour, sharp, thin',
    cause: 'Under-extracted',
    fixes: ['Grind finer', 'Increase dose slightly', 'Raise brew temp by 1-2°C'],
  },
  {
    symptom: 'Bitter, harsh, dry finish',
    cause: 'Over-extracted',
    fixes: ['Grind coarser', 'Reduce dose slightly', 'Lower brew temp by 1-2°C'],
  },
  {
    symptom: 'Shot under 20 seconds',
    cause: 'Too coarse',
    fixes: ['Go finer by one click', 'Check puck prep and distribution'],
  },
  {
    symptom: 'Shot over 40 seconds',
    cause: 'Too fine',
    fixes: ['Go coarser by one click', 'Check for clumping in the portafilter'],
  },
];

const VARIABLES = [
  {
    title: 'Pressure: 9 bar',
    body: '9 bar is the standard for most home and commercial machines. Some prosumer machines let you adjust this. Most home baristas do not need to change it. If your machine holds 9 bar, the other variables matter more.',
  },
  {
    title: 'Water temp: 90-96°C',
    body: 'Lighter roasts need more heat. Start at 93°C (200°F) for medium roasts. Go up to 95-96°C for light roasts. Drop to 90-91°C for very dark roasts that run bitter easily. Change temp before grind when flavor is close but not right.',
  },
  {
    title: 'Dose: how much coffee',
    body: '18g is a common single dose for a double shot. Most home portafilters fit 14-21g. Pick a dose and keep it the same while dialing in. Changing dose changes everything else. Lock it in first.',
  },
  {
    title: 'Grind size: your main dial',
    body: 'Finer grind slows the shot. Coarser grind speeds it up. Grind size is the variable you adjust most often. Change by one click at a time. One click per shot until you hit the target time and flavor.',
  },
];

const DIAL_IN_STEPS = [
  { step: '01', title: 'Set your target', body: 'Start at 18g dose, 36g yield, 25-30 seconds. These numbers apply to most blends and medium-dark single origins. Write them down before you pull.' },
  { step: '02', title: 'Pull the shot', body: 'Use a scale. Weigh the dose. Time the shot. Weigh the yield. No guessing. Three numbers.' },
  { step: '03', title: 'Taste it', body: 'Taste before you look at the numbers. Sour means under-extracted. Bitter means over-extracted. Balanced is the goal.' },
  { step: '04', title: 'Adjust one thing', body: 'If under: grind finer by one click. If over: grind coarser by one click. Never change dose and grind in the same shot.' },
  { step: '05', title: 'Repeat', body: 'Pull another shot. Taste. Log the result. Most beans dial in within 3-5 shots from your starting point.' },
];

export default function EspressoChartPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Reference · Extraction Targets
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Espresso chart. Dose, yield, ratio, time.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              The numbers behind ristretto, espresso, and lungo. Use this as a reference when dialing in a new bag or troubleshooting a shot that missed.
            </p>
          </div>
        </section>

        {/* SHOT TYPE TABLE */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Shot Type Reference
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Three shots. Same dose. Different yields.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
              All three shot types use the same dose. What changes is how much water you pull through the puck. That changes flavor, volume, and body.
            </p>

            {/* Header row */}
            <div className="grid grid-cols-[1.2fr_0.7fr_0.8fr_0.9fr_0.7fr] gap-4 px-1 pb-3" style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}>
              {['Shot', 'Dose', 'Yield', 'Ratio', 'Time'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold">{h}</span>
              ))}
            </div>

            {SHOT_TYPES.map((row) => (
              <div key={row.type} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[1.2fr_0.7fr_0.8fr_0.9fr_0.7fr] gap-4 px-1 py-6 items-start">
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase', letterSpacing: '-0.005em' }} className="text-xl font-bold mb-2">{row.type}</div>
                  <p style={{ color: 'oklch(0.62 0.015 50)' }} className="text-sm leading-relaxed">{row.notes}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.dose}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.yield}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.ratio}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.time}</span>
              </div>
            ))}
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-5">
              These targets assume 9 bar pressure, 90-96°C (194-205°F) water temp, and 18g dose as a baseline. Adjust for your machine and beans.
            </p>
          </div>
        </section>

        {/* VARIABLES */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              The Variables
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-12">
              Four numbers control every shot.
            </h2>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {VARIABLES.map((v) => (
                <div key={v.title} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-3 md:gap-12 py-7">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase', letterSpacing: '0.005em' }} className="text-xl font-bold">{v.title}</h3>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXTRACTION SIGNS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Diagnostics
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              What the shot is telling you.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Taste first. Then look at the time. The flavor tells you what went wrong.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {EXTRACTION_SIGNS.map(({ symptom, cause, fixes }) => (
                <div key={symptom} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold mb-3">{cause}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold mb-4">{symptom}</h3>
                  <ul className="space-y-2">
                    {fixes.map((fix) => (
                      <li key={fix} style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm flex gap-3 items-start">
                        <span style={{ color: 'oklch(0.55 0.17 40)' }} className="flex-shrink-0">→</span>
                        {fix}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAL-IN STEPS */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Method
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Five steps to a dialed-in shot.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Dialing in is just a feedback loop. You pull, taste, adjust, and repeat. Five steps is all it takes.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {DIAL_IN_STEPS.map(({ step, title, body }) => (
                <div key={step} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[auto_1fr] gap-6 py-7 items-start">
                  <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }} className="text-3xl font-bold">{step}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-xl font-bold mb-2">{title}</h3>
                    <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'oklch(0.10 0.018 30)', borderTop: '1px solid oklch(0.27 0.025 30)' }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Free Reference
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Keep this chart in your pocket.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              The free DialInLog ratio guide has this chart plus a shot log template. Download it and log every pull until your recipe is locked in.
            </p>
            <Link href="/free-download" className="btn-primary press-feedback">
              Download the Free Chart
            </Link>
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-5">Free PDF. No signup needed.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
