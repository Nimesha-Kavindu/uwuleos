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
  ShieldCheck,
  Award,
} from "lucide-react";

// Ultra-smooth easing counter hook
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            // Ease out expo for snappy, modern feel
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
    <span ref={elementRef} className="tabular-nums font-heading font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-[#003B99] tracking-tight leading-none">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const { club } = useClub();

  const STATS = [
    {
      id: "stat-1",
      target: 1,
      suffix: "",
      label: "University Club",
      tagline: "Chartered Chapter",
      detail: "District 306 C2 Flagship",
      icon: <GraduationCap className="w-5 h-5 text-[#003B99]" />,
    },
    {
      id: "stat-2",
      target: 150,
      suffix: "+",
      label: "Active Undergraduates",
      tagline: "4 UWU Faculties",
      detail: "100% Student-Led Volunteers",
      icon: <Users className="w-5 h-5 text-[#00A3E0]" />,
    },
    {
      id: "stat-3",
      target: 6500,
      suffix: "+",
      label: "Volunteer Hours",
      tagline: "Community Service",
      detail: "Fieldwork & Rural Relief",
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
    },
    {
      id: "stat-4",
      target: 60,
      suffix: "+",
      label: "Signature Projects",
      tagline: "Province-Wide Reach",
      detail: "Health, STEM & Green Uva",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-14 border-b border-slate-200">
          <div className="lg:col-span-7">
            <CyanBar width="w-10" height="h-1" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-[#003B99] uppercase tracking-wider mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3E0]"></span>
              </span>
              <span>VERIFIED SERVICE IMPACT</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#111827] tracking-tight leading-[1.15]">
              UWU Leos, in figures.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Where the Leo Club of Uva Wellassa University stands today in our mission of youth empowerment, leadership development, and community impact.
            </p>
            <div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#003B99] hover:text-[#00A3E0] transition-colors group"
              >
                <span>Discover project impact reports</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Seamless Integrated 4-Stat Strip (No separate boxes!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 py-10">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`py-8 sm:py-4 transition-all duration-300 group ${
                idx === 0
                  ? "sm:pr-8"
                  : idx === STATS.length - 1
                  ? "sm:pl-8"
                  : "sm:px-8"
              }`}
            >
              {/* Micro-Icon + Tag */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 group-hover:text-[#003B99] transition-colors flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.tagline}
                </span>
              </div>

              {/* Big Animated Number */}
              <div className="mb-3 group-hover:translate-x-1 transition-transform">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="font-heading font-bold text-lg text-[#111827] leading-snug">
                {stat.label}
              </h3>

              {/* Detail */}
              <p className="text-xs text-slate-500 mt-1 font-normal">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Minimalist Summary Pill Ribbon */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#003B99]" />
            <span className="font-semibold text-slate-800">Leo District 306 C2, Sri Lanka</span>
            <span className="text-slate-400">•</span>
            <span>Sponsoring Lions Club of Badulla</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <span className="text-slate-700"><strong>14</strong> Rural Schools</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-700"><strong>800+</strong> Blood Pints</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-700"><strong>2,500+</strong> Trees</span>
          </div>
        </div>

      </div>
    </section>
  );
}
