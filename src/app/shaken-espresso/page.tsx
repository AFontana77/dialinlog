import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shaken Espresso Recipe — How to Make It at Home | DialInLog',
  description:
    'How to make a shaken espresso at home. The Starbucks copycat recipe plus tips for getting the ratio right with your home espresso machine.',
};

const VARIATIONS = [
  { name: 'Classic shaken espresso', recipe: '2 shots (60ml), 3 ice cubes, classic syrup or simple syrup. Shake 10s. Pour over fresh ice. Add oat milk.', notes: 'The baseline. Good starting point before you start tweaking.' },
  { name: 'Vanilla shaken espresso', recipe: '2 shots, 3 ice cubes, 2 pumps vanilla syrup. Shake 10s. Pour over ice. Top with cold oat milk.', notes: 'Sweeter and a bit softer. The vanilla rounds out sharper shots.' },
  { name: 'Brown sugar oat shaken espresso', recipe: '2 shots, 1 tbsp brown sugar, pinch of cinnamon, 3 ice cubes. Shake 10s. Pour over ice. Top with oat milk.', notes: 'The one that went everywhere on social. The cinnamon does a lot of work here.' },
  { name: 'Iced shaken espresso (no milk)', recipe: '2 shots, 3 ice cubes. Shake 10s. Pour over fresh ice. No milk. Done.', notes: 'Clean and cold. Good when you want full espresso flavor without milk softening it.' },
];

const DIAL_IN_TIPS = [
  { tip: 'Forgives under-extraction', body: 'A shot that tastes too sour on its own often works fine shaken with ice and sweetener. The dilution and chill smooth the rough edges. Use this as a second chance for shots that missed the mark.' },
  { tip: 'Standard ratio still applies', body: 'Aim for 18g dose and 36g yield (1:2 ratio) in 25-30 seconds. The shaking adds dilution, about 10-15g of melt from the ice. Factor that in if you want a stronger drink: pull a 1:1.5 yield instead.' },
  { tip: 'Shake hard for 10 seconds', body: 'The shaking does three things: chills the espresso fast, adds a small amount of water from the ice, and aerates it into a light foam. Under-shaking leaves you with just cold espresso. Not the same thing.' },
  { tip: 'Fresh ice matters twice', body: 'Shake with 3-4 cubes, then pour over a fresh glass of ice. The shaking ice melts significantly. Starting over with fresh ice keeps the drink cold without more dilution.' },
];

const RATIO_ROWS = [
  { dose: '18g', yield: '27g', ratio: '1:1.5', label: 'Ristretto', note: 'Intense, sweet. Good if you prefer a stronger drink after dilution.' },
  { dose: '18g', yield: '36g', ratio: '1:2', label: 'Standard', note: 'Balanced after shaking. Best starting point for most beans.' },
  { dose: '18g', yield: '45g', ratio: '1:2.5', label: 'Lungo-ish', note: 'Milder, brighter. Add no milk and drink it straight over ice.' },
];

const STARBUCKS_NEEDS = [
  '2 espresso shots (about 60ml / 2 oz yield)',
  '3-4 ice cubes for shaking',
  '1-2 pumps simple syrup or classic syrup',
  'A cocktail shaker or mason jar with a lid',
  'Fresh ice for the serving glass',
  '2-3 oz oat milk (or any milk)',
];

const STARBUCKS_STEPS = [
  'Pull 2 shots into your shaker. Let them sit 15 seconds to cool slightly.',
  'Add syrup if using. Then add 3-4 ice cubes.',
  'Seal the shaker. Shake hard for 10 seconds.',
  'Fill a glass with fresh ice. Pour the shaken espresso over it. The foam will settle on top.',
  'Add oat milk or cream. Stir lightly or let it layer. Both work.',
];

