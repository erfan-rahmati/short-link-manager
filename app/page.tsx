import { LandingHeader } from "@/components/landing/landing-header";

import { HeroSection } from "@/components/landing/hero-section";

import { FeaturesSection } from "@/components/landing/features-section";

import { HowItWorks } from "@/components/landing/how-it-works";

import { LandingFooter } from "@/components/landing/landing-footer";

export default function Home() {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        bg-background
      "
    >
      <LandingHeader />

      <main
        className="
          flex-1
        "
      >
        <HeroSection />

        <FeaturesSection />

        <HowItWorks />
      </main>

      <LandingFooter />
    </div>
  );
}
