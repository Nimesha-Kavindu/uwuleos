"use client";

import React from "react";
import CyanBar from "@/components/ui/CyanBar";
import { useClub } from "@/context/ClubContext";

export default function ImpactSection() {
  const { club } = useClub();
  const { stat1, stat2, stat3, stat4, description } = club.impactStats;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#EDF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-5 space-y-3">
            <CyanBar width="w-10" height="h-1" />
            
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase">
              IMPACT
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-[#111827] leading-[1.15] tracking-tight">
              {club.shortName}, in figures
            </h2>

            <p className="text-slate-600 text-[15px] sm:text-[17px] leading-relaxed pt-2 max-w-md">
              {description}
            </p>
          </div>

          {/* Right Column: 2x2 Clean Stat Matrix with fine dividing lines */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E8EE]">
              
              {/* Left Quadrants */}
              <div className="divide-y divide-[#E5E8EE]">
                {/* Stat 1 */}
                <div className="pb-8 sm:p-8 sm:pt-0 sm:pl-0">
                  <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#111827] tracking-tight leading-none mb-2.5">
                    {stat1.value}
                  </div>
                  <div className="text-base sm:text-lg font-normal text-slate-600">
                    {stat1.label}
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="pt-8 sm:p-8 sm:pb-0 sm:pl-0">
                  <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#111827] tracking-tight leading-none mb-2.5">
                    {stat3.value}
                  </div>
                  <div className="text-base sm:text-lg font-normal text-slate-600">
                    {stat3.label}
                  </div>
                </div>
              </div>

              {/* Right Quadrants */}
              <div className="divide-y divide-[#E5E8EE]">
                {/* Stat 2 */}
                <div className="pt-8 sm:pt-0 sm:p-8 sm:pr-0">
                  <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#111827] tracking-tight leading-none mb-2.5">
                    {stat2.value}
                  </div>
                  <div className="text-base sm:text-lg font-normal text-slate-600">
                    {stat2.label}
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="pt-8 sm:p-8 sm:pb-0 sm:pr-0">
                  <div className="font-heading font-extrabold text-5xl sm:text-6xl text-[#111827] tracking-tight leading-none mb-2.5">
                    {stat4.value}
                  </div>
                  <div className="text-base sm:text-lg font-normal text-slate-600">
                    {stat4.label}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
