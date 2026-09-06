"use client";

import React, { useState } from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { Clock, MapPin, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { useClub } from "@/context/ClubContext";

export default function EventsPreview() {
  const { club } = useClub();
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);

  const events = club.upcomingEvents && club.upcomingEvents.length > 0
    ? club.upcomingEvents
    : [];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F6FA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <CyanBar width="w-10" height="h-1" />
            <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
              FELLOWSHIP &amp; ACTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight">
              Upcoming Events Calendar
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-[#00A3E0] transition-colors group"
          >
            <span>View Full Leistic Calendar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Clean Interactive Agenda Schedule List (No floating individual cards!) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs divide-y divide-slate-200 overflow-hidden">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-50/80 transition-colors group"
            >
              {/* Left: Date + Event Details */}
              <div className="flex items-start sm:items-center gap-5 sm:gap-6 min-w-0">
                
                {/* Date Box */}
                <div className="w-16 h-16 rounded-2xl bg-[#003B99] text-white flex flex-col items-center justify-center font-heading shrink-0 shadow-xs group-hover:bg-[#002D7A] transition-colors">
                  <span className="text-2xl font-extrabold leading-none">{event.day}</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-300 mt-1">
                    {event.month}
                  </span>
                </div>

                {/* Event Main Text */}
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#003B99]">
                      {event.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#111827] group-hover:text-[#003B99] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal line-clamp-1 max-w-2xl">
                    {event.description}
                  </p>
                </div>

              </div>

              {/* Right: Time / Venue + RSVP Button */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 lg:gap-8 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <div className="space-y-1 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#00A3E0] shrink-0" />
                    <span className="truncate max-w-[200px]">{event.venue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {registeredEvent === event.id ? (
                    <span className="px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Registered
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRegisteredEvent(event.id)}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] rounded-xl shadow-xs hover:shadow transition-all duration-200 whitespace-nowrap"
                    >
                      RSVP / Register
                    </button>
                  )}

                  <Link
                    href="/events"
                    className="p-2 text-slate-400 hover:text-[#003B99] transition-colors"
                    title="View details"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
