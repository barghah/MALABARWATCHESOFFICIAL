import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Premium Swiss Watches in Kerala`,
  description: SITE_CONFIG.description,
  keywords: ["Tissot", "watches", "Kerala", "Malabar", "Swiss watches", "luxury watches", "authentic watches", "WhatsApp"],
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
