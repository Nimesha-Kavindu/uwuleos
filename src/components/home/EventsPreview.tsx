"use client";

import React, { useState } from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const EVENTS = [
  {
    id: "ev-1",
    title: "Leo Multiple District Annual Youth Leadership Summit 2025",
    date: "March 22, 2025",
    day: "22",
    month: "MAR",
    time: "09:00 AM - 05:00 PM",
    venue: "BMICH Main Hall, Colombo",
    category: "Conferences",
    desc: "The flagship national leadership conference gathering over 800 young delegates for workshops, keynote panels, and national project awards.",
  },
  {
    id: "ev-2",
    title: "Island-Wide Mega Blood & Plasma Donation Drive",
    date: "April 12, 2025",
    day: "12",
    month: "APR",
    time: "08:30 AM - 03:30 PM",
    venue: "National Blood Center & Regional Hospitals",
    category: "Healthcare",
    desc: "Join hands with 50+ Leo clubs across all districts to replenish critical blood reserves for national hospitals.",
  },
  {
    id: "ev-3",
    title: "Maldives Coral Restoration & Marine Fellowship Camp",
    date: "May 18, 2025",
    day: "18",
    month: "MAY",
    time: "Full Weekend Program",
    venue: "Kaafu Atoll, Republic of Maldives",
    category: "Environment",
    desc: "Cross-border fellowship event featuring underwater coral nursery transplantation and beach cleanup with local youth councils.",
  },
];

export default function EventsPreview() {
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F9FC] border-t border-[#EDF0F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              FELLOWSHIP & ACTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
              Upcoming Events & Calendar
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-leo-cyan transition-colors"
          >
            <span>View Full Calendar</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[24px] p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Date & Category */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#003B99] text-white flex flex-col items-center justify-center font-heading leading-tight shrink-0 shadow-xs">
                    <span className="text-xl font-extrabold">{event.day}</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-leo-cyan">
                      {event.month}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-leo-cyan uppercase tracking-wider block">
                      {event.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{event.date}</span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#111827] leading-snug hover:text-[#003B99] transition-colors">
                  {event.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {event.desc}
                </p>

                <div className="space-y-1.5 pt-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-leo-cyan shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-leo-cyan shrink-0" />
                    <span className="line-clamp-1">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                {registeredEvent === event.id ? (
                  <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Registered
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setRegisteredEvent(event.id)}
                    className="px-5 py-2 text-xs font-bold text-white bg-leo-cyan hover:bg-leo-cyan-hover rounded-full shadow-xs transition-colors"
                  >
                    RSVP / Register
                  </button>
                )}

                <Link
                  href="/events"
                  className="text-xs font-bold text-slate-600 hover:text-[#003B99] transition-colors"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
