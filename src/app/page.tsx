import { Brands } from "@/components/Brands";
import { TestimonialCard } from "@/components/TestimonialCards";
import { AboutSection } from "@/components/AboutSection";
import { ContentCreators } from "@/components/ContentCreators";
import { BlogSectionInHomepage } from "@/components/BlogSectionInHomepage";
import { HeroHome } from "@/components/HeroHome";
import GetInTouch from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroHome />

      <TestimonialCard />
      <AboutSection />
      <ContentCreators />
      <BlogSectionInHomepage />
      <Brands />
      <GetInTouch />
      <Footer />
    </>
  );
}
