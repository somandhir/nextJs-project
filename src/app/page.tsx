import FeaturedCourses from "@/components/FeaturedComponents";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="pt-32 min-h-screen bg-black/96 antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
    </main>
  );
}
