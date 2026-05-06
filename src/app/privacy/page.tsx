import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — DialInLog',
  description: 'Privacy policy for the DialInLog mobile application and dialinlog.com website.',
};

const SECTIONS = [
  {
    n: '01',
    title: 'Who We Are',
    body: (
      <p>
        Anvil Road LLC operates dialinlog.com and the DialInLog mobile application. Contact:{' '}
        <a href="mailto:support@dialinlog.com" style={{ color: 'oklch(0.72 0.14 70)' }} className="hover:underline">support@dialinlog.com</a>
      </p>
    ),
  },
  {
    n: '02',
    title: 'Information We Collect',
    body: (
      <ul className="space-y-2 list-disc pl-5">
        <li><strong>Account email address.</strong> Optional, for cross-device sync only.</li>
        <li><strong>Espresso shot logs you create.</strong> Stored locally on your device and, if you have an account, in our secure cloud database (Supabase).</li>
        <li><strong>Purchase confirmation.</strong> Via RevenueCat when you unlock premium features. We do not receive your payment details.</li>
        <li><strong>Device identifiers.</strong> Used by RevenueCat to associate your purchase with your device.</li>
      </ul>
    ),
  },
  {
    n: '03',
    title: 'How We Use Your Information',
    body: (
      <>
        <ul className="space-y-2 list-disc pl-5 mb-3">
          <li>To operate the app and sync your data across devices (if you have an account)</li>
          <li>To restore your purchase on new devices</li>
          <li>To respond to support requests</li>
        </ul>
        <p>We do not use your data for advertising. We do not sell your data to any third party.</p>
      </>
    ),
  },
  {
    n: '04',
    title: 'Third-Party Services',
    body: (
      <ul className="space-y-2 list-disc pl-5">
        <li><strong>Supabase.</strong> Secure cloud database for optional account sync. Hosted on AWS US-East.</li>
        <li><strong>RevenueCat.</strong> In-app purchase management and subscription tracking.</li>
        <li><strong>Apple App Store / Google Play.</strong> App distribution and payment processing.</li>
      </ul>
    ),
  },
  {
    n: '05',
    title: 'Data Deletion',
    body: <p>You may delete your account and all associated cloud data at any time from the app settings. We will delete your data within 30 days of the request. Local device data is deleted when you uninstall the app.</p>,
  },
  {
    n: '06',
    title: 'Children',
    body: <p>This app is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>,
  },
  {
    n: '07',
    title: 'Changes to This Policy',
    body: <p>We may update this policy. We will post the revised policy at this URL with a new last updated date. Continued use of the app after changes constitutes acceptance of the updated policy.</p>,
  },
  {
    n: '08',
    title: 'Contact',
    body: (
      <p>
        Questions about this policy? Email{' '}
        <a href="mailto:support@dialinlog.com" style={{ color: 'oklch(0.72 0.14 70)' }} className="hover:underline">support@dialinlog.com</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Legal · Last Updated April 17, 2026
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              How DialInLog handles your data on the website and across the iPhone and Android app.
            </p>
          </div>
        </section>

        {/* SECTIONS */}
        <section style={{ background: 'oklch(0.13 0.020 30)' }} className="py-20 px-6">
          <div className="max-w-4xl mx-auto" style={{ borderTop: '1px solid oklch(0.27 0.025 30)' }}>
            {SECTIONS.map((s) => (
              <div key={s.n} style={{ borderBottom: '1px solid oklch(0.27 0.025 30)' }} className="grid grid-cols-[auto_1fr] gap-6 py-8 items-start">
                <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }} className="text-2xl font-bold">{s.n}</span>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', textTransform: 'uppercase' }} className="text-xl font-bold mb-3">{s.title}</h2>
                  <div style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base leading-relaxed">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
