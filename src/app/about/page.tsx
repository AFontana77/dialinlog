import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About DialInLog",
  description: "The story behind DialInLog. Search 176+ espresso beans and roasters. Log your shots. Dial in your perfect cup.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              About · Anvil Road LLC
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-7">
              Built for people who track shots like a chemist tracks experiments.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-6">
              DialInLog was built for home baristas and cafe pros who spend real money on quality beans and want to remember what worked. A 250g bag of Yirgacheffe costs $20 to $30. If you do not log your best shot settings, you lose them when the bag runs out and a new one arrives. DialInLog pairs a curated bean database with a shot log so you can search a bean before you buy it and log your settings before you forget them. The app for iPhone and Android adds a dial-in assistant that tracks your progress toward the perfect extraction ratio.
            </p>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl mb-9">
              DialInLog is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/library" className="btn-primary press-feedback">
                Browse the Library
              </Link>
              <Link href="/free-download" className="btn-ghost press-feedback">
                Free Download
              </Link>
            </div>
          </div>
        </section>

        {/* PUBLISHER */}
        <section style={{ background: 'oklch(0.15 0.022 30)', borderTop: '1px solid oklch(0.27 0.025 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-6 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              The Studio
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Built by Anvil Road LLC
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. DialInLog is one of 20+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
