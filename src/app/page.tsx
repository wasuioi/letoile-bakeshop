import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import SubscriptionCTA from "@/components/SubscriptionCTA";
import Footer from "@/components/Footer";

const siteUrl = "https://letoile-bakeshop.vercel.app";

// Bakery / LocalBusiness structured data, built from the content on the page
// (flagship address + hours from the footer, founding year and tagline from
// the hero). Lets search engines surface hours and location directly.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "L'Étoile Bakeshop",
  description:
    "Slow-fermented sourdough, hand-laminated croissants, and stone-oven pastries. Baked with devotion, crafted for connoisseurs since 1987.",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email: "bonjour@letoile.example",
  foundingDate: "1987",
  priceRange: "€€",
  servesCuisine: ["Bakery", "French"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Rue Cler",
    postalCode: "75007",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "13:00",
    },
  ],
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
