import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Encode_Sans } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const encodeSans = Encode_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://www.dialinlog.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DialInLog — Search 176+ espresso beans and roasters",
    template: "%s | DialInLog",
  },
  description: "DialInLog has 176+ espresso beans and roasters with tasting notes and roast profiles. Log your shots, track grind settings, and dial in your perfect espresso.",
  keywords: ["espresso log app", "coffee journal", "shot tracker", "barista log", "espresso dial in tracker"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DialInLog",
    title: "DialInLog — Search 176+ espresso beans and roasters",
    description: "DialInLog has 176+ espresso beans and roasters with tasting notes and roast profiles. Log your shots, track grind settings, and dial in your perfect espresso.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "DialInLog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DialInLog — Search 176+ espresso beans and roasters",
    description: "DialInLog has 176+ espresso beans and roasters with tasting notes and roast profiles. Log your shots, track grind settings, and dial in your perfect espresso.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0f08",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${encodeSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
