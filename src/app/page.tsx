import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpportunityReport from "@/components/OpportunityReport";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-500/30">
      <Navbar />
      <Hero />
      <OpportunityReport />
      <SocialProof />
      <Features />
      <Pricing />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
