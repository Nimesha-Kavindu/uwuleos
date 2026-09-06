"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight } from "lucide-react";
import {
  LionsEmblemSvg,
  LeoEmblemSvg,
  DistrictEmblemSvg,
  CardDoodlePattern,
} from "@/components/ui/BrandingLogos";
import { useClub } from "@/context/ClubContext";

export default function AffiliationSection() {
  const { club } = useClub();
  const { card1, card2, card3, lciDescription } = club.affiliationDetails;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
          
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
              {lciDescription}
            </p>
          </div>
        </div>

        {/* 3-Card Grid Structure */}
        <div className="space-y-6">
          
          {/* CARD 1: Full-Width Primary Blue Lions International Card */}
          <div className="group relative rounded-2xl bg-[#003B99] text-white p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            
            {/* Subtle authentic doodle pattern in card background */}
            <CardDoodlePattern className="absolute inset-0 text-white pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
              
              {/* Official Lions International Emblem */}
              <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                <LionsEmblemSvg className="w-20 h-20 sm:w-24 sm:h-24" />
              </div>

              {/* Text & Action Link */}
              <div className="flex-1 space-y-2">
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {card1.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base font-normal max-w-2xl">
                  {card1.subtitle}
                </p>

                {/* Read the history with styled arrow */}
                <div className="pt-2">
                  <Link
                    href={card1.linkUrl || "/about#lions-history"}
                    className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-leo-cyan transition-colors group/link"
                  >
                    <span>{card1.linkText || "Read the history"}</span>
                    <span className="w-6 h-6 rounded-lg bg-white/20 group-hover/link:bg-leo-cyan flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-white group-hover/link:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* ROW 2: 2 Half-Width Cards (Leo & District Card) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CARD 2: Leo (Light pearl/grey background) */}
            <div className="group relative rounded-2xl bg-[#F4F5F8] text-[#111827] p-8 sm:p-10 border border-[#E5E8EE] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
              
              {/* Subtle doodle pattern */}
              <CardDoodlePattern className="absolute inset-0 text-slate-900 pointer-events-none opacity-40" />

              <div className="relative z-10 flex items-center gap-6">
                {/* Official Leo Emblem */}
                <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <LeoEmblemSvg className="w-16 h-16 sm:w-18 sm:h-18" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111827] tracking-tight">
                    {card2.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-snug">
                    {card2.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3: District 306 C2 (Deep Navy Blue background) */}
            <div className="group relative rounded-2xl bg-[#072B6B] text-white p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10">
              
              {/* Subtle doodle pattern */}
              <CardDoodlePattern className="absolute inset-0 text-white pointer-events-none" />

              <div className="relative z-10 flex items-center gap-6">
                {/* Official District Badge */}
                <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <DistrictEmblemSvg className="w-16 h-16 sm:w-18 sm:h-18" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    {card3.title}
                  </h3>
                  <p className="text-white/85 text-sm sm:text-[15px] leading-snug">
                    {card3.subtitle}
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
