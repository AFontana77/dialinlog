import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Droplets, Thermometer, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espresso With Milk — Latte, Flat White, Cappuccino & More | DialInLog',
  description:
    'Espresso with milk drinks explained. Latte, flat white, cappuccino, cortado, and macchiato — ratios, sizes, and how to make each at home.',
};

const MILK_DRINKS = [
  {
    drink: 'Macchiato',
    espresso: '1-2 shots',
    milk: '1-2 tbsp steamed milk',
    total: '30-40ml',
    texture: 'Barely any milk',
    notes: 'Italian for "marked." The milk just marks the espresso. Tiny amount of steamed milk on top. Closest drink to a straight shot.',
  },
  {
    drink: 'Cortado',
    espresso: '2 shots (36g)',
    milk: '36ml (equal to espresso)',
    total: '60-70ml',
    texture: 'Light foam',
    notes: 'Equal parts espresso and milk. Small and strong. The milk cuts the acidity without softening the flavor much.',
  },
  {
    drink: 'Flat white',
    espresso: '2 ristretto shots',
    milk: '100ml',
    total: 'About 150ml',
    texture: 'Velvety, pourable microfoam',
    notes: 'Stronger than a latte, smaller than a cappuccino. Made with ristretto for more intensity. Milk is smooth and barely foamed.',
  },
  {
    drink: 'Cappuccino',
    espresso: '1-2 shots',
    milk: '60ml steamed + 60ml foam',
    total: '150-180ml',
    texture: 'Thick, stiff foam',
    notes: 'Equal thirds: espresso, steamed milk, foam. The foam is thick and holds its shape. Dry cappuccino has more foam. Wet has more milk.',
  },
  {
    drink: 'Latte',
    espresso: '1-2 shots',
    milk: '150-200ml',
    total: '200-250ml',
    texture: 'Light microfoam on top',
    notes: 'Most milk of any common espresso drink. Mild, smooth, and large. The espresso comes through but the milk is the main flavor.',
  },
  {
    drink: 'Americano',
    espresso: '2 shots',
    milk: 'No milk — hot water',
    total: '150-200ml total',
    texture: 'No foam',
    notes: 'Not a milk drink — included for contrast. Water added after the shot, not during. Larger volume, lower intensity than straight espresso.',
  },
];

const STEAMING_TIPS = [
  {
    tip: 'Steam to 60-65°C (140-150°F)',
    body: 'Hotter than 70°C and the milk proteins break down. The sweetness disappears and you get a flat, slightly scorched taste. Use a thermometer until you can feel the temperature by touch.',
  },
  {
    tip: 'Texture depends on the drink',
    body: 'Latte foam is light and pourable. Cappuccino foam is thick and holds a peak. The difference comes from how long you let air in at the start. Cappuccino needs 3-4 seconds of surface aerating. Latte needs 1-2.',
  },
  {
    tip: 'Whole milk steams easiest',
    body: 'More fat means more stable foam. Oat milk foams reasonably well with a good barista blend. Almond milk is harder to steam into anything smooth. If you are learning, start with whole milk.',
  },
  {
    tip: 'Purge the steam wand before and after',
    body: 'Old milk residue in the wand burns and tastes sour. Purge the wand before you steam (let steam blow for 2 seconds) and wipe it clean immediately after every use.',
  },
];

export default function EspressoWithMilkPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-amber-100 rounded-2xl items-center justify-center mb-6">
              <Droplets className="text-amber-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Espresso with milk
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Same espresso. Different amounts of milk and different foam texture. That is how you get from a macchiato to a latte. Here are the ratios and techniques for every common milk drink.
            </p>
          </div>
        </section>

        {/* Why the ratio matters */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the ratio changes the drink</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A cortado and a latte use the same espresso shot. One is 60ml, the other is 250ml. The espresso flavor in a cortado is strong and forward. In a latte, the milk is the main event and the espresso is in the background.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Foam texture changes things too. A cappuccino has stiff foam that sits on top and stays dry. A flat white has velvety microfoam that blends into the milk. Same amount of milk by volume, but completely different texture in the cup.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The table below shows the ratios and textures for six common milk drinks, from smallest to largest.
            </p>
          </div>
        </section>

        {/* Drink table */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Milk drink reference table</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-200 bg-white">
                    <th className="text-left py-3 pr-4 pl-3 font-semibold text-gray-700">Drink</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Espresso</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Milk</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Total</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Foam</th>
                  </tr>
                </thead>
                <tbody>
                  {MILK_DRINKS.map(({ drink, espresso, milk, total, texture }) => (
                    <tr key={drink} className="border-b border-gray-100 hover:bg-white transition-colors">
                      <td className="py-4 pr-4 pl-3 font-bold text-gray-900">{drink}</td>
                      <td className="py-4 pr-4 text-gray-700">{espresso}</td>
                      <td className="py-4 pr-4 text-gray-700">{milk}</td>
                      <td className="py-4 pr-4 text-gray-700">{total}</td>
                      <td className="py-4 text-amber-700 font-medium text-xs">{texture}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400">
              All espresso shots assume 18g dose / 36g yield at 1:2 ratio, except flat white (uses ristretto at 1:1.5).
            </p>
          </div>
        </section>

        {/* Individual drink notes */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What makes each drink different</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {MILK_DRINKS.filter(d => d.drink !== 'Americano').map(({ drink, notes }) => (
                <div key={drink} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{drink}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{notes}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Americano (no milk)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{MILK_DRINKS.find(d => d.drink === 'Americano')?.notes}</p>
            </div>
          </div>
        </section>

        {/* Steaming tips */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Thermometer className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">How to steam milk properly</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Good espresso with badly steamed milk makes a bad drink. These four points cover the most common problems.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {STEAMING_TIPS.map(({ tip, body }) => (
                <div key={tip} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{tip}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strength guide */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Picking the right drink for your taste</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you like strong coffee with very little milk, start with a cortado. If you prefer a milder drink with more volume, a latte is the right direction. The spectrum below goes from most espresso-forward to most milk-forward.
            </p>
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <div className="flex justify-between text-xs font-semibold text-gray-500 mb-3">
                <span>More espresso</span>
                <span>More milk</span>
              </div>
              <div className="relative h-3 bg-gradient-to-r from-amber-700 to-amber-100 rounded-full mb-4"></div>
              <div className="flex justify-between text-xs text-gray-700 font-medium">
                <span>Macchiato</span>
                <span>Cortado</span>
                <span>Flat white</span>
                <span>Cappuccino</span>
                <span>Latte</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dial in the shot. The milk drink follows.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every drink on this page starts with a well-pulled espresso. DialInLog tracks your dose, yield, and time so you can build a repeatable shot before you add a drop of milk.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-800 transition-colors min-h-[48px]"
            >
              Download the free ratio guide
            </Link>
            <p className="text-sm text-gray-400 mt-3">Free. No signup needed.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
