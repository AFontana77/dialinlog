import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, ArrowRight, Download, CheckCircle, Coffee, Sliders } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "DialInLog — Espresso Roaster Reference + Shot Log App",
  description: "DialInLog has 176+ espresso roasters with tasting notes, recommended dose, ratio, and yield. Log every shot with dose, yield, time, and your rating. Dial in faster. Free on iPhone and Android.",
};

const FEATURES = [
  {
    icon: Database,
    title: "176+ roasters and blends",
    body: "Single-origins, seasonal blends, and flagship espresso offerings from specialty roasters across the US and internationally — with tasting notes, recommended dose and yield ratios, brew temperature guidance, and roast profile. Know what you're pulling before you grind.",
  },
  {
    icon: Sliders,
    title: "Shot log built for dialing in",
    body: "Log every shot with dose, yield, extraction time, temperature, and grind setting. Rate the result 1–5. Add notes on what you'd adjust. Build a record that shows your progression from bitter and watery to that one perfect pull.",
  },
  {
    icon: BarChart3,
    title: "Ratio and trend view",
    body: "See your dose-to-yield ratio across every shot. Spot your distribution — are most shots extracting in the 25–30 second window? Are you consistently under-extracting on the same roast? The data tells you what your palate already suspects.",
  },
  {
    icon: BookOpen,
    title: "Equipment log",
    body: "Track which grinder setting you used alongside each shot. Log machine changes, burr replacements, and puck screen additions. When something changes in your setup, you'll know exactly when it happened and how it affected your shots.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Find your roast",
    body: "Search by roaster name or origin. Get the tasting notes, recommended dose/yield ratio, brew temp, and roast date guidance for that specific coffee. A starting point you can actually use.",
  },
  {
    step: "2",
    title: "Log the shot",
    body: "After pulling, enter dose, yield, extraction time, and your rating. Add a note on what to adjust — grind finer, reduce dose, increase temp. Takes 20 seconds. Builds the picture over multiple shots.",
  },
  {
    step: "3",
    title: "Find your recipe",
    body: "After a few sessions, patterns emerge. The shots you rated highest cluster around specific dose, yield, and time combinations. Your personal recipe for that roast, built from real data.",
  },
];

const DB_CATEGORIES = [
  { label: "Intelligentsia Black Cat Classic", origin: "Blend", ratio: "1:2 (18g in / 36g out)", temp: "200°F", notes: "Dark chocolate, caramel" },
  { label: "Stumptown Hair Bender", origin: "Blend (multi-origin)", ratio: "1:2 (18g in / 36g out)", temp: "199°F", notes: "Dark cherry, chocolate, citrus" },
  { label: "Blue Bottle Three Africas", origin: "Blend (Ethiopia + Uganda)", ratio: "1:2.2 (18g in / 40g out)", temp: "201°F", notes: "Fruity, citrus-forward, juicy" },
  { label: "Counter Culture Slow Motion", origin: "Blend", ratio: "1:2 (18g in / 36g out)", temp: "200°F", notes: "Bittersweet chocolate, almond" },
  { label: "Onyx Geometry", origin: "Blend", ratio: "1:2.5 (18g in / 45g out)", temp: "198°F", notes: "Brown sugar, stone fruit" },
  { label: "George Howell Ethiopian Natural", origin: "Ethiopia Yirgacheffe", ratio: "1:2.5 (17g in / 42g out)", temp: "197°F", notes: "Blueberry, jasmine, wine-like" },
];

const FAQS = [
  {
    q: "Is DialInLog free?",
    a: "Yes. The app and roaster library are free. The $6.99 one-time unlock adds unlimited shot logging, ratio trend view, and equipment log. No subscription, no renewal.",
  },
  {
    q: "What's in the roaster database?",
    a: "176+ roasters and flagship blends from specialty coffee producers in the US and internationally. Each entry has tasting notes, recommended starting dose/yield ratio, brew temperature guidance, and origin information.",
  },
  {
    q: "Can I add roasters not in the database?",
    a: "Yes. You can add custom roaster and coffee entries with your own notes, and log shots against them just like library entries. Good for local roasters, farmers market finds, or subscription bags that rotate frequently.",
  },
  {
    q: "Does the app help me dial in a new bag?",
    a: "Yes, that's the core use case. Search your roast, get the starting parameters, then log your adjustment shots. After 3–5 shots with notes on what you changed each time, you'll have a dialed-in recipe for that specific bag.",
  },
  {
    q: "Does DialInLog work offline?",
    a: "Yes. The roaster library is built into the app and works without internet. Shot logs are stored locally on your device.",
  },
  {
    q: "What machines and grinders does the app support?",
    a: "DialInLog is machine and grinder agnostic — you log the parameters that matter (dose, yield, time, temp, grind setting number) regardless of your setup. The equipment log field lets you note your specific machine and grinder for each session.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#FFFBEB' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-6">
              176+ roasters. Every shot logged.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Dial in faster.
              <br />
              <span className="text-amber-700">Log every shot. Find your recipe.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              DialInLog gives you 176+ specialty roasters with tasting notes, recommended dose/yield ratios, and brew temperature guidance built in. Log every shot with dose, yield, time, and rating. Track your adjustments and find your recipe faster — without starting over every new bag.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-800 transition-colors press-feedback min-h-[48px]">
                Browse the Roaster Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Espresso Ratio Guide
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free app. No credit card. 176+ roasters included.</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The library is your starting point.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Dialing in espresso without reference data is trial and error with no finish line. DialInLog gives you a starting dose/yield ratio and brew temp for your specific roast, so your first shot is calibrated — not random. Then your logged adjustments get you to perfect faster.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-6 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How DialInLog works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Find the roast. Log the shot. Find your recipe.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map(({ step, title, body }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-bold text-lg mb-4">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sample roasters from the library</h2>
              <p className="text-gray-600 max-w-xl mx-auto">176+ roasters and blends — browse and search the full library in the app.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Coffee</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Ratio</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Temp</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Tasting notes</th>
                  </tr>
                </thead>
                <tbody>
                  {DB_CATEGORIES.map(({ label, ratio, temp, notes }) => (
                    <tr key={label} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{label}</td>
                      <td className="py-3 pr-4 text-amber-700 font-medium">{ratio}</td>
                      <td className="py-3 pr-4 text-gray-600">{temp}</td>
                      <td className="py-3 text-gray-500 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-sm text-gray-400">US specialty roasters, international producers, and both blends and single-origins covered.</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Free app. One-time unlock.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Download DialInLog free. The roaster library is free. Unlock shot logging, ratio trend view, and equipment log for a one-time $6.99.</p>
            <div className="bg-white rounded-2xl p-8 border border-amber-100 mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-1">$6.99</div>
              <div className="text-sm text-gray-400 mb-6">One-time. Yours forever.</div>
              <ul className="text-left space-y-3 mb-6">
                {["Unlimited shot log entries","Dose/yield/time ratio view","Equipment and grinder log","Custom roaster entries","Works fully offline","All future updates included"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-amber-600 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Download on App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Get it on Google Play</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Common questions</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Start with the free ratio guide.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Download the printable espresso ratio reference — the 1:2 to 1:3 ratio spectrum with extraction time targets and what each ratio tastes like. Good for any machine, any grinder.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-800 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free Guide
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-amber-200 text-amber-700 font-medium px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors min-h-[48px]">
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
