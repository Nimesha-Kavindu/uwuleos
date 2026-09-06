"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import { Search, MapPin, Calendar, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const { club } = useClub();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(club.featuredProjects.map((p) => p.category.toLowerCase()))];

  const filteredProjects = club.featuredProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "all" || p.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-leo-pearl via-white to-white py-16 lg:py-24 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <CyanBar />
            <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
              OUR SERVICE FOOTPRINT
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-leo-charcoal tracking-tight leading-tight mb-6">
              Humanitarian Causes & Signature Projects
            </h1>
            <p className="text-lg text-leo-slate leading-relaxed">
              Explore how {club.shortName} actively touches lives through environment conservation, healthcare aid, hunger relief, and youth empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-leo-pearl/60 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold capitalize whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-leo-blue text-white shadow-sm"
                    : "bg-white text-leo-charcoal border border-leo-border hover:bg-leo-pearl"
                }`}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-leo-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white rounded-full border border-leo-border focus:outline-none focus:ring-2 focus:ring-leo-cyan"
            />
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-leo-slate">
              No projects match your search criteria. Try selecting "All Categories".
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group bg-white rounded-3xl border border-leo-border overflow-hidden shadow-card hover:shadow-card-hover transition-card flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-leo-dark">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full border shadow-sm ${project.categoryColor}`}>
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-[11px] font-bold rounded-full bg-white/90 text-leo-charcoal backdrop-blur-md shadow-sm">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-leo-slate">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-leo-cyan" />
                          {project.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-leo-cyan" />
                          {project.location}
                        </span>
                      </div>

                      <h2 className="font-heading font-bold text-xl text-leo-charcoal group-hover:text-leo-blue transition-colors line-clamp-2">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>

                      <p className="text-sm text-leo-slate line-clamp-3 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-leo-border/60 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-leo-blue bg-leo-cyan-light px-3 py-1.5 rounded-full">
                      <Award className="w-3.5 h-3.5 text-leo-cyan" />
                      <span>{project.impactMetric}</span>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-bold text-leo-charcoal hover:text-leo-cyan flex items-center gap-1 transition-colors"
                    >
                      <span>Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
