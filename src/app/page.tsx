import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import { DeviceScrollReveal } from "@/components/ui/DeviceScrollReveal";
import RedditScanner from "@/components/demos/RedditScanner";
import SocialProof from "@/components/SocialProof";
import StatsCounter from "@/components/StatsCounter";
import Features from "@/components/Features";
import { LiveTerrain } from "@/components/ui/LiveTerrain";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CheckoutResult from "@/components/CheckoutResult";
import SocialProofToasts from "@/components/SocialProofToasts";
import { DarkModePrompt } from "@/components/ui/DarkModePrompt";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-500/30">
      <Suspense fallback={null}>
        <CheckoutResult />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <DeviceScrollReveal>
        <RedditScanner />
      </DeviceScrollReveal>
      <SocialProof />
      <StatsCounter />
      <Features />
      <LiveTerrain />
      <Testimonials />
      <Pricing />
      <GuaranteeBadge />
      <TrustBadges />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
      <SocialProofToasts />
      <DarkModePrompt />
    </main>
  );
}
