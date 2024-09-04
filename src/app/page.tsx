import { ParallaxHeader } from "@/components/HeroParallax";
import { TestimonialCard } from "@/components/TestimonialCards";
import { AboutSection } from "@/components/AboutSection";
import { ContentCreators } from "@/components/ContentCreators";
import { BlogSectionInHomepage } from "@/components/BlogSectionInHomepage";

export default function Home() {
  return (
    <>
      <ParallaxHeader />

      <TestimonialCard />
      <AboutSection />
      <ContentCreators />
      <BlogSectionInHomepage />
    </>
  );
}
