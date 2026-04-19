import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { BarChart2, CheckCircle, AlertCircle } from 'lucide-react';
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
    time: '25-35 sec',
    notes: 'Sweet, thick, intense. Less bitter than a standard shot. Good for milk drinks where you want a strong espresso flavor.',
  },
  {
    type: 'Espresso',
    dose: '18g',
    yield: '36g',
    ratio: '1:2',
    time: '25-30 sec',
    notes: 'The standard. Balanced sweetness, body, and some brightness. Good starting point for any new bag of beans.',
  },
  {
    type: 'Lungo',
    dose: '18g',
    yield: '54-72g',
    ratio: '1:3 to 1:4',
    time: '35-45 sec',
    notes: 'Longer pull, more bitter, more volume. Not an Americano — water comes through the puck. Some roasts taste better this way.',
  },
];

const EXTRACTION_SIGNS = [
  {
    symptom: 'Sour, sharp, thin',
    cause: 'Under-extracted',
    icon: 'under',
    fixes: ['Grind finer', 'Increase dose slightly', 'Raise brew temp by 1-2°C'],
  },
  {
    symptom: 'Bitter, harsh, dry finish',
    cause: 'Over-extracted',
    icon: 'over',
    fixes: ['Grind coarser', 'Reduce dose slightly', 'Lower brew temp by 1-2°C'],
  },
  {
    symptom: 'Shot under 20 seconds',
    cause: 'Too coarse',
    icon: 'under',
    fixes: ['Go finer by one click', 'Check puck prep and distribution'],
  },
  {
    symptom: 'Shot over 40 seconds',
    cause: 'Too fine',
    icon: 'over',
    fixes: ['Go coarser by one click', 'Check for clumping in the portafilter'],
  },
];

const DIAL_IN_STEPS = [
  {
    step: '1',
    title: 'Set your target',
    body: 'Start at 18g dose, 36g yield, 25-30 seconds. These numbers apply to most blends and medium-dark single origins. Write them down before you pull.',
  },
  {
    step: '2',
    title: 'Pull the shot',
    body: 'Use a scale. Weigh the dose. Time the shot. Weigh the yield. No guessing. Three numbers.',
  },
  {
    step: '3',
    title: 'Taste it',
    body: 'Taste before you look at the numbers. Sour means under-extracted. Bitter means over-extracted. Balanced is the goal.',
  },
  {
    step: '4',
    title: 'Adjust one thing',
    body: 'If under: grind finer by one click. If over: grind coarser by one click. Never change dose and grind in the same shot.',
  },
  {
    step: '5',
    title: 'Repeat',
    body: 'Pull another shot. Taste. Log the result. Most beans dial in within 3-5 shots from your starting point.',
  },
];

export default function EspressoChartPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-amber-100 rounded-2xl items-center justify-center mb-6">
              <BarChart2 className="text-amber-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Espresso chart: dose, yield, ratio, time
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              The numbers behind ristretto, espresso, and lungo. Use this as a reference when dialing in a new bag or troubleshooting a shot that missed.
            </p>
          </div>
        </section>

        {/* Shot type table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shot type reference chart</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              All three shot types use the same dose. What changes is how much water you pull through the puck. That changes flavor, volume, and body.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-200 bg-amber-50">
                    <th className="text-left py-3 pr-4 pl-3 font-semibold text-gray-700">Shot type</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Dose</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Yield</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Ratio</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Time</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Flavor profile</th>
                  </tr>
                </thead>
                <tbody>
                  {SHOT_TYPES.map(({ type, dose, yield: yld, ratio, time, notes }) => (
                    <tr key={type} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 pr-4 pl-3 font-bold text-gray-900">{type}</td>
                      <td className="py-4 pr-4 font-medium text-gray-700">{dose}</td>
                      <td className="py-4 pr-4 text-gray-700">{yld}</td>
                      <td className="py-4 pr-4 text-amber-700 font-semibold">{ratio}</td>
                      <td className="py-4 pr-4 text-gray-700">{time}</td>
                      <td className="py-4 text-gray-600 text-xs leading-relaxed max-w-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              These targets assume 9 bar pressure, 90-96°C (194-205°F) water temp, and 18g dose as a baseline. Adjust for your machine and beans.
            </p>
          </div>
        </section>

        {/* Key variables */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">The variables that matter</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Four numbers control every espresso shot. Know what each one does.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Pressure: 9 bar</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  9 bar is the standard for most home and commercial machines. Some prosumer machines let you adjust this. Most home baristas do not need to change it. If your machine holds 9 bar, the other variables matter more.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Water temp: 90-96°C (194-205°F)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Lighter roasts need more heat. Start at 93°C (200°F) for medium roasts. Go up to 95-96°C for light roasts. Drop to 90-91°C for very dark roasts that run bitter easily. Change temp before grind when flavor is close but not right.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Dose: how much coffee you use</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  18g is a common single dose for a double shot. Most home portafilters fit 14-21g. Pick a dose and keep it the same while dialing in. Changing dose changes everything else. Lock it in first.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-amber-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Grind size: your main dial</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Finer grind slows the shot. Coarser grind speeds it up. Grind size is the variable you adjust most often. Change by one click at a time. One click per shot until you hit the target time and flavor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extraction signs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What the shot is telling you</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Taste first. Then look at the time. The flavor tells you what went wrong.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {EXTRACTION_SIGNS.map(({ symptom, cause, icon, fixes }) => (
                <div key={symptom} className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle
                      className={icon === 'under' ? 'text-blue-500' : 'text-red-500'}
                      size={16}
                    />
                    <span className="font-bold text-gray-900">{symptom}</span>
                  </div>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-3">{cause}</p>
                  <ul className="space-y-1">
                    {fixes.map((fix) => (
                      <li key={fix} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={14} />
                        {fix}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dial-in guide */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to dial in using this chart</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Dialing in is just a feedback loop. You pull, taste, adjust, and repeat. Five steps is all it takes.
            </p>
            <div className="space-y-4">
              {DIAL_IN_STEPS.map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-amber-700">{step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Keep this chart in your pocket.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The free DialInLog ratio guide has this chart plus a shot log template. Download it and log every pull until your recipe is locked in.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-800 transition-colors min-h-[48px]"
            >
              Download the free espresso chart
            </Link>
            <p className="text-sm text-gray-400 mt-3">Free PDF. No signup needed.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
