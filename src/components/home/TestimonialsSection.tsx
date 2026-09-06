"use client";

import React, { useState } from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import { Quote, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const { club } = useClub();
  const testimonials = club.testimonials && club.testimonials.length > 0 ? club.testimonials : [];

  if (testimonials.length === 0) return null;

  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
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
          <p className="text-slate-600 text-base leading-relaxed mt-2 font-normal">
            Reflections from undergraduates and advisors on finding purpose, building lifelong leadership skills, and serving communities across Uva Province.
          </p>
        </div>

        {/* Editorial Split: 1 Large Pull-Quote Hero (7 cols) + 2 Clean Side Voices (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Editorial Hero Quote (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F4F6FA] rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden border border-slate-200/70">
            <Quote className="w-12 h-12 text-[#003B99]/15 absolute top-6 right-6 pointer-events-none" />

            <div>
              {featured.tag && (
                <span className="inline-block px-3 py-1 rounded-lg bg-blue-100/80 text-[#003B99] text-xs font-bold uppercase tracking-wider mb-6">
                  {featured.tag}
                </span>
              )}

              <p className="font-heading font-bold text-xl sm:text-2xl text-[#111827] leading-relaxed">
                “{featured.quote}”
              </p>
            </div>

            <div className="flex items-center gap-4 pt-8 mt-8 border-t border-slate-200">
              <img
                src={featured.avatar}
                alt={featured.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
              />
              <div>
                <h4 className="font-heading font-extrabold text-base text-[#111827]">
                  {featured.author}
                </h4>
                <p className="text-xs font-medium text-slate-600">
                  {featured.role}
                </p>
                {featured.faculty && (
                  <p className="text-[11px] text-[#003B99] font-semibold mt-0.5">
                    {featured.faculty}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* 2 Clean Side Voices (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((item) => (
              <div
                key={item.id}
                className="flex-1 p-7 rounded-2xl bg-[#FAFAFC] border border-slate-200/90 shadow-xs hover:bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  {item.tag && (
                    <span className="inline-block text-[10px] font-bold text-[#003B99] uppercase tracking-wider mb-3">
                      {item.tag}
                    </span>
                  )}
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    “{item.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 mt-5 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                  />
                  <div className="min-w-0">
                    <h5 className="font-heading font-bold text-sm text-[#111827] truncate">
                      {item.author}
                    </h5>
                    <p className="text-xs text-slate-500 truncate">
                      {item.role}
                    </p>
                    {item.faculty && (
                      <p className="text-[11px] text-slate-400 truncate">
                        {item.faculty}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
