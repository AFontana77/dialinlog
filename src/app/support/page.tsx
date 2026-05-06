import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — DialInLog',
  description: 'Get help with the DialInLog app. Contact support or browse common questions.',
};

const FAQS = [
  {
    q: 'How do I get the app?',
    a: 'Search "DialInLog" in the App Store or Google Play. The app is free to download. The $6.99 one-time unlock removes entry limits and adds premium features.',
  },
  {
    q: 'What does the $6.99 unlock include?',
    a: 'Unlimited shot logs, grind setting history, flavor wheel, and PDF export. One-time payment, no subscription, no expiration.',
  },
  {
    q: 'How do I restore my purchase?',
    a: 'Open the app, go to Settings, and tap "Restore Purchases." Make sure you are signed in to the same Apple ID or Google account you used to purchase.',
  },
  {
    q: 'Does the app require an account?',
    a: 'No account is required for offline use. An optional free account lets you sync your espresso shot logs across devices.',
  },
  {
    q: 'Is there a subscription?',
    a: 'No. DialInLog is free to download with entry limits, and $6.99 one-time to unlock everything. No monthly fees, ever.',
  },
  {
    q: 'How do I delete my account and data?',
    a: 'Go to Settings in the app and tap "Delete Account." This removes all cloud data within 30 days. Local data is removed when you uninstall the app.',
  },
];

export default function SupportPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Support · Contact · FAQ
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              App Support.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              Get help with DialInLog or send us feedback.
            </p>
          </div>
        </section>

        {/* CONTACT CARD */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ background: 'oklch(0.17 0.025 30)', border: '1px solid oklch(0.27 0.025 30)' }} className="rounded-md p-8">
              <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.72 0.14 70)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-4">
                Email Support
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-2xl font-bold mb-3">
                We respond within 1-2 business days.
              </h2>
              <a
                href="mailto:support@dialinlog.com"
                style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.06em' }}
                className="text-lg font-bold uppercase hover:underline"
              >
                support@dialinlog.com
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'oklch(0.15 0.022 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-5 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              FAQ
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.96, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-3xl sm:text-4xl font-bold mb-12">
              Frequently asked questions.
            </h2>
            <div style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
              {FAQS.map((f) => (
                <details key={f.q} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="group">
                  <summary
                    style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }}
                    className="text-lg font-bold cursor-pointer list-none flex justify-between items-center py-6"
                  >
                    {f.q}
                    <span style={{ color: 'oklch(0.55 0.17 40)' }} className="text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed pb-6 max-w-3xl">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
            <p style={{ color: 'oklch(0.55 0.012 50)' }} className="text-sm mt-10">
              See our{' '}
              <a href="/privacy" style={{ color: 'oklch(0.72 0.14 70)' }} className="hover:underline">Privacy Policy</a>
              {' '}for information on how we handle your data.
            </p>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
