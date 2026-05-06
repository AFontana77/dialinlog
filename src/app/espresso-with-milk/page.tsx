import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espresso With Milk — Latte, Flat White, Cappuccino & More | DialInLog',
  description:
    'Espresso with milk drinks explained. Latte, flat white, cappuccino, cortado, and macchiato — ratios, sizes, and how to make each at home.',
};

const MILK_DRINKS = [
  { drink: 'Macchiato', espresso: '1-2 shots', milk: '1-2 tbsp', total: '30-40ml', texture: 'Barely any milk', notes: 'Italian for "marked." The milk just marks the espresso. Tiny amount of steamed milk on top. Closest drink to a straight shot.' },
  { drink: 'Cortado', espresso: '2 shots (36g)', milk: '36ml', total: '60-70ml', texture: 'Light foam', notes: 'Equal parts espresso and milk. Small and strong. The milk cuts the acidity without softening the flavor much.' },
  { drink: 'Flat white', espresso: '2 ristretto', milk: '100ml', total: '~150ml', texture: 'Velvety microfoam', notes: 'Stronger than a latte, smaller than a cappuccino. Made with ristretto for more intensity. Milk is smooth and barely foamed.' },
  { drink: 'Cappuccino', espresso: '1-2 shots', milk: '60ml + 60ml foam', total: '150-180ml', texture: 'Thick, stiff foam', notes: 'Equal thirds: espresso, steamed milk, foam. The foam is thick and holds its shape. Dry cappuccino has more foam. Wet has more milk.' },
  { drink: 'Latte', espresso: '1-2 shots', milk: '150-200ml', total: '200-250ml', texture: 'Light microfoam', notes: 'Most milk of any common espresso drink. Mild, smooth, and large. The espresso comes through but the milk is the main flavor.' },
  { drink: 'Americano', espresso: '2 shots', milk: 'Hot water', total: '150-200ml', texture: 'No foam', notes: 'Not a milk drink, included for contrast. Water added after the shot, not during. Larger volume, lower intensity than straight espresso.' },
];

const STEAMING_TIPS = [
  { tip: 'Steam to 60-65°C', body: 'Hotter than 70°C and the milk proteins break down. The sweetness disappears and you get a flat, slightly scorched taste. Use a thermometer until you can feel the temperature by touch.' },
  { tip: 'Texture depends on the drink', body: 'Latte foam is light and pourable. Cappuccino foam is thick and holds a peak. The difference comes from how long you let air in at the start. Cappuccino needs 3-4 seconds of surface aerating. Latte needs 1-2.' },
  { tip: 'Whole milk steams easiest', body: 'More fat means more stable foam. Oat milk foams reasonably well with a good barista blend. Almond milk is harder to steam into anything smooth. If you are learning, start with whole milk.' },
  { tip: 'Purge the steam wand', body: 'Old milk residue in the wand burns and tastes sour. Purge the wand before you steam (let steam blow for 2 seconds) and wipe it clean immediately after every use.' },
];

export default function EspressoWithMilkPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Milk Drinks · Ratios · Steaming
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Espresso with milk.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Same espresso. Different amounts of milk and different foam texture. That is how you get from a macchiato to a latte. Here are the ratios and techniques for every common milk drink.
            </p>
          </div>
        </section>

        {/* WHY RATIO */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Theory
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-8">
              Why the ratio changes the drink.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              A cortado and a latte use the same espresso shot. One is 60ml, the other is 250ml. The espresso flavor in a cortado is strong and forward. In a latte, the milk is the main event and the espresso is in the background.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-4 max-w-2xl">
              Foam texture changes things too. A cappuccino has stiff foam that sits on top and stays dry. A flat white has velvety microfoam that blends into the milk. Same amount of milk by volume, but completely different texture in the cup.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              The table below shows the ratios and textures for six common milk drinks, from smallest to largest.
            </p>
          </div>
        </section>

        {/* TABLE */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Reference Table
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-10">
              Six drinks. Smallest to largest.
            </h2>

            <div className="grid grid-cols-[1.2fr_1.1fr_1fr_0.9fr_1fr] gap-4 px-1 pb-3" style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }}>
              {['Drink', 'Espresso', 'Milk', 'Total', 'Foam'].map((h) => (
                <span key={h} style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.68rem' }} className="uppercase font-semibold">{h}</span>
              ))}
            </div>
            {MILK_DRINKS.map((row) => (
              <div key={row.drink} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[1.2fr_1.1fr_1fr_0.9fr_1fr] gap-4 px-1 py-5 items-center">
                <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold">{row.drink}</div>
                <span style={{ color: 'oklch(0.93 0.015 50)', fontVariantNumeric: 'tabular-nums' }} className="text-sm">{row.espresso}</span>
                <span style={{ color: 'oklch(0.93 0.015 50)', fontVariantNumeric: 'tabular-nums' }} className="text-sm">{row.milk}</span>
                <span style={{ color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums', fontFamily: 'var(--font-display)' }} className="text-sm font-bold">{row.total}</span>
                <span style={{ color: 'oklch(0.72 0.14 70)' }} className="text-xs font-medium">{row.texture}</span>
              </div>
            ))}
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-5">
              All espresso shots assume 18g dose / 36g yield at 1:2 ratio, except flat white (uses ristretto at 1:1.5).
            </p>
          </div>
        </section>

        {/* INDIVIDUAL NOTES */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Per Drink
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-12">
              What makes each drink different.
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {MILK_DRINKS.map((d) => (
                <div key={d.drink} style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-6">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold mb-3">{d.drink}</h3>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm leading-relaxed">{d.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEAMING */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Technique
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              How to steam milk properly.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-12">
              Good espresso with badly steamed milk makes a bad drink. These four points cover the most common problems.
            </p>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {STEAMING_TIPS.map((t) => (
                <div key={t.tip} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-1 md:grid-cols-[0.6fr_1fr] gap-3 md:gap-12 py-7">
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-lg font-bold">{t.tip}</h3>
                  <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECTRUM */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              Strength Spectrum
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Picking the right drink for your taste.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-10 max-w-2xl">
              If you like strong coffee with very little milk, start with a cortado. If you prefer a milder drink with more volume, a latte is the right direction. The spectrum below goes from most espresso-forward to most milk-forward.
            </p>
            <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-8">
              <div className="flex justify-between mb-4">
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.14em', fontSize: '0.7rem' }} className="uppercase font-semibold">More Espresso</span>
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.62 0.015 50)', letterSpacing: '0.14em', fontSize: '0.7rem' }} className="uppercase font-semibold">More Milk</span>
              </div>
              <div className="relative h-1 mb-6" style={{ background: 'oklch(0.27 0.025 30)' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '100%', background: 'oklch(0.55 0.17 40)', opacity: 0.3 }} />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {['Macchiato', 'Cortado', 'Flat white', 'Cappuccino', 'Latte'].map((d) => (
                  <span key={d} style={{ color: 'oklch(0.93 0.015 50)' }} className="text-xs font-medium text-center">{d}</span>
                ))}
              </div>
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
              Dial in the shot. The milk drink follows.
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              Every drink on this page starts with a well-pulled espresso. DialInLog tracks your dose, yield, and time so you can build a repeatable shot before you add a drop of milk.
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
