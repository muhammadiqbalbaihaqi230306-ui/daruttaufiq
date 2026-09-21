import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ProgramSection from "@/components/home/ProgramSection";
import NewsSection from "@/components/home/NewsSection";
import CTASection from "@/components/home/CTASection";
import TestimonialSection from "@/components/home/TestimonialSection";
import InstagramSection from "@/components/home/InstagramSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProgramSection />
      {/* 
        Warning: In Next.js 15, passing server components (NewsSection, TestimonialSection) 
        directly inside client components is not supported unless passed as props.
        Here we are assembling them in a Server Component layout (page.tsx).
      */}
      <NewsSection />
      <CTASection />
      <TestimonialSection />
      <InstagramSection />
    </>
  );
}
