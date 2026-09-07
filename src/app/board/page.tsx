"use client";

import React, { useState } from "react";
import leadershipData from "@/data/leadership.json";
import {
  Mail,
  GraduationCap,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

// Minimal Clean Avatar (Neutral, refined, and automatically renders image when provided)
function MinimalAvatar({
  initials,
  image,
  size = "md",
}: {
  initials: string;
  image?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeMap = {
    sm: "w-12 h-12 text-xs sm:text-sm",
    md: "w-16 h-16 text-sm sm:text-base",
    lg: "w-20 h-20 sm:w-24 sm:h-24 text-lg sm:text-xl",
    xl: "w-24 h-24 sm:w-28 sm:h-28 text-xl sm:text-2xl",
  }[size];

  if (image) {
    return (
      <img
        src={image}
        alt={initials}
        className={`${sizeMap} rounded-2xl object-cover border border-slate-200/90 shadow-xs shrink-0`}
      />
    );
  }

  return (
    <div
      className={`${sizeMap} rounded-2xl bg-slate-100/90 border border-slate-200/90 text-slate-700 font-bold flex items-center justify-center tracking-wider shadow-xs shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function BoardPage() {
  const [activeTab, setActiveTab] = useState<"all" | "advisory" | "exco" | "directors">("all");

  const {
    advisoryCouncil: ADVISORY_MEMBERS,
    president: PRESIDENT_DATA,
    excoOfficers: EXCO_OFFICERS,
    directors: DIRECTORS,
    governance: GOVERNANCE,
    leisticYear,
    district,
    sponsoringClub,
  } = leadershipData;

  const totalCount = ADVISORY_MEMBERS.length + 1 + EXCO_OFFICERS.length + DIRECTORS.length;

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900">
      
      {/* 1. Header */}
      <section className="bg-white border-b border-slate-200/80 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="space-y-2.5 max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003B99]" />
                <span>{district} • Uva Wellassa University</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
                Leadership Directory
              </h1>

              <p className="text-slate-500 text-sm leading-relaxed">
                The governing council, top table officers, and portfolio directors of the Leo Club of Uva Wellassa University for {leisticYear}.
              </p>
            </div>

            {/* Minimal Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60 self-start md:self-auto overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                All ({totalCount})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("advisory")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === "advisory"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Advisors ({ADVISORY_MEMBERS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("exco")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === "exco"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                EXCO ({EXCO_OFFICERS.length + 1})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("directors")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeTab === "directors"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Directors ({DIRECTORS.length})
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Directory Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">

        {/* ======================================================================= */}
        {/* TIER 1: ADVISORY COUNCIL                                                */}
        {/* ======================================================================= */}
        {(activeTab === "all" || activeTab === "advisory") && (
          <section className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tier 01 • Advisory Council
                </h2>
                <p className="text-lg font-bold text-slate-900 font-heading">
                  University &amp; Lions Mentors
                </p>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Academic &amp; Governance Oversight
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {ADVISORY_MEMBERS.map((adv) => (
                <div
                  key={adv.id}
                  className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3.5">
                      <MinimalAvatar initials={adv.initials} image={adv.image} size="md" />
                      <div className="min-w-0 flex-1">
                        <span className="inline-block text-[10px] font-semibold text-[#003B99] uppercase tracking-wider mb-0.5">
                          {adv.roleBadge}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 leading-snug font-heading">
                          {adv.title}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {adv.designation}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium pt-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{adv.institution}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                      {adv.scope}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{adv.category}</span>
                    <a
                      href={`mailto:${adv.email}`}
                      className="inline-flex items-center gap-1 font-semibold text-[#003B99] hover:text-[#00A3E0] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================================= */}
        {/* TIER 2: EXECUTIVE OFFICERS (EXCO)                                       */}
        {/* ======================================================================= */}
        {(activeTab === "all" || activeTab === "exco") && (
          <section className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tier 02 • Executive Committee
                </h2>
                <p className="text-lg font-bold text-slate-900 font-heading">
                  Top Table Officers
                </p>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Club Administration &amp; Operations
              </span>
            </div>

            {/* A. President Card */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all duration-200 group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <MinimalAvatar initials={PRESIDENT_DATA.initials} image={PRESIDENT_DATA.image} size="lg" />
                  
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold text-[#003B99] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
                        {PRESIDENT_DATA.roleBadge}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {PRESIDENT_DATA.faculty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      {PRESIDENT_DATA.designation}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {PRESIDENT_DATA.responsibilities}
                    </p>

                    <p className="text-xs text-slate-500 italic pt-0.5">
                      {PRESIDENT_DATA.motto}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <a
                    href={`mailto:${PRESIDENT_DATA.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact President</span>
                  </a>
                </div>

              </div>
            </div>

            {/* B. 4 EXCO Officers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {EXCO_OFFICERS.map((officer) => (
                <div
                  key={officer.id}
                  className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MinimalAvatar initials={officer.initials} image={officer.image} size="md" />
                      <div className="min-w-0">
                        <span className="text-[9px] font-bold text-[#003B99] uppercase tracking-wider block">
                          {officer.roleBadge}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 font-heading truncate">
                          {officer.designation}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium pb-2 border-b border-slate-100">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{officer.faculty}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {officer.scope}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">EXCO</span>
                    <a
                      href={`mailto:${officer.email}`}
                      className="font-semibold text-[#003B99] hover:text-[#00A3E0] inline-flex items-center gap-1 transition-colors"
                      title={officer.email}
                    >
                      <Mail className="w-3 h-3" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================================= */}
        {/* TIER 3: BOARD OF DIRECTORS                                              */}
        {/* ======================================================================= */}
        {(activeTab === "all" || activeTab === "directors") && (
          <section className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tier 03 • Board of Directors
                </h2>
                <p className="text-lg font-bold text-slate-900 font-heading">
                  Portfolio Directorates
                </p>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Community Projects &amp; Youth Development
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DIRECTORS.map((dir) => (
                <div
                  key={dir.id}
                  className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MinimalAvatar initials={dir.initials} image={dir.image} size="sm" />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                          {dir.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 font-heading leading-snug group-hover:text-[#003B99] transition-colors">
                          {dir.portfolio}
                        </h4>
                        <p className="text-xs text-[#003B99] font-medium mt-0.5">
                          {dir.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium pb-2 border-b border-slate-100">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{dir.faculty}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {dir.scope}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">Directorate</span>
                    <a
                      href={`mailto:${dir.email}`}
                      className="font-semibold text-[#003B99] hover:text-[#00A3E0] inline-flex items-center gap-1 transition-colors"
                      title={dir.email}
                    >
                      <Mail className="w-3 h-3" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================================= */}
        {/* 4. GOVERNANCE FOOTNOTE                                                  */}
        {/* ======================================================================= */}
        <div className="rounded-xl bg-slate-100/70 border border-slate-200/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#003B99] shrink-0" />
            <span className="font-medium text-slate-700">
              {GOVERNANCE.title} • Sponsored by {sponsoringClub}
            </span>
          </div>
          <span className="text-slate-500 text-[11px]">
            {district}
          </span>
        </div>

      </div>

    </div>
  );
}
