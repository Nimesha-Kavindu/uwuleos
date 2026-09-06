"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles, MapPin, Users } from "lucide-react";

export default function HeroSection() {
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

          {/* Right Column: Layered Premium Visual Artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white bg-[#082E6E] max-w-md lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                alt="Young Leo Leaders Sri Lanka and Maldives"
                className="w-full h-[400px] sm:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082E6E]/90 via-transparent to-transparent" />

              {/* Bottom Glass Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-leo-cyan">
                    MULTIPLE DISTRICT 306
                  </div>
                  <div className="font-heading font-extrabold text-sm sm:text-base text-[#111827]">
                    Sri Lanka & Republic of Maldives
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#003B99] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  MD
                </div>
              </div>
            </div>

            {/* Overlapping Top-Left Floating Badge */}
            <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-leo-cyan-light text-[#003B99] flex items-center justify-center font-extrabold text-xs">
                🇱🇰 🇲🇻
              </div>
              <div>
                <div className="text-xs font-bold text-[#111827]">12 Districts</div>
                <div className="text-[10px] text-slate-500 font-medium">Island-wide Network</div>
              </div>
            </div>

            {/* Overlapping Bottom-Right Floating Badge */}
            <div className="absolute -bottom-4 -right-2 hidden sm:flex items-center gap-3 bg-[#003B99] text-white px-4 py-3 rounded-2xl shadow-xl border border-white/20">
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
