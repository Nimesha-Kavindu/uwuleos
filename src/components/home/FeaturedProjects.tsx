"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react";

const PROJECTS = [
  {
    id: "proj-1",
    slug: "haritha-dharani-island-green",
    title: "Project Haritha Dharani: 50,000 Mangrove & Coastal Reforestation",
    category: "Environment",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
    summary: "A nationwide coastal mangrove conservation drive restoring over 25 hectares of critical wetland ecosystems across Kalpitiya, Negombo, and Mannar.",
    metric: "52,400 Trees Planted",
    date: "Aug 2024",
    location: "Coastal Belt, Sri Lanka",
  },
  {
    id: "proj-2",
    slug: "sight-first-schools",
    title: "Sight For Youth: Nationwide School Vision & Spectacle Drive",
    category: "Healthcare",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    summary: "Screening over 15,000 rural primary school students and providing high-quality custom prescription spectacles free of charge.",
    metric: "3,200 Glasses Donated",
    date: "Oct 2024",
    location: "Central & Uva Provinces",
  },
  {
    id: "proj-3",
    slug: "suwa-diviya-hunger-relief",
    title: "Project Suwa Diviya: Zero-Hunger Community Kitchens",
    category: "Hunger Relief",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    summary: "Delivering wholesome nutritious hot meals and essential dry ration packages to underserved urban families and elder care centers.",
    metric: "28,000+ Meals Served",
    date: "Sep 2024",
    location: "Western & Southern Districts",
  },
];

export default function FeaturedProjects() {
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
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border shadow-xs ${p.badgeClass}`}>
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
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#003B99] bg-leo-cyan-light px-3 py-1.5 rounded-full">
                  <Award className="w-3.5 h-3.5 text-leo-cyan" />
                  <span>{p.metric}</span>
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
