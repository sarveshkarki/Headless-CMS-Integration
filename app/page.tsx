"use client";

import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";

import { HeroSkeleton } from "@/components/skeleton/HeroSkeleton";
import { AboutSkeleton } from "@/components/skeleton/AboutSkeleton";
import { ServicesSkeleton } from "@/components/skeleton/ServicesSkeleton";
import { TestimonialsSkeleton } from "@/components/skeleton/TestimonialSkeleton";

import { useHomepageSections } from "@/hooks/useHomepageSection";

export default function Home() {
  const { data: sections, isLoading } = useHomepageSections();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {isLoading ? (
          <>
            <HeroSkeleton />
            <AboutSkeleton />
            <ServicesSkeleton />
            <TestimonialsSkeleton />
          </>
        ) : (
          sections?.map((section, index) => {
            switch (section.acf_fc_layout) {
              case "header":
                return <Hero key={index} data={section} />;
              case "about":
                return <About key={index} data={section} />;
              case "services":
                return <Services key={index} data={section} />;
              case "testimonials":
                return <Testimonials key={index} data={section} />;
              default:
                return null;
            }
          })
        )}
      </main>
      <Footer />
    </div>
  );
}
