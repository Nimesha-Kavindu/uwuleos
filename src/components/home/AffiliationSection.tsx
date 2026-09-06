"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, Globe, Shield, Users } from "lucide-react";
import {
  LionsEmblemSvg,
  LeoEmblemSvg,
  DistrictEmblemSvg,
} from "@/components/ui/BrandingLogos";
import { useClub } from "@/context/ClubContext";

export default function AffiliationSection() {
  const { club } = useClub();

  const AFFILIATION_CARDS = [
    {
      id: "lions",
      tier: "Global Parent Organization",
      title: "Lions International",
      description: "Founded in 1917, LCI is the world’s largest humanitarian service network with 1.4M+ members across 200+ countries.",
      emblem: <LionsEmblemSvg className="w-14 h-14" />,
      highlight: "1.4M+ Members • 200+ Countries",
      link: "/about#lions-history",
      linkText: "Read the heritage",
      tagColor: "bg-amber-50 text-amber-800 border-amber-200/60",
    },
    {
      id: "leo",
      tier: "Global Youth Movement",
      title: "The Leo Movement",
      description: "Leadership, Experience, Opportunity. Dedicated youth program of LCI fostering leadership among 175,000+ young humanitarians.",
      emblem: <LeoEmblemSvg className="w-14 h-14" />,
      highlight: "Leadership • Experience • Opportunity",
      link: "/about",
      linkText: "Discover Leo philosophy",
      tagColor: "bg-blue-50 text-[#003B99] border-blue-200/60",
    },
    {
      id: "district",
      tier: "District & Sponsoring Lions",
      title: "District 306 C2",
      description: `Governing district in Sri Lanka. ${club.shortName} operates under District 306 C2, proudly sponsored by the Lions Club of Badulla.`,
      emblem: <DistrictEmblemSvg className="w-14 h-14" />,
      highlight: "Sponsored by Lions Club of Badulla",
      link: "/board",
      linkText: "Meet the leadership",
      tagColor: "bg-emerald-50 text-emerald-800 border-emerald-200/60",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: 2-Column Clean Editorial Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              GOVERNANCE & AFFILIATION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight leading-tight">
              Connected to a Century of Global Service
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal lg:pb-1">
            {club.affiliationDetails.lciDescription}
          </p>
        </div>

        {/* 3-Column Balanced Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AFFILIATION_CARDS.map((card) => (
            <div
              key={card.id}
              className="group bg-[#FAFAFC] rounded-2xl p-8 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003B99] to-[#00A3E0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Tier Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${card.tagColor}`}>
                    {card.tier}
                  </span>
                </div>

                {/* Emblem & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {card.emblem}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-[#111827] tracking-tight">
                      {card.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      {card.highlight}
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal pt-2">
                  {card.description}
                </p>
              </div>

              {/* Bottom Link */}
              <div className="pt-6 mt-6 border-t border-slate-200/70">
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B99] hover:text-leo-cyan transition-colors group/link"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
