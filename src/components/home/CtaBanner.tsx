"use client";

import React from "react";
import Link from "next/link";
import { useClub } from "@/context/ClubContext";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export default function CtaBanner() {
  const { club } = useClub();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-leo-dark via-leo-navy to-leo-blue text-white p-10 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-leo-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-72 h-72 bg-leo-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-doodle-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-leo-cyan text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join the World's Premier Youth Service Network</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to Lead, Experience, and Serve with {club.shortName}?
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
              Unlock life-changing leadership opportunities, expand your global network, and make a tangible humanitarian difference in your community today.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-leo-cyan hover:bg-leo-cyan-hover text-white font-bold text-base rounded-full shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Become a Leo Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-full border border-white/20 transition-all duration-300"
              >
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Sponsor / Partner With Us</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
