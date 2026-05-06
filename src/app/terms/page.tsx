import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — DialInLog',
  description: 'Terms of service for the DialInLog mobile application and dialinlog.com website.',
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
    title: 'Use of the Service',
    body: (
      <>
        <p className="mb-3">DialInLog is a personal espresso shot log app. You may use the service for personal, non-commercial purposes only. You agree not to misuse the service, reverse-engineer the app, or use it in any way that violates applicable law.</p>
        <p>You are responsible for all data you enter into the app. We do not verify the accuracy of your logged entries.</p>
      </>
    ),
  },
  {
    n: '03',
    title: 'User Accounts',
    body: <p>Creating an account is optional. If you create an account, you are responsible for keeping your credentials secure. You may delete your account at any time from the app settings.</p>,
  },
  {
    n: '04',
    title: 'In-App Purchases',
    body: (
      <>
        <p className="mb-3">DialInLog offers a one-time in-app purchase ($6.99 USD) to unlock the full database and premium logging features. Purchases are processed by Apple App Store or Google Play and are subject to their respective refund policies. We do not process payment information directly.</p>
        <p>Purchases are tied to your App Store or Google Play account and can be restored on new devices using the restore purchases option in settings.</p>
      </>
    ),
  },
  {
    n: '05',
    title: 'Intellectual Property',
    body: (
      <>
        <p className="mb-3">All content, design, code, and database records in the DialInLog app and website are owned by Anvil Road LLC or licensed to us. You may not copy, reproduce, or redistribute any part of the service without written permission.</p>
        <p>Data you create in the app (your personal log entries) remains yours. We do not claim ownership of your personal records.</p>
      </>
    ),
  },
  {
    n: '06',
    title: 'Limitation of Liability',
    body: <p>DialInLog is provided "as is" without warranties of any kind. Anvil Road LLC is not liable for any damages arising from use of the app, including data loss, inaccurate reference information, or service interruptions. Our total liability to you is limited to the amount you paid for any in-app purchase.</p>,
  },
  {
    n: '07',
    title: 'Changes to These Terms',
    body: <p>We may update these terms from time to time. We will post the revised terms at this URL with a new last updated date. Continued use of the service after changes constitutes your acceptance of the updated terms.</p>,
  },
  {
    n: '08',
    title: 'Governing Law',
    body: <p>These terms are governed by the laws of the State of New Jersey, United States, without regard to conflict of law principles. Any disputes must be brought in the courts of New Jersey.</p>,
  },
  {
    n: '09',
    title: 'Contact',
    body: (
      <p>
        Questions about these terms? Email{' '}
        <a href="mailto:support@dialinlog.com" style={{ color: 'oklch(0.72 0.14 70)' }} className="hover:underline">support@dialinlog.com</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* HERO */}
        <section style={{ background: 'oklch(0.10 0.018 30)' }} className="pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.55 0.17 40)', letterSpacing: '0.18em', fontSize: '0.72rem' }} className="uppercase font-semibold mb-8 flex items-center gap-3">
              <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'oklch(0.55 0.17 40)' }} />
              Legal · Last Updated April 18, 2026
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', color: 'oklch(0.93 0.015 50)', lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.01em' }} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service.
            </h1>
            <p style={{ color: 'oklch(0.78 0.015 50)' }} className="text-base lg:text-lg leading-relaxed max-w-2xl">
              These Terms of Service govern your use of the DialInLog espresso shot log app and the website at dialinlog.com. By downloading the app or using the website, you agree to these terms. If you do not agree, do not use the service.
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
