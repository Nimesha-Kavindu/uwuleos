"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CyanBar from "@/components/ui/CyanBar";
import { useClub } from "@/context/ClubContext";
import {
  GraduationCap,
  Users,
  Clock,
  HeartHandshake,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Award,
  Layers,
  ShieldCheck,
} from "lucide-react";

// Ultra-smooth easing counter hook
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out expo for snappy, ultra-modern feel
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(easeOut * target);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <span ref={elementRef} className="tabular-nums font-extrabold tracking-tight">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const { club } = useClub();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const IMPACT_CARDS = [
    {
      id: 1,
      index: "01",
      target: 1,
      suffix: "",
      prefix: "",
      title: "University Club",
      tagline: "District 306 C2 Flagship",
      description: "Chartered Leo Club uniting student leaders from Uva Wellassa University.",
      icon: <GraduationCap className="w-5 h-5 text-[#003B99]" />,
      pill: "Est. 2018",
      accentGradient: "from-blue-600 to-cyan-500",
      statsBreakdown: "Sponsored by Lions Club of Badulla",
    },
    {
      id: 2,
      index: "02",
      target: 150,
      suffix: "+",
      prefix: "",
      title: "Active Undergraduates",
      tagline: "4 Academic Faculties",
      description: "Dedicated members across FAS, FST, Management & Animal Science faculties.",
      icon: <Users className="w-5 h-5 text-cyan-600" />,
      pill: "100% Student-Led",
      accentGradient: "from-cyan-500 to-blue-600",
      statsBreakdown: "FAS • FST • MGT • TEA",
    },
    {
      id: 3,
      index: "03",
      target: 6500,
      suffix: "+",
      prefix: "",
      title: "Volunteer Hours",
      tagline: "Hands-on Community Work",
      description: "Direct fieldwork in rural school upliftment, healthcare, and nature conservation.",
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      pill: "Direct Service",
      accentGradient: "from-indigo-600 to-cyan-500",
      statsBreakdown: "+140 Hours Logged This Month",
    },
    {
      id: 4,
      index: "04",
      target: 60,
      suffix: "+",
      prefix: "",
      title: "Signature Projects",
      tagline: "Province-Wide Reach",
      description: "Sustainable humanitarian initiatives executed across Badulla, Passara & beyond.",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
      pill: "High Impact",
      accentGradient: "from-emerald-600 to-teal-500",
      statsBreakdown: "12,000+ Community Beneficiaries",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#FAFBFC] border-t border-slate-200/80 overflow-hidden">
      
      {/* Minimal background ambient gradients */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Modern Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-bold text-[#003B99] mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3E0]"></span>
              </span>
              <span className="tracking-wider uppercase text-[11px]">Impact &amp; Verified Reach</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#111827] tracking-tight leading-tight">
              UWU Leos, in figures.
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-2 font-normal">
              Where the Leo Club of Uva Wellassa University stands today in our mission of service and youth empowerment.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-cyan-600 transition-colors self-start md:self-auto py-1"
          >
            <span>View All Project Reports</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Minimal Modern Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_CARDS.map((card, idx) => {
            const isHovered = activeCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-2 cursor-default ${
                  isHovered
                    ? "border-[#003B99]/30 ring-2 ring-[#00A3E0]/10"
                    : "border-slate-200/90 hover:border-slate-300"
                }`}
              >
                {/* Top Subtle Animated Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accentGradient} transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div>
                  {/* Top Card Bar: Index & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                      {card.index}
                    </span>

                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:shadow-xs transition-all duration-300">
                      {card.icon}
                    </div>
                  </div>

                  {/* Big Bold Animated Number */}
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#111827] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#003B99] group-hover:to-[#00A3E0] transition-all duration-300 leading-none mb-3">
                    <AnimatedCounter
                      target={card.target}
                      suffix={card.suffix}
                      prefix={card.prefix}
                    />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-bold text-base text-[#111827] leading-snug">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {card.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mt-3 font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Micro-Badge */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                    {card.pill}
                  </span>
                  
                  <span className="text-slate-400 group-hover:text-[#003B99] transition-colors flex items-center gap-1 font-mono text-[10px]">
                    <span>{card.statsBreakdown}</span>
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Minimal Bottom Trust & Pillar Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B99] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-slate-800">Leo District 306 C2, Sri Lanka</span>
              <span className="text-slate-500 block">Sponsoring Lions Club: Lions Club of Badulla</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              14 Rural Schools Uplifted
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              800+ Pints Blood Donated
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              2,500+ Trees Planted
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
