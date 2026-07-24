import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import SectorsWeServe from "@/components/home/SectorsWeServe";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects/>
      <Testimonials />
      <ServicesOverview />
      <SectorsWeServe />
    </main>
    
  );
}
