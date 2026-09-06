"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, ChevronRight, Globe, Shield, Sparkles } from "lucide-react";
import {
  LionsEmblemSvg,
  LeoEmblemSvg,
  DistrictEmblemSvg,
} from "@/components/ui/BrandingLogos";
import { useClub } from "@/context/ClubContext";

export default function AffiliationSection() {
  const { club } = useClub();

  const GOVERNANCE_STEPS = [
    {
      id: "lions",
      level: "LEVEL 01 • GLOBAL PARENT BODY",
      title: "Lions International",
      description: "Founded in 1917, LCI is the world’s largest humanitarian service network with 1.4M+ members in 200+ countries.",
      emblem: <LionsEmblemSvg className="w-12 h-12" />,
      link: "/about#lions-history",
      linkText: "Parent heritage",
    },
    {
      id: "leo",
      level: "LEVEL 02 • YOUTH MOVEMENT",
      title: "The Leo Movement",
      description: "Leadership, Experience, Opportunity. Dedicated youth wing of LCI uniting over 175,000 young leaders worldwide.",
      emblem: <LeoEmblemSvg className="w-12 h-12" />,
      link: "/about",
      linkText: "Leo philosophy",
    },
    {
      id: "district",
      level: "LEVEL 03 • LOCAL CHAPTER",
      title: "District 306 C2 & UWU",
      description: "Governing district in Sri Lanka. UWU Leos operates under District 306 C2, sponsored by the Lions Club of Badulla.",
      emblem: <DistrictEmblemSvg className="w-12 h-12" />,
      link: "/board",
      linkText: "Club governance",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F4F6FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header: Editorial Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              GOVERNANCE &amp; AFFILIATION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight leading-tight">
              Connected to a Century of Global Service
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal lg:pb-1">
            Sponsored for the Leo Club of Badulla under Leo District 306 C2, our club unites undergraduates from Uva Wellassa University in global humanitarian service.
          </p>
        </div>

        {/* Connected Integrated Governance Pathway (No individual floating boxes!) */}
        <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
          
          {/* Subtle Top Gradient Accent */}
          <div className="h-1 bg-gradient-to-r from-[#003B99] via-[#00A3E0] to-[#003B99]" />

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {GOVERNANCE_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className="p-8 sm:p-10 flex flex-col justify-between hover:bg-slate-50/70 transition-colors group"
              >
                <div>
                  {/* Step Level Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-mono font-bold text-[#003B99] tracking-wider uppercase">
                      {step.level}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#003B99] group-hover:text-white text-slate-500 text-xs font-mono font-bold flex items-center justify-center transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Emblem & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="shrink-0 group-hover:scale-105 transition-transform">
                      {step.emblem}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-[#111827] tracking-tight group-hover:text-[#003B99] transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Narrative */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal pt-1">
                    {step.description}
                  </p>
                </div>

                {/* Direct Link */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={step.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B99] hover:text-[#00A3E0] transition-colors group/link"
                  >
                    <span>{step.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
