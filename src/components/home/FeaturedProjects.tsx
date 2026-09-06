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
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              SERVICE IN ACTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight leading-tight">
              Signature Humanitarian Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-[#00A3E0] transition-colors self-start md:self-auto group"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Editorial Grid (1 Large Hero Feature + 2 Horizontal Stories) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Feature Spotlight (7 Columns) */}
          <article className="lg:col-span-7 bg-[#FAFAFC] rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-72 sm:h-96 overflow-hidden bg-slate-900">
              <img
                src={mainProject.image}
                alt={mainProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Category & Status */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                  {mainProject.category}
                </span>
                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-[#003B99] text-white shadow-xs">
                  FLAGSHIP INITIATIVE
                </span>
              </div>

              {/* Bottom Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-3 text-xs text-slate-200 mb-1 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{mainProject.location}</span>
                  </span>
                  <span>•</span>
                  <span>{mainProject.date}</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight">
                  <Link href={`/projects/${mainProject.slug}`} className="hover:text-cyan-200 transition-colors">
                    {mainProject.title}
                  </Link>
                </h3>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-7 sm:p-8 space-y-4 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {mainProject.summary}
              </p>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-[#003B99] text-xs font-bold">
                  <Award className="w-4 h-4 text-[#00A3E0]" />
                  <span>{mainProject.impactMetric}</span>
                </div>

                <Link
                  href={`/projects/${mainProject.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white font-bold text-xs rounded-xl shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* 2 Companion Horizontal Stories (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {secondaryProjects.map((p) => (
              <article
                key={p.id}
                className="bg-[#FAFAFC] rounded-2xl p-6 border border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 group"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-40 h-44 sm:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded-md bg-white/90 text-slate-900 backdrop-blur-xs">
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-1">
                      <MapPin className="w-3 h-3 text-[#00A3E0] shrink-0" />
                      <span className="truncate">{p.location}</span>
                    </div>

                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#111827] group-hover:text-[#003B99] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/projects/${p.slug}`}>
                        {p.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 mt-2 font-normal leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#003B99]">
                      {p.impactMetric}
                    </span>

                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-xs font-bold text-slate-700 group-hover:text-[#003B99] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Story</span>
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
