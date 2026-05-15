import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "CIVITERA — Sovereign AI Infrastructure",
  description:
    "CIVITERA develops sovereign AI governance systems, civilization-scale infrastructure, digital sovereignty architectures, and advanced patent ecosystems.",

  keywords: [
    "AI Governance",
    "Sovereign AI",
    "Digital Sovereignty",
    "GovTech",
    "Artificial Intelligence Infrastructure",
    "Patent Ecosystem",
    "Civilization Infrastructure",
    "Autonomous Systems",
  ],

  openGraph: {
    title: "CIVITERA — Sovereign AI Infrastructure",
    description:
      "Engineering sovereign intelligence infrastructure and AI governance systems for the future.",
    url: "https://civitera.ai",
    siteName: "CIVITERA",
    locale: "en_US",
    type: "website",
  },

  metadataBase: new URL("https://civitera.ai"),
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="animate-page-fade">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
