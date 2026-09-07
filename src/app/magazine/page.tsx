"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Download,
  ExternalLink,
  Calendar,
  FileText,
  Sparkles,
  Search,
  CheckCircle2,
  ArrowRight,
  Bookmark,
  Share2,
  Send,
  Feather,
} from "lucide-react";

// Magazine Editions Data
const MAGAZINES = [
  {
    id: "mag-1",
    title: "ROAR: The Official Leistic Annual Magazine",
    edition: "Volume 06 • Leistic Year 2024/2025",
    category: "Annual Flagship",
    date: "December 2024",
    pages: "52 Pages",
    directorate: "Directorate of PR & Media",
    editor: "Leo Editorial Board — Uva Wellassa University",
    summary: "The flagship annual retrospective chronicling university humanitarian missions, leadership milestones, rural community transformations, and undergraduate creative essays.",
    highlights: [
      "Presidential Retrospective: The 2024 Service Roadmap",
      "Special Feature: 100+ Hours in Passara Rural Classrooms",
      "Voices of Uva: Undergraduate Poetry and Research Articles",
      "District 306 C2 Fellowship & Twin Club Collaborations"
    ],
    isFeatured: true,
  },
  {
    id: "mag-2",
    title: "Project Sipnana: Rural Education Special Gazette",
    edition: "Special Impact Report • Issue 03",
    category: "Special Issue",
    date: "October 2024",
    pages: "36 Pages",
    directorate: "Directorate of Education & STEM",
    editor: "Project Sipnana Committee",
    summary: "A comprehensive photographic case study and student evaluation report detailing school library restorations and rural STEM labs established in Badulla.",
    highlights: [
      "Field Reports from 4 Primary Education Zones",
      "STEM Workshop Curriculums & Student Feedback",
      "Donor Transparency & Financial Allocation Ledger"
    ],
    isFeatured: false,
  },
  {
    id: "mag-3",
    title: "Green Uva Chronicle: Central Highlands Eco-Bulletin",
    edition: "Conservation Edition • Vol 02",
    category: "Environment",
    date: "August 2024",
    pages: "28 Pages",
    directorate: "Directorate of Environmental Conservation",
    editor: "Green Uva Environmental Cell",
    summary: "Dedicated to the biodiversity preservation of Namunukula ridge and Ella eco-trails, featuring native flora catalogs and catchment water table research.",
    highlights: [
      "Flora & Fauna of Namunukula Catchment Areas",
      "Soil Erosion Mitigation via Kumbuk Tree Planting",
      "Campus Green Audit: Moving Towards Zero Single-Use Plastics"
    ],
    isFeatured: false,
  },
  {
    id: "mag-4",
    title: "The Leo Pulse: Quarterly District Dispatch",
    edition: "Quarterly Bulletin • Q2 2024",
    category: "Quarterly Bulletin",
    date: "June 2024",
    pages: "24 Pages",
    directorate: "Directorate of Member Development",
    editor: "Secretarial & Media Wing",
    summary: "A crisp quarterly gazette covering new member induction ceremonies, executive assembly resolutions, and inter-university fellowship retreats.",
    highlights: [
      "Induction of 40+ First-Year Undergraduates",
      "Leadership Bootcamp Workshops & Public Speaking Drills",
      "Upcoming Multi-District 306 Convention Agenda"
    ],
    isFeatured: false,
  },
];

export default function MagazinePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["all", "Annual Flagship", "Special Issue", "Environment", "Quarterly Bulletin"];

  const filteredMagazines = MAGAZINES.filter((mag) => {
    const matchesSearch =
      mag.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mag.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mag.edition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "all" || mag.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleShare = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900">
      
      {/* 1. Header */}
      <section className="bg-white border-b border-slate-200/80 pt-14 pb-8 sm:pt-16 sm:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-medium text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003B99]" />
              <span>District 306 C2 • Publications &amp; Editorial</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Leo Magazine &amp; Publications
            </h1>

            <p className="text-slate-500 text-sm leading-relaxed">
              Explore official annual periodicals, special project gazettes, and environmental bulletins published by the Leo Club of Uva Wellassa University.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Toolbar */}
      <section className="py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#003B99] text-white shadow-xs font-semibold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
                  }`}
                >
                  {cat === "all" ? `All Publications (${MAGAZINES.length})` : cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#003B99] focus:bg-white text-slate-800 placeholder:text-slate-400"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Magazine Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMagazines.map((mag) => (
            <article
              key={mag.id}
              className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
                mag.isFeatured ? "border-[#003B99]/30 bg-gradient-to-b from-blue-50/20 to-white" : "border-slate-200/80"
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003B99] border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-[#003B99] group-hover:text-white transition-colors duration-200">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#003B99] block">
                        {mag.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {mag.date} • {mag.pages}
                      </span>
                    </div>
                  </div>

                  {mag.isFeatured && (
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-[#003B99] border border-blue-200">
                      FLAGSHIP
                    </span>
                  )}
                </div>

                {/* Title & Volume */}
                <div>
                  <h2 className="text-lg font-bold text-slate-900 font-heading leading-snug group-hover:text-[#003B99] transition-colors">
                    {mag.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {mag.edition}
                  </p>
                </div>

                {/* Editorial Credit */}
                <div className="text-[11px] text-slate-500 font-medium pb-2 border-b border-slate-100 flex items-center gap-1.5">
                  <Feather className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{mag.editor}</span>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {mag.summary}
                </p>

                {/* Key Articles Checklist */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Featured Articles &amp; Excerpts
                  </span>
                  {mag.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#003B99] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Action Bar */}
              <div className="pt-5 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                
                <div className="flex items-center gap-2">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Opening "${mag.title}" in digital reader.`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#003B99] text-white font-bold hover:bg-[#002D7A] transition-colors shadow-xs"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Issue</span>
                  </a>

                  <a
                    href="#download-pdf"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Download triggered for "${mag.title}" (Digital PDF Archive).`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>PDF ({mag.pages})</span>
                  </a>
                </div>

                <button
                  onClick={() => handleShare(mag.id)}
                  className="text-slate-400 hover:text-[#003B99] p-1.5 rounded-lg hover:bg-slate-50 transition-colors text-xs inline-flex items-center gap-1 font-medium"
                  title="Share publication"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedId === mag.id ? "Link Copied!" : "Share"}</span>
                </button>

              </div>

            </article>
          ))}
        </div>

        {/* 4. Undergrad Article Submission Callout */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#003B99]">
              <Feather className="w-3.5 h-3.5" />
              <span>Call for Undergraduate Submissions</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Write for the Next Edition of ROAR Magazine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Are you a UWU undergraduate with a passion for creative writing, community research, poetry, or photography? Submit your drafts to the Leo Editorial Board for the upcoming Leistic issue.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Draft / Article</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
