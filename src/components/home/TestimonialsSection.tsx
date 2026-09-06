"use client";

import React from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { club } = useClub();

  return (
    <section className="py-20 bg-white border-t border-leo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center">
            <CyanBar />
          </div>
          <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
            VOICES OF SERVICE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-leo-charcoal tracking-tight">
            Stories of Growth & Fellowship
          </h2>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {club.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-leo-pearl rounded-3xl p-8 sm:p-10 border border-leo-border relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-leo-cyan/30 absolute top-6 right-8" />
              
              <blockquote className="text-leo-charcoal text-base sm:text-lg leading-relaxed italic mb-8 relative z-10">
                "{item.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-leo-border/60">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-leo-cyan"
                />
                <div>
                  <div className="font-heading font-bold text-sm text-leo-charcoal">
                    {item.author}
                  </div>
                  <div className="text-xs text-leo-slate font-medium">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
