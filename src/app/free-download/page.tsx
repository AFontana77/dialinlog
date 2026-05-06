import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { EmailCaptureForm } from '@/components/EmailCaptureForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Espresso Dial-In Tracker",
  description: "A printable single-page log — dose, yield, time, grind, pressure, and tasting notes for 20 shots. Free printable from DialInLog — no signup required.",
};

const FEATURES = [
  '20 shot entries per page',
  'Dose (g), yield (g), and ratio columns',
  'Extraction time and pressure fields',
  'Grind setting notation',
  'Tasting notes and rating columns',
];

export default function FreeDownloadPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Free Download · Printable PDF
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Free Espresso Dial-In Tracker.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              A printable single-page log. Dose, yield, time, grind, pressure, and tasting notes for 20 shots.
            </p>
          </div>
        </section>

        {/* WHAT'S INSIDE + FORM */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">

            {/* What's inside */}
            <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-8">
              <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.7rem' }} className="uppercase font-semibold mb-4">
                What is inside
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-2xl font-bold mb-6">
                The Tracker
              </h2>
              <ul className="space-y-3" style={{ borderTop: '1px solid oklch(0.27 0.025 30)', paddingTop: '1rem' }}>
                {FEATURES.map((f) => (
                  <li key={f} style={{ color: 'oklch(0.78 0.015 50)', borderBottom: '1px solid oklch(0.22 0.022 30)' }} className="text-sm flex gap-3 items-start pb-3">
                    <span style={{ color: 'oklch(0.55 0.17 40)' }} className="flex-shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-8">
              <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.7rem' }} className="uppercase font-semibold mb-4">
                Get Your Copy
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-2xl font-bold mb-3">
                Send it to your inbox.
              </h2>
              <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-sm mb-6">
                Enter your email and we will send it right over.
              </p>
              <EmailCaptureForm buttonLabel="Send Me the Free PDF" />
              <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-xs mt-4">No spam. Unsubscribe any time.</p>
            </div>

          </div>
        </section>

        {/* APP CTA */}
        <section style={{ background: 'oklch(0.10 0.018 30)', borderTop: '1px solid oklch(0.27 0.025 30)' }} className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.72 0.14 70)' }} />
              The App
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-5">
              Want the searchable database?
            </h2>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed mb-9 max-w-2xl">
              The free PDF covers the basics. The DialInLog app gives you the full searchable library and your personal log. Free on iPhone and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary press-feedback">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-ghost press-feedback">
                Google Play
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
