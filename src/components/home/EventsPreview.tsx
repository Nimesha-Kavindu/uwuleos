"use client";

import React, { useState } from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { useClub } from "@/context/ClubContext";

export default function EventsPreview() {
  const { club } = useClub();
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const events = club.upcomingEvents && club.upcomingEvents.length > 0
    ? club.upcomingEvents
    : [];

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
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Date & Category */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#003B99] text-white flex flex-col items-center justify-center font-heading leading-tight shrink-0 shadow-xs">
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
                  {event.description}
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
                  <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Registered
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setRegisteredEvent(event.id)}
                    className="px-4 py-2 text-xs font-bold text-white bg-leo-cyan hover:bg-leo-cyan-hover rounded-lg shadow-xs transition-colors"
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
