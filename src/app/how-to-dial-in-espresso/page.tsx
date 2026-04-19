import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Target, AlertCircle, CheckCircle, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Dial In Espresso — Step-by-Step Guide | DialInLog',
  description:
    'How to dial in espresso at home. Set your dose and yield target, adjust grind size, and taste your way to a perfect pull.',
};

const STEPS = [
  {
    step: '1',
    title: 'Pick your target',
    body: '18g in, 36g out, 25-30 seconds. That is a 1:2 ratio. Write it down before you start. It gives you three numbers to compare against after every shot.',
  },
  {
    step: '2',
    title: 'Pull a shot',
    body: 'Weigh the dose on a scale before it goes in the portafilter. Start the timer when you start the pump. Stop and weigh the yield when you hit 36g or when the shot looks done. Write all three numbers down.',
  },
  {
    step: '3',
    title: 'Compare the numbers',
    body: 'Check yield first. If you hit 36g in 25-30 seconds, the ratio and time are both good. If the shot ran in 18 seconds, your grind is too coarse. If it took 45 seconds, your grind is too fine.',
  },
  {
    step: '4',
    title: 'Taste it',
    body: 'Taste the shot before you decide what to change. Sour means under-extracted. Bitter means over-extracted. Balanced sweetness with some brightness is the target. The taste matters more than the time.',
  },
  {
    step: '5',
    title: 'Adjust one thing',
    body: 'Under-extracted: grind finer by one click. Over-extracted: grind coarser by one click. One click. One change. Pull again. This is the whole process.',
  },
  {
    step: '6',
    title: 'Repeat until it tastes right',
    body: 'Most beans dial in within 3-6 shots from a reasonable starting grind. Once it tastes good and hits the ratio, your grind setting is your recipe.',
  },
];

const MISTAKES = [
  {
    mistake: 'Changing dose and grind at the same time',
    fix: 'Change one variable per shot. If you adjust both, you will not know which one fixed the problem.',
  },
  {
    mistake: 'Not weighing the dose',
    fix: 'Even a 1g variation in dose changes the extraction significantly. Weigh every time.',
  },
  {
    mistake: 'Comparing shots from different beans',
    fix: 'Every bag dials in differently. Start fresh when you open a new bag. Your old grind setting is just a starting point.',
  },
  {
    mistake: 'Pulling shots from a brand-new bag',
    fix: 'Beans off-roast (under 5-7 days) are gassy. Shots channel and yield varies. Wait until day 7-10 post-roast for a stable dial-in.',
  },
  {
    mistake: 'Dialing in from memory',
    fix: 'You will not remember dose, yield, and time from three shots ago without writing them down. Log every pull.',
  },
];

const WHEN_TO_REGRIND = [
  {
    trigger: 'New bag of beans',
    detail: 'Every bag is different. Same roaster, different lot, different roast date. Start at your last grind setting but expect 2-4 adjustment shots.',
  },
  {
    trigger: 'Temperature changed significantly',
    detail: 'Grinders expand in heat and contract in cold. If your kitchen temperature shifted 10+ degrees, your grind setting shifted too.',
  },
  {
    trigger: 'Beans are more than 4 weeks past roast',
    detail: 'Older beans lose CO2 and compress differently. Shots often run faster. Go slightly finer when your bag has been open for a month.',
  },
  {
    trigger: 'You cleaned or disassembled the grinder',
    detail: 'Reassembling a grinder can shift the burr alignment slightly. Pull two test shots and check the time before trusting the old setting.',
  },
];

export default function HowToDialInEspressoPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-amber-100 rounded-2xl items-center justify-center mb-6">
              <Target className="text-amber-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How to dial in espresso
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
              Dialing in means adjusting your grind until the shot tastes right and hits the target ratio. It is a feedback loop. You pull, taste, adjust, and repeat until the shot is good.
            </p>
          </div>
        </section>

        {/* What dialing in means */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What dialing in actually means</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When you dial in espresso, you are finding the right grind setting for a specific bag of beans on a specific machine. The goal is a repeatable recipe: 18g in, 36g out, 25-30 seconds, tastes balanced.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The grind is your main control. Finer slows the shot and increases extraction. Coarser speeds it up and decreases extraction. Everything else (dose, water temp, pressure) stays fixed while you adjust grind.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once you find the right grind for a bag, write it down. That is your recipe. You do not need to re-dial every morning. You dial in once per bag and then just pull shots.
            </p>
          </div>
        </section>

        {/* Step by step */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Six steps to a dialed-in shot</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Follow these in order. Do not skip the tasting step.
            </p>
            <div className="space-y-4">
              {STEPS.map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 p-5 rounded-xl bg-white border border-amber-100">
                  <div className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">{step}</span>
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

        {/* Quick reference */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick reference: taste-to-adjustment</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-amber-200 bg-amber-50">
                    <th className="text-left py-3 pr-4 pl-3 font-semibold text-gray-700">What it tastes like</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Problem</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Fix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 pl-3 font-medium text-gray-900">Sour, sharp, thin</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">Under-extracted</td>
                    <td className="py-3 text-gray-600 text-xs">Grind finer by one click</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 pl-3 font-medium text-gray-900">Bitter, harsh, dry</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">Over-extracted</td>
                    <td className="py-3 text-gray-600 text-xs">Grind coarser by one click</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 pl-3 font-medium text-gray-900">Shot in under 20 sec</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">Too coarse</td>
                    <td className="py-3 text-gray-600 text-xs">Grind finer until 25+ sec</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 pl-3 font-medium text-gray-900">Shot takes 40+ sec</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">Too fine</td>
                    <td className="py-3 text-gray-600 text-xs">Grind coarser until under 35 sec</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 pr-4 pl-3 font-medium text-gray-900">Right time, still tastes off</td>
                    <td className="py-3 pr-4 text-amber-700 font-medium text-xs">Temperature</td>
                    <td className="py-3 text-gray-600 text-xs">Adjust brew temp 1-2°C up or down</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Five mistakes that waste shots</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {MISTAKES.map(({ mistake, fix }) => (
                <div key={mistake} className="rounded-xl bg-white border border-gray-100 p-6">
                  <p className="font-semibold text-gray-900 mb-2">{mistake}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to re-dial */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">When to re-dial in</h2>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Once you find your grind setting, it holds for most of the bag. These four situations mean it is time to adjust again.
            </p>
            <div className="space-y-4">
              {WHEN_TO_REGRIND.map(({ trigger, detail }) => (
                <div key={trigger} className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{trigger}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shot log section */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="text-amber-700" size={22} />
              <h2 className="text-2xl font-bold text-gray-900">Why you need a shot log</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              You cannot dial in from memory. After three shots, you will not remember whether shot two tasted sour or shot three ran at 22 seconds. The numbers blur together.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Writing dose, yield, time, and a tasting note for each shot gives you a record you can actually use. You see the pattern. You find the grind setting that works. And when you open a new bag, you have a reference point to start from.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That is what DialInLog is for. Log every shot during dial-in. Save the recipe that works. Come back to it every morning without pulling calibration shots.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Start logging. Stop guessing.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The free DialInLog download includes a shot log template you can use today, before you touch the app.
            </p>
            <Link
              href="/free-download"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-800 transition-colors min-h-[48px]"
            >
              Download the free shot log
            </Link>
            <p className="text-sm text-gray-400 mt-3">Free PDF. No email required.</p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
