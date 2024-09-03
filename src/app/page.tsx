import { ParallaxHeader } from "@/components/HeroParallax";
import { TestimonialCard } from "@/components/TestimonialCards";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <ParallaxHeader />

      <TestimonialCard />
      <AboutSection />
    </>
  );
}
