"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react";
import { useClub } from "@/context/ClubContext";

export default function FeaturedProjects() {
  const { club } = useClub();
  const projects = club.featuredProjects && club.featuredProjects.length > 0
    ? club.featuredProjects
    : [];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              SIGNATURE INITIATIVES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
              Featured Humanitarian Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-leo-cyan transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo banner */}
                <div className="relative h-60 overflow-hidden bg-[#061838]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-lg border shadow-xs ${p.categoryColor}`}>
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-leo-cyan" />
                      {p.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-leo-cyan" />
                      {p.location}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#111827] leading-snug group-hover:text-[#003B99] transition-colors line-clamp-2">
                    <Link href={`/projects/${p.slug}`}>
                      {p.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {p.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-7 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#003B99] bg-leo-cyan-light px-3 py-1.5 rounded-lg">
                  <Award className="w-3.5 h-3.5 text-leo-cyan" />
                  <span>{p.impactMetric}</span>
                </div>

                <Link
                  href={`/projects/${p.slug}`}
                  className="text-xs font-bold text-slate-700 hover:text-leo-cyan flex items-center gap-1 transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
