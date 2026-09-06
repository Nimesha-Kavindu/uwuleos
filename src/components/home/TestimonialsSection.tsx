"use client";

import React from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";

export default function TestimonialsSection() {
  const { club } = useClub();
  const testimonials = club.testimonials && club.testimonials.length > 0 ? club.testimonials : [];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <CyanBar width="w-10" height="h-1" />
          <span className="block text-[11px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">
            MEMBER REFLECTIONS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] tracking-tight leading-tight">
            What It Means to Be a UWU Leo
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mt-3 font-normal">
            Reflections from undergraduates and advisors on finding purpose, building lifelong leadership skills, and serving communities across Uva Province.
          </p>
        </div>

        {/* Human Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAFC] rounded-2xl p-7 sm:p-8 border border-slate-200/90 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Project / Role Tag */}
                {item.tag && (
                  <span className="inline-block text-[11px] font-semibold text-[#003B99] tracking-wider uppercase mb-4">
                    {item.tag}
                  </span>
                )}

                {/* Natural Pull Quote */}
                <p className="text-slate-800 text-[15px] sm:text-base leading-relaxed font-normal">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-200/70">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-sm text-[#111827] truncate">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-600 truncate">
                    {item.role}
                  </p>
                  {item.faculty && (
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {item.faculty}
                    </p>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
