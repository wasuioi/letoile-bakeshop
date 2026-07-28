import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import SubscriptionCTA from "@/components/SubscriptionCTA";
import Footer from "@/components/Footer";

import {
  address,
  email,
  openingHours,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";

// Bakery / LocalBusiness structured data. Address and hours come from the
// same constants the footer renders, so the two can never disagree. Lets
// search engines surface hours and location directly.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email,
  foundingDate: "1987",
  priceRange: "€€",
  servesCuisine: ["Bakery", "French"],
  address: {
    "@type": "PostalAddress",
    ...address,
  },
  openingHoursSpecification: openingHours.map(({ dayOfWeek, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek,
    opens,
    closes,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ShowcaseGrid />
        <ProcessTimeline />
        <SubscriptionCTA />
      </main>
      <Footer />
    </>
  );
}
