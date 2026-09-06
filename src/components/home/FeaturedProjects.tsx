"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, MapPin, Award, ArrowUpRight } from "lucide-react";
import { useClub } from "@/context/ClubContext";

export default function FeaturedProjects() {
  const { club } = useClub();
  const projects = club.featuredProjects && club.featuredProjects.length > 0
    ? club.featuredProjects
    : [];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
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
            className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-leo-cyan transition-colors self-start md:self-auto"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Cohesive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-[#FAFAFC] rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Photo Banner with subtle overflow */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Category Pill */}
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-lg bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-3.5">
                  {/* Location & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-leo-cyan shrink-0" />
                      <span className="truncate max-w-[180px]">{p.location}</span>
                    </span>
                    <span className="text-slate-400 font-normal">{p.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#111827] leading-snug group-hover:text-[#003B99] transition-colors line-clamp-2">
                    <Link href={`/projects/${p.slug}`}>
                      {p.title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {p.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer: Impact & Action */}
              <div className="p-7 pt-0">
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#003B99]">
                    <Award className="w-4 h-4 text-leo-cyan shrink-0" />
                    <span>{p.impactMetric}</span>
                  </div>

                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-[#003B99] transition-colors group/link"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
