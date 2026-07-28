import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

// Only the weights the page actually renders: 400 (body serif and the italic
// emphasis), 500 (headings), 600 (wordmark). 700 was being downloaded in both
// styles and used nowhere.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = `${siteName} — Artisan Boulangerie`;
const description = siteDescription;

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
    siteName,
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
