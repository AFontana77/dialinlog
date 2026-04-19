import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Coffee, Droplets, Snowflake, Star } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Espresso Recipes — Drinks to Make With Your Espresso Machine | DialInLog',
  description:
    'Espresso recipes for every skill level — from a classic double shot to lattes, cortados, flat whites, and shaken espresso. Pull better shots with DialInLog.',
};

const CLASSIC_DRINKS = [
  {
    name: 'Single espresso',
    dose: '9-10g',
    yield: '18-20g',
    ratio: '1:2',
    time: '25-30 sec',
    notes: 'One shot, about 20ml in the cup. Strong and small.',
  },
  {
    name: 'Double espresso',
    dose: '18g',
    yield: '36g',
    ratio: '1:2',
    time: '25-30 sec',
    notes: 'Two shots. The standard for most drinks.',
  },
  {
    name: 'Ristretto',
    dose: '18g',
    yield: '18-27g',
    ratio: '1:1 to 1:1.5',
    time: '25-35 sec',
    notes: 'Short and sweet. More concentrated than espresso.',
  },
  {
    name: 'Lungo',
    dose: '18g',
    yield: '54-72g',
    ratio: '1:3 to 1:4',
    time: '35-45 sec',
    notes: 'Longer pull, more bitter. Water goes through the puck, not added after.',
  },
];

const MILK_DRINKS = [
  {
    name: 'Latte',
    espresso: '2 shots (36g yield)',
    milk: '150-200ml',
    total: '200-250ml',
    texture: 'Light microfoam',
    notes: 'The most milk of any common espresso drink. Smooth and mild. The ratio is roughly 1 part espresso to 4-6 parts milk.',
  },
  {
    name: 'Flat white',
    espresso: '2 ristretto shots',
    milk: '100ml',
    total: 'About 150ml',
    texture: 'Velvety microfoam',
    notes: 'Smaller than a latte with more espresso per sip. Usually made with ristretto for a sweeter, more intense base.',
  },
  {
    name: 'Cappuccino',
    espresso: '1-2 shots',
    milk: '60ml steamed + 60ml foam',
    total: '150-180ml',
    texture: 'Thick, stiff foam',
    notes: 'Equal parts espresso, steamed milk, and foam. The foam is thicker than a latte. Dry cappuccino has more foam. Wet has more steamed milk.',
  },
  {
    name: 'Cortado',
    espresso: '2 shots (36g)',
    milk: '36ml (1:1 ratio)',
    total: '60-70ml',
    texture: 'Light foam',
    notes: 'Spanish origin. Equal parts espresso and milk. Small. Strong but cut by just enough milk to reduce acidity.',
  },
];

const ICED_DRINKS = [
  {
    name: 'Iced latte',
    recipe: '2 shots espresso over ice, then 150-200ml cold milk. Stir gently. No foam needed.',
    tip: 'Pull the shots directly over the ice. Chills fast and reduces bitterness.',
  },
  {
    name: 'Iced shaken espresso',
    recipe: '2 shots + 3 ice cubes + optional sweetener in a shaker. Shake 10 sec. Pour over fresh ice.',
    tip: 'See the full shaken espresso guide for variations and ratio tips.',
    link: '/shaken-espresso',
    linkText: 'Full shaken espresso guide',
  },
  {
    name: 'Iced cortado',
    recipe: '2 shots over ice, then equal amount of cold milk. About 60-70ml total.',
    tip: 'Strong. Cold. Small. Good for people who want coffee flavor without a big drink.',
  },
];

const SPECIALTY_DRINKS = [
  {
    name: 'Affogato',
    recipe: '1-2 shots hot espresso poured directly over 1 scoop of vanilla ice cream. Serve immediately.',
    notes: 'Dessert and coffee in one. The contrast between hot espresso and cold cream is the whole point.',
  },
  {
    name: 'Espresso tonic',
    recipe: '2 shots espresso, 150ml tonic water over ice. Pour espresso over the tonic slowly. No stirring.',
    notes: 'Bitter and bright. The tonic and espresso flavors stay separate at first, then blend as you drink.',
  },
  {
    name: 'Cold foam latte',
    recipe: '2 shots over ice, 150ml cold milk, 2 tbsp whipped cold foam on top.',
    notes: 'Cold foam is made by frothing cold milk with a handheld frother for 30 seconds. Sits on top of the drink.',
  },
];

export default function EspressoRecipesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-amber-100 rounded-2xl items-center justify-center mb-6">
              <Coffee className="text-amber-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Espresso recipes
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Once you dial in a good shot, the rest is just ratios. Here are the recipes for every common espresso drink, with the numbers you need to make them at home.
            </p>
          </div>
        </section>

        {/* Classic drinks */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Classic shots</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Four shot types. Same machine, same beans. The difference is how much water you pull through the puck.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-200 bg-amber-50">
                    <th className="text-left py-3 pr-4 pl-3 font-semibold text-gray-700">Drink</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Dose</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Yield</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Ratio</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Time</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {CLASSIC_DRINKS.map(({ name, dose, yield: yld, ratio, time, notes }) => (
                    <tr key={name} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 pr-4 pl-3 font-bold text-gray-900">{name}</td>
                      <td className="py-4 pr-4 text-gray-700">{dose}</td>
                      <td className="py-4 pr-4 text-gray-700">{yld}</td>
                      <td className="py-4 pr-4 text-amber-700 font-semibold">{ratio}</td>
                      <td className="py-4 pr-4 text-gray-700">{time}</td>
                      <td className="py-4 text-gray-600 text-xs leading-relaxed">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Milk drinks */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Milk drinks</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Same espresso. Different amount and texture of milk. Each drink is a different ratio and a different way of steaming.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {MILK_DRINKS.map(({ name, espresso, milk, total, texture, notes }) => (
                <div key={name} className="bg-white rounded-xl border border-amber-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{name}</h3>
                  <div className="space-y-1 text-sm mb-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Espresso</span>
                      <span className="text-gray-700 font-medium">{espresso}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Milk</span>
                      <span className="text-gray-700 font-medium">{milk}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Total</span>
                      <span className="text-gray-700 font-medium">{total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Foam</span>
                      <span className="text-amber-700 font-medium">{texture}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Iced drinks */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Snowflake className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Iced drinks</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Iced espresso drinks are just cold versions of the same recipes above, with two exceptions: shaken espresso has its own technique, and you skip milk foam for most iced drinks.
            </p>
            <div className="space-y-4">
              {ICED_DRINKS.map(({ name, recipe, tip, link, linkText }) => (
                <div key={name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                  <p className="text-sm text-gray-700 mb-2">{recipe}</p>
                  <p className="text-sm text-gray-500 italic">{tip}</p>
                  {link && linkText && (
                    <Link href={link} className="text-sm text-amber-700 hover:underline mt-2 inline-block">
                      {linkText} &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Specialty drinks</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Three drinks worth trying once you have your base shot dialed in.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {SPECIALTY_DRINKS.map(({ name, recipe, notes }) => (
                <div key={name} className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">{recipe}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log every shot. Build every recipe.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every recipe on this page starts with a dialed-in shot. DialInLog tracks your dose, yield, time, and notes so you can build a repeatable recipe for every drink you make.
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
