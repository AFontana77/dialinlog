import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Dial In Espresso — Step-by-Step Guide | DialInLog',
  description:
    'How to dial in espresso at home. Set your dose and yield target, adjust grind size, and taste your way to a perfect pull.',
};

const STEPS = [
  { step: '01', title: 'Pick your target', body: '18g in, 36g out, 25-30 seconds. That is a 1:2 ratio. Write it down before you start. It gives you three numbers to compare against after every shot.' },
  { step: '02', title: 'Pull a shot', body: 'Weigh the dose on a scale before it goes in the portafilter. Start the timer when you start the pump. Stop and weigh the yield when you hit 36g or when the shot looks done. Write all three numbers down.' },
  { step: '03', title: 'Compare the numbers', body: 'Check yield first. If you hit 36g in 25-30 seconds, the ratio and time are both good. If the shot ran in 18 seconds, your grind is too coarse. If it took 45 seconds, your grind is too fine.' },
  { step: '04', title: 'Taste it', body: 'Taste the shot before you decide what to change. Sour means under-extracted. Bitter means over-extracted. Balanced sweetness with some brightness is the target. The taste matters more than the time.' },
  { step: '05', title: 'Adjust one thing', body: 'Under-extracted: grind finer by one click. Over-extracted: grind coarser by one click. One click. One change. Pull again. This is the whole process.' },
  { step: '06', title: 'Repeat until it tastes right', body: 'Most beans dial in within 3-6 shots from a reasonable starting grind. Once it tastes good and hits the ratio, your grind setting is your recipe.' },
];

const MISTAKES = [
  { mistake: 'Changing dose and grind at the same time', fix: 'Change one variable per shot. If you adjust both, you will not know which one fixed the problem.' },
  { mistake: 'Not weighing the dose', fix: 'Even a 1g variation in dose changes the extraction significantly. Weigh every time.' },
  { mistake: 'Comparing shots from different beans', fix: 'Every bag dials in differently. Start fresh when you open a new bag. Your old grind setting is just a starting point.' },
  { mistake: 'Pulling shots from a brand-new bag', fix: 'Beans off-roast (under 5-7 days) are gassy. Shots channel and yield varies. Wait until day 7-10 post-roast for a stable dial-in.' },
  { mistake: 'Dialing in from memory', fix: 'You will not remember dose, yield, and time from three shots ago without writing them down. Log every pull.' },
];

const WHEN_TO_REGRIND = [
  { trigger: 'New bag of beans', detail: 'Every bag is different. Same roaster, different lot, different roast date. Start at your last grind setting but expect 2-4 adjustment shots.' },
  { trigger: 'Temperature changed significantly', detail: 'Grinders expand in heat and contract in cold. If your kitchen temperature shifted 10+ degrees, your grind setting shifted too.' },
  { trigger: 'Beans are more than 4 weeks past roast', detail: 'Older beans lose CO2 and compress differently. Shots often run faster. Go slightly finer when your bag has been open for a month.' },
  { trigger: 'You cleaned or disassembled the grinder', detail: 'Reassembling a grinder can shift the burr alignment slightly. Pull two test shots and check the time before trusting the old setting.' },
];

const QUICK_REF = [
  { taste: 'Sour, sharp, thin', problem: 'Under-extracted', fix: 'Grind finer by one click' },
  { taste: 'Bitter, harsh, dry', problem: 'Over-extracted', fix: 'Grind coarser by one click' },
  { taste: 'Shot in under 20s', problem: 'Too coarse', fix: 'Grind finer until 25+ sec' },
  { taste: 'Shot takes 40+ s', problem: 'Too fine', fix: 'Grind coarser until under 35 sec' },
  { taste: 'Right time, off taste', problem: 'Temperature', fix: 'Adjust brew temp 1-2°C' },
];

export default function HowToDialInEspressoPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Method · Six Steps
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              How to dial in espresso.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Dialing in means adjusting your grind until the shot tastes right and hits the target ratio. It is a feedback loop. You pull, taste, adjust, and repeat until the shot is good.
            </p>
          </div>
        </section>

        {/* WHAT IT MEANS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              The Concept
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-8">
              What dialing in actually means.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              When you dial in espresso, you are finding the right grind setting for a specific bag of beans on a specific machine. The goal is a repeatable recipe: 18g in, 36g out, 25-30 seconds, tastes balanced.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              The grind is your main control. Finer slows the shot and increases extraction. Coarser speeds it up and decreases extraction. Everything else (dose, water temp, pressure) stays fixed while you adjust grind.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Once you find the right grind for a bag, write it down. That is your recipe. You do not need to re-dial every morning. You dial in once per bag and then just pull shots.
            </p>
          </div>
        </section>

        {/* STEPS */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Procedure
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Six steps to a dialed-in shot.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Follow these in order. Do not skip the tasting step.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {STEPS.map(({ step, title, body }) => (
                <div key={step} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[auto_1fr] gap-6 py-7 items-start">
                  <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }} className="text-3xl sm:text-4xl font-bold">{step}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-xl font-bold mb-2">{title}</h3>
                    <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK REF */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Quick Reference
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-10">
              Taste-to-adjustment.
            </h2>

            <div className="grid grid-cols-[1.2fr_1fr_1.4fr] gap-4 px-1 pb-3" style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}>
              {['Taste', 'Problem', 'Fix'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold">{h}</span>
              ))}
            </div>
            {QUICK_REF.map((row) => (
              <div key={row.taste} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[1.2fr_1fr_1.4fr] gap-4 px-1 py-5 items-center">
                <span style={{ color: 'oklch(0.93 0.015 50)' }} className="text-sm font-medium">{row.taste}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.06em' }} className="text-sm font-bold uppercase">{row.problem}</span>
                <span style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm">{row.fix}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MISTAKES */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Pitfalls
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-12">
              Five mistakes that waste shots.
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {MISTAKES.map(({ mistake, fix }) => (
                <div key={mistake} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <p style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-base font-bold mb-3">{mistake}</p>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm leading-relaxed">{fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHEN TO REGRIND */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Triggers
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              When to re-dial.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Once you find your grind setting, it holds for most of the bag. These four situations mean it is time to adjust again.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {WHEN_TO_REGRIND.map(({ trigger, detail }) => (
                <div key={trigger} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-3 md:gap-12 py-7">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-base font-bold">{trigger}</h3>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOT LOG NEED */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              The Log
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-8">
              Why you need a shot log.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              You cannot dial in from memory. After three shots, you will not remember whether shot two tasted sour or shot three ran at 22 seconds. The numbers blur together.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              Writing dose, yield, time, and a tasting note for each shot gives you a record you can actually use. You see the pattern. You find the grind setting that works. And when you open a new bag, you have a reference point to start from.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              That is what DialInLog is for. Log every shot during dial-in. Save the recipe that works. Come back to it every morning without pulling calibration shots.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'oklch(0.10 0.018 30)', borderTop: '1px solid oklch(0.27 0.025 30)' }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Free Tool
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Start logging. Stop guessing.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              The free DialInLog download includes a shot log template you can use today, before you touch the app.
            </p>
            <Link href="/free-download" className="btn-primary press-feedback">
              Download the Free Shot Log
            </Link>
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-5">Free PDF. No email required.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
