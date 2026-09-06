"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight } from "lucide-react";
import {
  LionsEmblemSvg,
  LeoEmblemSvg,
  DistrictEmblemSvg,
} from "@/components/ui/BrandingLogos";

export default function AffiliationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: 2-Column Split directly matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
          
          {/* Left Column: Cyan Bar + Label + Heading */}
          <div className="lg:col-span-5">
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              WHAT WE ARE PART OF
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#111827] leading-[1.15] tracking-tight">
              Lions Clubs International
            </h2>
          </div>

          {/* Right Column: Paragraph narrative */}
          <div className="lg:col-span-7">
            <p className="text-slate-600 text-[15px] sm:text-[17px] leading-relaxed pt-1 font-normal">
              Lions Clubs International (LCI), founded by Melvin Jones in 1917, is the largest service organization in the world with 1.4 million members. The organization is dedicated to humanitarian efforts, promoting peace, and fostering cross-cultural understanding through its global network of over 46,000 clubs. LCI's motto, &ldquo;We Serve,&rdquo; reflects its commitment to helping communities in need, regardless of language, religion, or politics.
            </p>
          </div>
        </div>

        {/* 3-Card Grid Structure (Exact replica of reference) */}
        <div className="space-y-6">
          
          {/* CARD 1: Full-Width Primary Blue Lions International Card */}
          <div className="group relative rounded-[24px] bg-[#003B99] text-white p-8 sm:p-10 lg:p-12 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            
            {/* Subtle decorative watermark lines in corner */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-end pr-10">
              <svg viewBox="0 0 200 200" className="w-64 h-64 text-white fill-none stroke-current stroke-2">
                <circle cx="100" cy="100" r="80" strokeDasharray="6 6" />
                <ellipse cx="100" cy="100" rx="80" ry="35" />
                <line x1="100" y1="20" x2="100" y2="180" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
              
              {/* Authentic Lions International Logo Emblem */}
              <div className="shrink-0 p-1.5 bg-white/10 rounded-2xl backdrop-blur-xs group-hover:scale-105 transition-transform duration-300">
                <LionsEmblemSvg className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>

              {/* Text & Action Link */}
              <div className="flex-1 space-y-2">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Lions International
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-normal max-w-2xl">
                  Since 1917. The largest service organization in the world.
                </p>

                {/* Read the history with circled arrow */}
                <div className="pt-2">
                  <Link
                    href="/about#lions-history"
                    className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-leo-cyan transition-colors group/link"
                  >
                    <span>Read the history</span>
                    <span className="w-6 h-6 rounded-full bg-white/20 group-hover/link:bg-leo-cyan flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover/link:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* ROW 2: 2 Half-Width Cards (Leo & Leo MD 306) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CARD 2: Leo (Light pearl/grey background) */}
            <div className="group relative rounded-[24px] bg-[#F4F5F8] text-[#111827] p-8 sm:p-10 border border-[#E5E8EE] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
              
              <div className="relative z-10 flex items-center gap-6">
                {/* Authentic Leo Emblem */}
                <div className="shrink-0 p-1 bg-white rounded-2xl shadow-xs border border-slate-200 group-hover:scale-105 transition-transform duration-300">
                  <LeoEmblemSvg className="w-16 h-16 sm:w-18 sm:h-18" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111827] tracking-tight">
                    Leo
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-snug">
                    Leadership. Experience. Opportunity. Since 1957.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3: Leo MD 306 (Deep Navy Blue background) */}
            <div className="group relative rounded-[24px] bg-[#082E6E] text-white p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10">
              
              <div className="relative z-10 flex items-center gap-6">
                {/* Authentic District Badge */}
                <div className="shrink-0 p-1 bg-white/10 rounded-2xl backdrop-blur-xs group-hover:scale-105 transition-transform duration-300">
                  <DistrictEmblemSvg className="w-16 h-16 sm:w-18 sm:h-18" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    Leo MD 306
                  </h3>
                  <p className="text-white/85 text-sm sm:text-[15px] leading-snug">
                    Sri Lanka and the Maldives. Led by young people.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
