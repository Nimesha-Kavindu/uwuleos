"use client";

import React from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import {
  TreePine,
  Utensils,
  Eye,
  GraduationCap,
  Ribbon,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    id: "environment",
    title: "Environment & Climate Action",
    tagline: "Preserving Island Ecosystems",
    desc: "Tree plantation drives, coastal mangrove restoration, and clean beach campaigns across Sri Lanka and the Maldives.",
    icon: TreePine,
    color: "emerald",
    bgClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    id: "vision",
    title: "Vision Care & Screening",
    tagline: "Restoring Sight in Rural Schools",
    desc: "Free comprehensive pediatric eye screening camps, spectacles distribution, and cataract surgery sponsorships.",
    icon: Eye,
    color: "blue",
    bgClass: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    id: "hunger",
    title: "Hunger Relief & Nutrition",
    tagline: "Combating Food Insecurity",
    desc: "Delivering wholesome meals, dry ration packs, and school nutritional support for underserved families.",
    icon: Utensils,
    color: "amber",
    bgClass: "bg-amber-50 text-amber-700 border-amber-100",
  },
  {
    id: "youth",
    title: "Youth Leadership & Education",
    tagline: "Empowering Next-Gen Leaders",
    desc: "Executive public speaking academies, career mentorship summits, and rural smart-classroom infrastructure.",
    icon: GraduationCap,
    color: "indigo",
    bgClass: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    id: "cancer",
    title: "Childhood Cancer Support",
    tagline: "Standing with Young Fighters",
    desc: "Pediatric oncology ward upliftment, essential medicines funding, and patient happiness initiatives.",
    icon: Ribbon,
    color: "rose",
    bgClass: "bg-rose-50 text-rose-700 border-rose-100",
  },
  {
    id: "relief",
    title: "Disaster Emergency Aid",
    tagline: "Rapid Humanitarian Response",
    desc: "Emergency relief packages and clean water supply during floods, landslides, and island crises.",
    icon: ShieldAlert,
    color: "cyan",
    bgClass: "bg-cyan-50 text-cyan-700 border-cyan-100",
  },
];

export default function CausesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F9FC] border-t border-[#EDF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              WHERE WE SERVE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
              Our Core Service Pillars
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-leo-cyan transition-colors"
          >
            <span>Explore All Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="group bg-white rounded-[24px] p-8 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${p.bgClass} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-leo-cyan mb-1.5">
                    {p.tagline}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#111827] mb-3 group-hover:text-[#003B99] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/projects?category=${p.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#003B99] group-hover:text-leo-cyan transition-colors"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
