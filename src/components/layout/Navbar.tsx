"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  TreePine,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Calendar,
  Image as ImageIcon,
  PhoneCall,
} from "lucide-react";
import { LeoEmblemSvg } from "@/components/ui/BrandingLogos";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [causesOpen, setCausesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic scroll listener for compact glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          
          {/* Brand Logo & Lockup */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group whitespace-nowrap">
            <div className="relative">
              <LeoEmblemSvg className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform duration-200 drop-shadow-xs" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-[17px] lg:text-[19px] text-[#111827] tracking-tight group-hover:text-[#003B99] transition-colors whitespace-nowrap">
                Leo Club of UWU
              </span>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600 border border-slate-200/60 tracking-wider uppercase">
                District 306 C2
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[14px] font-semibold text-slate-700 shrink-0">
            
            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#003B99] hover:bg-slate-50 transition-all duration-150 whitespace-nowrap"
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180 text-[#003B99]" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-1">
                  <Link
                    href="/about"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B99] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#003B99] group-hover/item:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Our Story & Heritage</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Campus roots and history</div>
                    </div>
                  </Link>

                  <Link
                    href="/board"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Executive Board</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Leistic year 2024/2025 leaders</div>
                    </div>
                  </Link>

                  <Link
                    href="/about#lions-history"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-amber-600 group-hover/item:text-white transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Lions Sponsorship</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Lions Club of Badulla & 306 C2</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Our Causes Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCausesOpen(true)}
              onMouseLeave={() => setCausesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#003B99] hover:bg-slate-50 transition-all duration-150 whitespace-nowrap"
              >
                <span>Our Causes</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    causesOpen ? "rotate-180 text-[#003B99]" : ""
                  }`}
                />
              </button>

              {causesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-1">
                  <Link
                    href="/projects?category=education"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Education & Rural Schools</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Project Sipnana & learning aid</div>
                    </div>
                  </Link>

                  <Link
                    href="/projects?category=environment"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                      <TreePine className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Green Uva & Reforestation</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Central Highlands conservation</div>
                    </div>
                  </Link>

                  <Link
                    href="/projects?category=healthcare"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-rose-600 group-hover/item:text-white transition-colors">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Health & Blood Donation</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Annual mega blood donation drives</div>
                    </div>
                  </Link>

                  <Link
                    href="/projects?category=youth"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Youth & Leadership Skills</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Undergraduate skill summits</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Projects Link */}
            <Link
              href="/projects"
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#003B99] hover:bg-slate-50 transition-all duration-150 whitespace-nowrap"
            >
              Projects
            </Link>

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#003B99] hover:bg-slate-50 transition-all duration-150 whitespace-nowrap"
              >
                <span>Events</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    eventsOpen ? "rotate-180 text-[#003B99]" : ""
                  }`}
                />
              </button>

              {eventsOpen && (
                <div className="absolute top-full left-0 w-68 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-1">
                  <Link
                    href="/events"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">Upcoming Events</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Workshops, camps & ceremonies</div>
                    </div>
                  </Link>

                  <Link
                    href="/events#bulletins"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-[#003B99] transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">E-Bulletins & News</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">Quarterly publications</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Gallery Link */}
            <Link
              href="/gallery"
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#003B99] hover:bg-slate-50 transition-all duration-150 whitespace-nowrap"
            >
              Gallery
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#003B99] hover:bg-slate-50 transition-all duration-150 whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/join"
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white font-bold text-sm rounded-xl shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span>Join UWU Leos</span>
              <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-4 space-y-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003B99]"
          >
            <BookOpen className="w-4 h-4 text-leo-cyan" />
            <span>About Us & Heritage</span>
          </Link>
          <Link
            href="/board"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003B99]"
          >
            <Users className="w-4 h-4 text-leo-cyan" />
            <span>Executive Board</span>
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003B99]"
          >
            <TreePine className="w-4 h-4 text-leo-cyan" />
            <span>Our Causes & Projects</span>
          </Link>
          <Link
            href="/events"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003B99]"
          >
            <Calendar className="w-4 h-4 text-leo-cyan" />
            <span>News & Events</span>
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003B99]"
          >
            <ImageIcon className="w-4 h-4 text-leo-cyan" />
            <span>Media Gallery</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003B99]"
          >
            <PhoneCall className="w-4 h-4 text-leo-cyan" />
            <span>Contact</span>
          </Link>
          <div className="pt-3">
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-gradient-to-r from-[#003B99] to-[#00A3E0] text-white font-bold text-sm rounded-xl block shadow-md transition-all duration-200"
            >
              Join UWU Leos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
