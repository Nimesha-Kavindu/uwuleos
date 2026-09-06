"use client";

import React, { useState } from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import { Mail, Globe, Award, ShieldCheck, User } from "lucide-react";

export default function BoardPage() {
  const { club } = useClub();
  const [activeTab, setActiveTab] = useState<"all" | "top-table" | "director">("all");

  const filteredMembers = club.boardMembers.filter((m) => {
    if (activeTab === "all") return true;
    return m.roleCategory === activeTab;
  });

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-leo-pearl via-white to-white py-16 lg:py-24 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <CyanBar />
            <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
              EXECUTIVE COMMITTEE
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-leo-charcoal tracking-tight leading-tight mb-6">
              The Young Leaders Behind {club.shortName}
            </h1>
            <p className="text-lg text-leo-slate leading-relaxed">
              Meet our dedicated Executive Board guiding our club's service missions, fellowship programs, and youth empowerment initiatives for the current Leistic Year.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 border-b border-leo-border pb-6 mb-12 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === "all"
                  ? "bg-leo-blue text-white shadow-md"
                  : "bg-leo-pearl text-leo-charcoal hover:bg-leo-pearl-dark"
              }`}
            >
              All Leaders ({club.boardMembers.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("top-table")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === "top-table"
                  ? "bg-leo-blue text-white shadow-md"
                  : "bg-leo-pearl text-leo-charcoal hover:bg-leo-pearl-dark"
              }`}
            >
              Top Table Officers
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("director")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === "director"
                  ? "bg-leo-blue text-white shadow-md"
                  : "bg-leo-pearl text-leo-charcoal hover:bg-leo-pearl-dark"
              }`}
            >
              Directors & Committee Chairs
            </button>
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-3xl border border-leo-border overflow-hidden shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Portrait photo */}
                  <div className="relative h-72 overflow-hidden bg-leo-dark">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-leo-dark/80 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-leo-cyan text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        {member.designation}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-extrabold text-xl text-leo-charcoal group-hover:text-leo-blue transition-colors">
                      {member.name}
                    </h3>
                    
                    {member.motto && (
                      <p className="text-xs text-leo-slate italic leading-relaxed">
                        "{member.motto}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-6 pt-0 border-t border-leo-border/60 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-full bg-leo-pearl hover:bg-leo-blue hover:text-white text-leo-slate flex items-center justify-center transition-colors"
                        title={member.email}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-leo-pearl hover:bg-leo-cyan hover:text-white text-leo-slate flex items-center justify-center transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-leo-slate uppercase tracking-wider">
                    {club.district}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advisory & Guiding Lions Section */}
      <section className="py-16 bg-leo-pearl border-t border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-leo-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-leo-gold font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Mentorship & Governance
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-leo-charcoal">
                Guided by Sponsoring Lions Advisors
              </h3>
              <p className="text-sm text-leo-slate leading-relaxed">
                Our Leo leaders work in close synergy with experienced Guiding Lions and Leo-Lion Advisors from our sponsoring Lions Club, ensuring operational excellence, ethical stewardship, and seamless project execution.
              </p>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-leo-gold/10 border-2 border-leo-gold flex items-center justify-center font-extrabold text-3xl shrink-0">
              🦁
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
