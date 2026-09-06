"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    tag: "MULTIPLE DISTRICT 306",
    title: "Sri Lanka & Republic of Maldives",
    subtitle: "Over 10,000 active young humanitarians",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    tag: "ENVIRONMENTAL CONSERVATION",
    title: "50,000+ Mangrove & Island Reforestation",
    subtitle: "Protecting vulnerable coastal ecosystems",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    tag: "COMMUNITY HEALTHCARE",
    title: "Nationwide Youth Vision Screening",
    subtitle: "Providing free custom prescription spectacles",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
    tag: "HUNGER RELIEF INITIATIVE",
    title: "Zero-Hunger Community Kitchens",
    subtitle: "Delivering hot meals to families in need",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F6FA] via-[#FAFBFC] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E9EDF5]">
      
      {/* Ambient background glows */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-leo-cyan/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-12 left-10 w-[400px] h-[400px] bg-[#003B99]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-bold tracking-wider text-[#003B99] uppercase">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-leo-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-leo-cyan"></span>
              </span>
              <span>LEADERSHIP • EXPERIENCE • OPPORTUNITY</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[62px] text-[#111827] tracking-tight leading-[1.1]">
              Empowering Youth.{" "}
              <span className="text-[#003B99]">
                Inspiring Lives.
              </span>{" "}
              Serving Communities.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Multiple District 306 unites over 10,000 passionate young leaders across Sri Lanka and the Maldives, creating sustainable community impact through dedicated humanitarian service.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold text-white bg-leo-cyan hover:bg-leo-cyan-hover rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Join Our Movement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-bold text-[#111827] bg-white hover:bg-slate-50 rounded-full border border-slate-300 shadow-xs transition-all duration-200"
              >
                <span>Explore Projects</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#003B99] shrink-0" />
                <span className="font-semibold text-slate-800">LCI Charter 1969</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-leo-cyan shrink-0" />
                <span className="font-semibold text-slate-800">100% Youth Led</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F5A800] shrink-0" />
                <span className="font-semibold text-slate-800">5,000+ Projects</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image Carousel */}
          <div
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container */}
            <div className="relative mx-auto rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white bg-[#082E6E] max-w-md lg:max-w-none h-[420px] sm:h-[480px]">
              
              {/* Slides */}
              {HERO_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082E6E]/95 via-[#082E6E]/30 to-transparent" />
                </div>
              ))}

              {/* Prev / Next Navigation Arrows */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Top Slide Counter Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-widest">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </div>

              {/* Bottom Glass Caption Card */}
              <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-leo-cyan">
                      {HERO_SLIDES[currentSlide].tag}
                    </div>
                    <div className="font-heading font-extrabold text-sm sm:text-base text-[#111827] line-clamp-1">
                      {HERO_SLIDES[currentSlide].title}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1">
                      {HERO_SLIDES[currentSlide].subtitle}
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#003B99] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                    MD
                  </div>
                </div>

                {/* Carousel Indicator Dots */}
                <div className="flex items-center gap-1.5 pt-3 mt-2 border-t border-slate-100">
                  {HERO_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIdx === currentSlide
                          ? "w-7 bg-leo-cyan"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Overlapping Bottom-Right Floating Badge */}
            <div className="absolute -bottom-4 -right-2 hidden sm:flex items-center gap-3 bg-[#003B99] text-white px-4 py-3 rounded-2xl shadow-xl border border-white/20 z-30">
              <Users className="w-5 h-5 text-leo-cyan" />
              <div>
                <div className="font-heading font-extrabold text-sm leading-none">10,000+</div>
                <div className="text-[10px] text-slate-200 mt-0.5">Active Volunteers</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
