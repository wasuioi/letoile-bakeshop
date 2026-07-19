import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://letoile-bakeshop.vercel.app";
const title = "L'Étoile Bakeshop — Artisan Boulangerie";
const description =
  "Slow-fermented sourdough, hand-laminated croissants, and stone-oven pastries. Baked with devotion, crafted for connoisseurs since 1987.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "L'Étoile Bakeshop",
    title,
    description,
    locale: "en_US",
    // og:image is supplied by src/app/opengraph-image.tsx (generated at build time)
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // twitter:image is supplied by src/app/opengraph-image.tsx
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
