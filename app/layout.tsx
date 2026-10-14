import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Transform your AI and cloud strategies with Risenti's expert guidance. Achieve clarity, alignment, and measurable impact today.";

export const metadata: Metadata = {
  metadataBase: new URL("https://risenti.com"),
  title: {
    default: "Risenti - Empower Decisions, Unlock AI & Cloud Potential",
    template: "%s | Risenti",
  },
  description,
  keywords: [
    "AI Development", "Cloud Consultancy", "Digital Transformation", "Technology Advice",
    "Decision Making", "Innovation Integration", "Strategy Advisory", "Enterprise Solutions",
  ],
  openGraph: {
    type: "website",
    url: "https://risenti.com",
    title: "Risenti - Empower Decisions, Unlock AI & Cloud Potential",
    description,
    locale: "en",
    siteName: "Risenti",
  },
};

export const viewport: Viewport = {
  themeColor: "#04121A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