export default function ShakenEspressoPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Shaken Espresso · 8,100 searches/mo
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Shaken espresso recipe.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Two shots. Ice. A shaker. Ten seconds. That is the whole method. Here is how to get it right at home and how to track your ratios so it tastes the same every time.
            </p>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              The Method
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-8">
              What a shaken espresso actually is.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              A shaken espresso is espresso shaken with ice (and usually a bit of sweetener) before pouring over a glass of fresh ice. Starbucks made it famous, but the technique is old. Italian bartenders have been shaking espresso with sugar for years. They call it a <em>shakerato</em>.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              The shaking does something important. It chills the espresso in about 10 seconds. It adds a small amount of dilution from the melting ice. And it aerates the shot into a light, foamy layer on top. That foam is what makes it feel different from just pouring espresso over ice.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Starbucks tops it with oat milk or cream. The Italian version usually does not. Both are good. The version you make at home is yours to adjust.
            </p>
          </div>
        </section>

        {/* STARBUCKS VERSION */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Copycat Recipe
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-12">
              The Starbucks version at home.
            </h2>
            <div className="grid lg:grid-cols-2 gap-5">
              <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.7rem' }} className="uppercase font-semibold mb-4">What You Need</div>
                <ul className="space-y-3" style={{ borderTop: '1px solid oklch(0.27 0.025 30)', paddingTop: '0.75rem' }}>
                  {STARBUCKS_NEEDS.map((n) => (
                    <li key={n} style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm flex gap-3 items-start">
                      <span style={{ color: 'oklch(0.55 0.17 40)' }} className="flex-shrink-0">→</span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.7rem' }} className="uppercase font-semibold mb-4">Steps</div>
                <ol className="space-y-3" style={{ borderTop: '1px solid oklch(0.27 0.025 30)', paddingTop: '0.75rem' }}>
                  {STARBUCKS_STEPS.map((s, i) => (
                    <li key={i} style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm flex gap-3 items-start">
                      <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="font-bold flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* VARIATIONS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Variations
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Four versions worth knowing.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Same technique, different sweeteners and toppings. Try the classic first, then branch out.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {VARIATIONS.map((v) => (
                <div key={v.name} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold mb-3">{v.name}</h3>
                  <p style={{ color: 'oklch(0.72 0.14 70)' }} className="text-sm font-medium mb-3 leading-relaxed">{v.recipe}</p>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm leading-relaxed">{v.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAL-IN TIPS */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Technique
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Dialing in your shaken espresso.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              The ratio and technique matter. These four points are where most home baristas go wrong.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {DIAL_IN_TIPS.map((t) => (
                <div key={t.tip} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-3 md:gap-12 py-7">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold">{t.tip}</h3>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RATIO TABLE */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Ratio Reference
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Shot ratio reference.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
              Shaken espresso starts with a standard pull. The shaking adds dilution on top of your yield, so your base shot still needs to be right.
            </p>

            <div className="grid grid-cols-[0.6fr_0.6fr_0.7fr_0.8fr_2fr] gap-4 px-1 pb-3" style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}>
              {['Dose', 'Yield', 'Ratio', 'Style', 'Result when shaken'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold">{h}</span>
              ))}
            </div>
            {RATIO_ROWS.map((r) => (
              <div key={r.ratio} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[0.6fr_0.6fr_0.7fr_0.8fr_2fr] gap-4 px-1 py-5 items-center">
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-lg font-bold">{r.dose}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-lg font-bold">{r.yield}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', fontVariantNumeric: 'tabular-nums' }} className="text-lg font-bold">{r.ratio}</span>
                <span style={{ color: 'oklch(0.93 0.015 50)' }} className="text-sm font-medium">{r.label}</span>
                <span style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm">{r.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'oklch(0.10 0.018 30)', borderTop: '1px solid oklch(0.27 0.025 30)' }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Track Your Pulls
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Log your pulls. Nail the ratio.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              A shaken espresso only tastes the same every time if your shot is consistent. DialInLog tracks dose, yield, time, and tasting notes so you can build a repeatable recipe for every bag you open.
            </p>
            <Link href="/free-download" className="btn-primary press-feedback">
              Download the Free Ratio Guide
            </Link>
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-5">Free. No signup needed.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
