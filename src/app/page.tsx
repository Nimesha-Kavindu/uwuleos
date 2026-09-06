import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AffiliationSection from "@/components/home/AffiliationSection";
import ImpactSection from "@/components/home/ImpactSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import EventsPreview from "@/components/home/EventsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. What We Are Part Of */}
      <AffiliationSection />

      {/* 3. Impact in Figures */}
      <ImpactSection />

      {/* 4. Featured Signature Projects */}
      <FeaturedProjects />

      {/* 6. Upcoming Events Calendar */}
      <EventsPreview />

      {/* 7. Voices of Service / Testimonials */}
      <TestimonialsSection />

      {/* 8. Call to Action Banner */}
      <CtaBanner />
    </>
  );
}
