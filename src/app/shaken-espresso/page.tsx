import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Coffee, Thermometer, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shaken Espresso Recipe — How to Make It at Home | DialInLog',
  description:
    'How to make a shaken espresso at home. The Starbucks copycat recipe plus tips for getting the ratio right with your home espresso machine.',
};

const VARIATIONS = [
  {
    name: 'Classic shaken espresso',
    recipe: '2 shots (60ml), 3 ice cubes, classic syrup or simple syrup. Shake 10 sec. Pour over fresh ice. Add oat milk.',
    notes: 'The baseline. Good starting point before you start tweaking.',
  },
  {
    name: 'Vanilla shaken espresso',
    recipe: '2 shots, 3 ice cubes, 2 pumps vanilla syrup. Shake 10 sec. Pour over ice. Top with cold oat milk.',
    notes: 'Sweeter and a bit softer. The vanilla rounds out sharper shots.',
  },
  {
    name: 'Brown sugar oat shaken espresso',
    recipe: '2 shots, 1 tbsp brown sugar, pinch of cinnamon, 3 ice cubes. Shake 10 sec. Pour over ice. Top with oat milk.',
    notes: 'The one that went everywhere on social. The cinnamon does a lot of work here.',
  },
  {
    name: 'Iced shaken espresso (no milk)',
    recipe: '2 shots, 3 ice cubes. Shake 10 sec. Pour over fresh ice. No milk. Done.',
    notes: 'Clean and cold. Good when you want full espresso flavor without milk softening it.',
  },
];

const DIAL_IN_TIPS = [
  {
    tip: 'Shaken espresso forgives under-extraction',
    body: 'A shot that tastes too sour on its own often works fine shaken with ice and sweetener. The dilution and chill smooth the rough edges. Use this as a second chance for shots that missed the mark.',
  },
  {
    tip: 'Standard ratio still applies',
    body: 'Aim for 18g dose and 36g yield (1:2 ratio) in 25-30 seconds. The shaking adds dilution — about 10-15g of melt from the ice. Factor that in if you want a stronger drink: pull a 1:1.5 yield instead.',
  },
  {
    tip: 'Shake hard for 10 seconds',
    body: 'The shaking does three things: chills the espresso fast, adds a small amount of water from the ice, and aerates it into a light foam. Under-shaking leaves you with just cold espresso. Not the same thing.',
  },
  {
    tip: 'Fresh ice matters twice',
    body: 'Shake with 3-4 cubes, then pour over a fresh glass of ice. The shaking ice melts significantly. Starting over with fresh ice keeps the drink cold without more dilution.',
  },
];

export default function ShakenEspressoPage() {
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
              Shaken espresso recipe
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-4">
              Two shots. Ice. A shaker. Ten seconds. That is the whole method. Here is how to get it right at home and how to track your ratios so it tastes the same every time.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-full">
              <Thermometer size={14} /> Shaken espresso searches: 8,100/month
            </div>
          </div>
        </section>

        {/* What is it */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What a shaken espresso actually is</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A shaken espresso is espresso shaken with ice (and usually a bit of sweetener) before pouring over a glass of fresh ice. Starbucks made it famous, but the technique is old. Italian bartenders have been shaking espresso with sugar for years. They call it a&nbsp;<em>shakerato</em>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The shaking does something important. It chills the espresso in about 10 seconds. It adds a small amount of dilution from the melting ice. And it aerates the shot into a light, foamy layer on top. That foam is what makes it feel different from just pouring espresso over ice.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Starbucks tops it with oat milk or cream. The Italian version usually does not. Both are good. The version you make at home is yours to adjust.
            </p>
          </div>
        </section>

        {/* Starbucks version */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Starbucks version at home</h2>
            <div className="bg-white rounded-xl border border-amber-100 p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">What you need</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} /><span>2 espresso shots (about 60ml / 2 oz yield)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} /><span>3-4 ice cubes for shaking</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} /><span>1-2 pumps simple syrup or classic syrup (skip if you go unsweetened)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} /><span>A cocktail shaker or mason jar with a lid</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} /><span>Fresh ice for the serving glass</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} /><span>2-3 oz oat milk (or any milk)</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-amber-100 p-6">
              <h3 className="font-bold text-gray-900 mb-4">Steps</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="font-bold text-amber-700 flex-shrink-0">1.</span><span>Pull 2 shots into your shaker. Let them sit 15 seconds to cool slightly.</span></li>
                <li className="flex gap-3"><span className="font-bold text-amber-700 flex-shrink-0">2.</span><span>Add syrup if using. Then add 3-4 ice cubes.</span></li>
                <li className="flex gap-3"><span className="font-bold text-amber-700 flex-shrink-0">3.</span><span>Seal the shaker. Shake hard for 10 seconds.</span></li>
                <li className="flex gap-3"><span className="font-bold text-amber-700 flex-shrink-0">4.</span><span>Fill a glass with fresh ice. Pour the shaken espresso over it. The foam will settle on top.</span></li>
                <li className="flex gap-3"><span className="font-bold text-amber-700 flex-shrink-0">5.</span><span>Add oat milk or cream. Stir lightly or let it layer. Both work.</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Four versions worth knowing</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Same technique, different sweeteners and toppings. Try the classic first, then branch out.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {VARIATIONS.map((v) => (
                <div key={v.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{v.name}</h3>
                  <p className="text-sm text-amber-700 font-medium mb-2">{v.recipe}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dial-in tips */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Dialing in your shaken espresso</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              The ratio and technique matter. These four points are where most home baristas go wrong.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {DIAL_IN_TIPS.map(({ tip, body }) => (
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

        {/* Ratio table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shot ratio reference</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Shaken espresso starts with a standard pull. The shaking adds dilution on top of your yield, so your base shot still needs to be right.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Dose (in)</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Yield (out)</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Ratio</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Result when shaken</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 font-medium text-gray-900">18g</td>
                    <td className="py-3 pr-4 text-gray-700">27g</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">1:1.5 (ristretto)</td>
                    <td className="py-3 text-gray-600 text-xs">Intense, sweet. Good if you prefer a stronger drink after dilution.</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 font-medium text-gray-900">18g</td>
                    <td className="py-3 pr-4 text-gray-700">36g</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">1:2 (standard)</td>
                    <td className="py-3 text-gray-600 text-xs">Balanced after shaking. Best starting point for most beans.</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 font-medium text-gray-900">18g</td>
                    <td className="py-3 pr-4 text-gray-700">45g</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">1:2.5 (lungo-ish)</td>
                    <td className="py-3 text-gray-600 text-xs">Milder, brighter. Add no milk and drink it straight over ice.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log your pulls. Nail the ratio.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A shaken espresso only tastes the same every time if your shot is consistent. DialInLog tracks dose, yield, time, and tasting notes so you can build a repeatable recipe for every bag you open.
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
