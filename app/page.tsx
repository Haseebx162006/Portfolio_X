import { BrandSprite } from "@/components/BrandIcon";
import { ProgressBar } from "@/components/ProgressBar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <BrandSprite />
      <ScrollReveal />
      <ProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <WorkSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <AboutSection />
      </main>
      <ContactSection />
    </>
  );
}
