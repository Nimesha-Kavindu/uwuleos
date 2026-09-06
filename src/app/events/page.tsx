"use client";

import React, { useState } from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import { Calendar, Clock, MapPin, Download, CheckCircle2, FileText } from "lucide-react";

export default function EventsPage() {
  const { club } = useClub();
  const [activeTab, setActiveTab] = useState<"upcoming" | "bulletins">("upcoming");
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-leo-pearl via-white to-white py-16 lg:py-24 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <CyanBar />
            <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
              FELLOWSHIP & CONFERENCES
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-leo-charcoal tracking-tight leading-tight mb-6">
              News, Events & Official Publications
            </h1>
            <p className="text-lg text-leo-slate leading-relaxed">
              Stay connected with upcoming service galas, leadership summits, installation ceremonies, and download our quarterly e-bulletins.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-[#003B99] to-[#00A3E0] text-white shadow-xs"
                  : "bg-leo-pearl text-leo-charcoal hover:bg-slate-100"
              }`}
            >
              Upcoming Events Calendar
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("bulletins")}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "bulletins"
                  ? "bg-gradient-to-r from-[#003B99] to-[#00A3E0] text-white shadow-xs"
                  : "bg-leo-pearl text-leo-charcoal hover:bg-slate-100"
              }`}
            >
              E-Bulletins & Magazines
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeTab === "upcoming" ? (
            <div className="space-y-6">
              {club.upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-leo-border shadow-xs hover:shadow-card transition-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-6">
                    {/* Date Block */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#003B99] text-white flex flex-col items-center justify-center font-heading shrink-0 shadow-xs">
                      <span className="text-2xl sm:text-3xl font-extrabold">{event.day}</span>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-leo-cyan">
                        {event.month}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block px-3 py-1 rounded-lg bg-leo-cyan-light text-[#003B99] text-[11px] font-bold uppercase tracking-wider">
                        {event.category}
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-leo-charcoal">
                        {event.title}
                      </h3>
                      <p className="text-sm text-leo-slate max-w-2xl">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-leo-slate pt-1">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-leo-cyan" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-leo-cyan" />
                          {event.venue}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    {registeredEvent === event.id ? (
                      <div className="px-6 py-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Registered</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setRegisteredEvent(event.id)}
                        className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white rounded-xl font-bold text-xs shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Register for Event
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: `${club.shortName} Annual Review & Chronicle`,
                  issue: "Volume 14 • Issue 2",
                  pages: "48 Pages",
                  size: "8.4 MB",
                },
                {
                  title: "The Roar: UWU Youth Leadership Quarterly",
                  issue: "Q3 Edition",
                  pages: "24 Pages",
                  size: "4.2 MB",
                },
                {
                  title: "Charter Anniversary Commemorative Chronicle",
                  issue: "Special Edition",
                  pages: "36 Pages",
                  size: "6.1 MB",
                },
              ].map((bulletin, idx) => (
                <div
                  key={idx}
                  className="bg-leo-pearl rounded-2xl p-6 border border-leo-border flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#003B99] text-white flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-leo-charcoal">
                      {bulletin.title}
                    </h3>
                    <div className="text-xs text-leo-slate space-y-1">
                      <div>{bulletin.issue}</div>
                      <div>{bulletin.pages} • PDF ({bulletin.size})</div>
                    </div>
                  </div>

                  <a
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-gradient-to-r hover:from-[#003B99] hover:to-[#00A3E0] hover:text-white text-leo-charcoal border border-leo-border rounded-xl font-bold text-xs transition-all duration-200 shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Document</span>
                  </a>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
