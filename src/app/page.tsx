import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AffiliationSection from "@/components/home/AffiliationSection";
import ImpactSection from "@/components/home/ImpactSection";
import CausesSection from "@/components/home/CausesSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import EventsPreview from "@/components/home/EventsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. What We Are Part Of (Exact match to reference screenshot) */}
      <AffiliationSection />

      {/* 3. Impact in Figures (Exact match to reference screenshot) */}
      <ImpactSection />

      {/* 4. Service Pillars & Causes */}
      <CausesSection />

      {/* 5. Featured Signature Projects */}
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
