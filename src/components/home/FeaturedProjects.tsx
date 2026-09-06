"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, MapPin, Award, Calendar, ArrowUpRight } from "lucide-react";
import { useClub } from "@/context/ClubContext";

export default function FeaturedProjects() {
  const { club } = useClub();
  const projects = club.featuredProjects && club.featuredProjects.length > 0
    ? club.featuredProjects
    : [];

  const mainProject = projects[0];
  const secondaryProjects = projects.slice(1);

  if (!mainProject) return null;

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Header: Fully Populated Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-end justify-between mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-100">
          <div className="lg:col-span-7">
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-1.5 sm:mb-2">
              SERVICE IN ACTION
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111827] tracking-tight leading-tight">
              Signature Humanitarian Projects
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              Sustainable initiatives organized by UWU undergraduates across Uva Province.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#003B99] hover:text-[#00A3E0] transition-colors shrink-0 group py-1"
            >
              <span>Explore All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Editorial Grid (Left: 7 Cols Main Spotlight | Right: 5 Cols Evenly Filled Companion Stories) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Feature Spotlight (7 Columns) */}
          <article className="lg:col-span-7 bg-[#FAFAFC] rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden bg-slate-900">
                <img
                  src={mainProject.image}
                  alt={mainProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                {/* Category & Status */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold rounded-md bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                    {mainProject.category}
                  </span>
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold rounded-md bg-[#003B99] text-white shadow-xs">
                    FLAGSHIP
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-200 mb-1 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{mainProject.location}</span>
                    </span>
                    <span>•</span>
                    <span>{mainProject.date}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-2xl lg:text-3xl leading-tight">
                    <Link href={`/projects/${mainProject.slug}`} className="hover:text-cyan-200 transition-colors">
                      {mainProject.title}
                    </Link>
                  </h3>
                </div>
              </div>

              {/* Summary */}
              <div className="p-4 sm:p-7">
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                  {mainProject.summary}
                </p>
              </div>
            </div>

            {/* Bottom Impact & Action Bar */}
            <div className="p-4 sm:p-7 pt-0">
              <div className="pt-3 sm:pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 text-[#003B99] text-xs font-bold self-start sm:self-auto">
                  <Award className="w-4 h-4 text-[#00A3E0]" />
                  <span>{mainProject.impactMetric}</span>
                </div>

                <Link
                  href={`/projects/${mainProject.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white font-bold text-xs rounded-xl shadow-xs hover:shadow-md transition-all duration-200 text-center w-full sm:w-auto"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* 2 Companion Horizontal Stories (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {secondaryProjects.map((p) => (
              <article
                key={p.id}
                className="flex-1 bg-[#FAFAFC] rounded-xl p-4 sm:p-6 border border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-3.5 sm:gap-5 group justify-between"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-44 h-40 sm:h-auto rounded-lg overflow-hidden shrink-0 bg-slate-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold rounded-md bg-white/90 text-slate-900 backdrop-blur-xs shadow-xs">
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-500 font-medium mb-1">
                      <MapPin className="w-3 h-3 text-[#00A3E0] shrink-0" />
                      <span className="truncate">{p.location}</span>
                    </div>

                    <h4 className="font-heading font-extrabold text-sm sm:text-base lg:text-lg text-[#111827] group-hover:text-[#003B99] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/projects/${p.slug}`}>
                        {p.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 sm:line-clamp-3 mt-1 sm:mt-1.5 font-normal leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#003B99]">
                      {p.impactMetric}
                    </span>

                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs font-bold text-slate-700 group-hover:text-[#003B99] inline-flex items-center gap-1 transition-colors py-1"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
