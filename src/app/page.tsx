import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import SubscriptionCTA from "@/components/SubscriptionCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
