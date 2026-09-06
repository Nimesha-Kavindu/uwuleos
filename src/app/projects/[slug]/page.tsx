"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Award,
  Users,
  CheckCircle2,
  Heart,
  Share2,
} from "lucide-react";

export default function SingleProjectPage() {
  const params = useParams();
  const { club } = useClub();
  const slug = params?.slug as string;

  const project = club.featuredProjects.find((p) => p.slug === slug) || club.featuredProjects[0];

  return (
    <div className="bg-white">
      
      {/* Top Breadcrumb Header */}
      <section className="bg-leo-pearl py-6 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-leo-blue hover:text-leo-cyan uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Projects
          </Link>
        </div>
      </section>

      {/* Main Project Hero */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3.5 py-1 text-xs font-bold rounded-lg border shadow-xs ${project.categoryColor}`}>
              {project.category}
            </span>
            <span className="px-3 py-1 text-xs font-bold rounded-lg bg-leo-pearl text-leo-charcoal border border-leo-border/60">
              Status: {project.status}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-leo-charcoal tracking-tight leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-leo-slate border-y border-leo-border py-4">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-leo-cyan" />
              <strong>Executed:</strong> {project.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-leo-cyan" />
              <strong>Location:</strong> {project.location}
            </span>
            <span className="flex items-center gap-2 text-[#003B99] font-bold">
              <Award className="w-4 h-4 text-leo-cyan" />
              {project.impactMetric}
            </span>
          </div>

          {/* Featured Image Banner */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-leo-border bg-leo-dark h-96 sm:h-[480px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-8">
            
            {/* Left 2 Cols: Body Narrative */}
            <div className="lg:col-span-2 space-y-6 text-leo-slate leading-relaxed">
              <h3 className="font-heading font-extrabold text-2xl text-leo-charcoal">
                Project Overview & Scope
              </h3>
              <p>{project.summary}</p>

              <h4 className="font-heading font-bold text-xl text-leo-charcoal pt-4">
                Key Objectives Accomplished
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Direct mobilization of over 100+ youth volunteer hours across {club.district}.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Transparent allocation of humanitarian funds directly to community beneficiaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Sustainable long-term impact monitoring with local community leaders.</span>
                </li>
              </ul>
            </div>

            {/* Right Col: Quick Impact Card */}
            <div className="space-y-6">
              <div className="bg-leo-pearl rounded-2xl p-6 border border-leo-border space-y-4">
                <h4 className="font-heading font-bold text-base text-leo-charcoal">
                  Impact Highlights
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-leo-border/80">
                    <span className="text-leo-slate">Primary Beneficiaries</span>
                    <strong className="text-leo-charcoal">{project.impactMetric}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-leo-border/80">
                    <span className="text-leo-slate">Lead Organizing Unit</span>
                    <strong className="text-leo-charcoal">{club.shortName}</strong>
                  </div>
                  <div className="flex justify-between py-2 border-b border-leo-border/80">
                    <span className="text-leo-slate">Governing District</span>
                    <strong className="text-leo-charcoal">{club.district}</strong>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block w-full text-center py-3 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white rounded-xl font-bold text-xs shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Sponsor a Similar Initiative
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
