import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espresso Recipes — Drinks to Make With Your Espresso Machine | DialInLog',
  description:
    'Espresso recipes for every skill level — from a classic double shot to lattes, cortados, flat whites, and shaken espresso. Pull better shots with DialInLog.',
};

const CLASSIC_DRINKS = [
  { name: 'Single espresso', dose: '9-10g', yield: '18-20g', ratio: '1:2', time: '25-30s', notes: 'One shot, about 20ml in the cup. Strong and small.' },
  { name: 'Double espresso', dose: '18g', yield: '36g', ratio: '1:2', time: '25-30s', notes: 'Two shots. The standard for most drinks.' },
  { name: 'Ristretto', dose: '18g', yield: '18-27g', ratio: '1:1 to 1:1.5', time: '25-35s', notes: 'Short and sweet. More concentrated than espresso.' },
  { name: 'Lungo', dose: '18g', yield: '54-72g', ratio: '1:3 to 1:4', time: '35-45s', notes: 'Longer pull, more bitter. Water goes through the puck, not added after.' },
];

const MILK_DRINKS = [
  { name: 'Latte', espresso: '2 shots (36g)', milk: '150-200ml', total: '200-250ml', texture: 'Light microfoam', notes: 'The most milk of any common espresso drink. Smooth and mild. The ratio is roughly 1 part espresso to 4-6 parts milk.' },
  { name: 'Flat white', espresso: '2 ristretto', milk: '100ml', total: '~150ml', texture: 'Velvety microfoam', notes: 'Smaller than a latte with more espresso per sip. Usually made with ristretto for a sweeter, more intense base.' },
  { name: 'Cappuccino', espresso: '1-2 shots', milk: '60ml + 60ml foam', total: '150-180ml', texture: 'Thick, stiff foam', notes: 'Equal parts espresso, steamed milk, and foam. The foam is thicker than a latte. Dry cappuccino has more foam. Wet has more steamed milk.' },
  { name: 'Cortado', espresso: '2 shots (36g)', milk: '36ml (1:1)', total: '60-70ml', texture: 'Light foam', notes: 'Spanish origin. Equal parts espresso and milk. Small. Strong but cut by just enough milk to reduce acidity.' },
];

const ICED_DRINKS = [
  { name: 'Iced latte', recipe: '2 shots espresso over ice, then 150-200ml cold milk. Stir gently. No foam needed.', tip: 'Pull the shots directly over the ice. Chills fast and reduces bitterness.' },
  { name: 'Iced shaken espresso', recipe: '2 shots + 3 ice cubes + optional sweetener in a shaker. Shake 10s. Pour over fresh ice.', tip: 'See the full shaken espresso guide for variations and ratio tips.', link: '/shaken-espresso', linkText: 'Full shaken espresso guide' },
  { name: 'Iced cortado', recipe: '2 shots over ice, then equal amount of cold milk. About 60-70ml total.', tip: 'Strong. Cold. Small. Good for people who want coffee flavor without a big drink.' },
];

const SPECIALTY_DRINKS = [
  { name: 'Affogato', recipe: '1-2 shots hot espresso poured directly over 1 scoop of vanilla ice cream. Serve immediately.', notes: 'Dessert and coffee in one. The contrast between hot espresso and cold cream is the whole point.' },
  { name: 'Espresso tonic', recipe: '2 shots espresso, 150ml tonic water over ice. Pour espresso over the tonic slowly. No stirring.', notes: 'Bitter and bright. The tonic and espresso flavors stay separate at first, then blend as you drink.' },
  { name: 'Cold foam latte', recipe: '2 shots over ice, 150ml cold milk, 2 tbsp whipped cold foam on top.', notes: 'Cold foam is made by frothing cold milk with a handheld frother for 30 seconds. Sits on top of the drink.' },
];

export default function EspressoRecipesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Recipes · Ratios · Techniques
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Espresso recipes.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Once you dial in a good shot, the rest is just ratios. Here are the recipes for every common espresso drink, with the numbers you need to make them at home.
            </p>
          </div>
        </section>

        {/* CLASSIC SHOTS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Classic Shots
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Four shot types. Same beans.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
              Same machine, same beans. The difference is how much water you pull through the puck.
            </p>

            {/* Header */}
            <div className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.9fr_0.6fr] gap-4 px-1 pb-3" style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}>
              {['Drink', 'Dose', 'Yield', 'Ratio', 'Time'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold">{h}</span>
              ))}
            </div>
            {CLASSIC_DRINKS.map((row) => (
              <div key={row.name} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[1.4fr_0.6fr_0.7fr_0.9fr_0.6fr] gap-4 px-1 py-6 items-start">
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-xl font-bold mb-2">{row.name}</div>
                  <p style={{ color: 'oklch(0.62 0.015 50)' }} className="text-sm leading-relaxed">{row.notes}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.dose}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.yield}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.ratio}</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums' }} className="text-xl font-bold">{row.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MILK DRINKS */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Milk Drinks
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Same espresso. Different milk.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Different amount and texture of milk. Each drink is a different ratio and a different way of steaming.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {MILK_DRINKS.map((d) => (
                <div key={d.name} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-xl font-bold mb-4">{d.name}</h3>
                  <div className="space-y-2 mb-4" style={{ borderTop: '1px solid oklch(0.27 0.025 30)', paddingTop: '0.75rem' }}>
                    {[['Espresso', d.espresso], ['Milk', d.milk], ['Total', d.total], ['Foam', d.texture]].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.62 0.015 50)', letterSpacing: '0.12em', fontSize: '0.7rem' }} className="uppercase font-semibold">{k}</span>
                        <span style={{ color: k === 'Foam' ? 'oklch(0.72 0.14 70)' : 'oklch(0.93 0.015 50)', fontVariantNumeric: 'tabular-nums' }} className="font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm leading-relaxed">{d.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ICED DRINKS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Iced Drinks
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Cold versions of the same recipes.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Two exceptions: shaken espresso has its own technique, and you skip milk foam for most iced drinks.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {ICED_DRINKS.map((d) => (
                <div key={d.name} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-3 md:gap-12 py-7">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-xl font-bold">{d.name}</h3>
                  <div>
                    <p style={{ color: 'oklch(0.93 0.015 50)' }} className="text-base leading-relaxed mb-2">{d.recipe}</p>
                    <p style={{ color: 'oklch(0.62 0.015 50)' }} className="text-sm italic mb-2">{d.tip}</p>
                    {d.link && d.linkText && (
                      <Link href={d.link} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.12em', fontSize: '0.72rem' }} className="uppercase font-semibold hover:opacity-80 transition-opacity">
                        {d.linkText} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALTY DRINKS */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Specialty
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Three drinks worth trying.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Once you have your base shot dialed in.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {SPECIALTY_DRINKS.map((d) => (
                <div key={d.name} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold mb-3">{d.name}</h3>
                  <p style={{ color: 'oklch(0.72 0.14 70)' }} className="text-sm font-medium mb-3 leading-relaxed">{d.recipe}</p>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm leading-relaxed">{d.notes}</p>
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
              Track Every Pull
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Log every shot. Build every recipe.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              Every recipe on this page starts with a dialed-in shot. DialInLog tracks your dose, yield, time, and notes so you can build a repeatable recipe for every drink you make.
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
