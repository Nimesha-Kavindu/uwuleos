"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { LeoEmblemSvg } from "@/components/ui/BrandingLogos";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [causesOpen, setCausesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Single-Line Brand Lockup: [Leo Emblem] + [Leo Club of UWU] */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group whitespace-nowrap">
            <LeoEmblemSvg className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs" />
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg lg:text-xl text-[#111827] tracking-tight group-hover:text-leo-blue transition-colors whitespace-nowrap">
                Leo Club of UWU
              </span>
              <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-bold text-slate-600 border border-slate-200/60">
                306 C2
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items - strictly single-line */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-[#374151] shrink-0">
            
            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-leo-blue hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <span className="whitespace-nowrap">About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${aboutOpen ? "rotate-180 text-leo-blue" : ""}`} />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link
                    href="/about"
                    className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap"
                  >
                    Our Story & Campus Heritage
                  </Link>
                  <Link
                    href="/board"
                    className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap"
                  >
                    Executive Board & Officers
                  </Link>
                  <Link
                    href="/about#lions-history"
                    className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap"
                  >
                    Lions Sponsorship & 306 C2
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
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-leo-blue hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Our Causes</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${causesOpen ? "rotate-180 text-leo-blue" : ""}`} />
              </button>

              {causesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link href="/projects?category=education" className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap">
                    Education & Rural Schools
                  </Link>
                  <Link href="/projects?category=environment" className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap">
                    Green Uva & Reforestation
                  </Link>
                  <Link href="/projects?category=healthcare" className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap">
                    Health & Blood Donation
                  </Link>
                  <Link href="/projects?category=youth" className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap">
                    Youth & Leadership Skills
                  </Link>
                </div>
              )}
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              className="px-3 py-2 rounded-lg hover:text-leo-blue hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Projects
            </Link>

            {/* Events */}
            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-leo-blue hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <span className="whitespace-nowrap">News & Events</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${eventsOpen ? "rotate-180 text-leo-blue" : ""}`} />
              </button>

              {eventsOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link href="/events" className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap">
                    Upcoming Events
                  </Link>
                  <Link href="/events#bulletins" className="block px-3 py-2.5 rounded-xl text-sm hover:bg-slate-50 text-slate-700 hover:text-leo-blue font-medium transition-colors whitespace-nowrap">
                    Club Bulletins & News
                  </Link>
                </div>
              )}
            </div>

            {/* Gallery */}
            <Link
              href="/gallery"
              className="px-3 py-2 rounded-lg hover:text-leo-blue hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Gallery
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg hover:text-leo-blue hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTA Button - crisp rounded-lg */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/join"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-leo-cyan hover:bg-leo-cyan-hover text-white font-bold text-sm rounded-lg shadow-xs hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Join UWU Leos</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1.5 shadow-lg">
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-50">
            About Us
          </Link>
          <Link href="/board" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-50">
            Leadership & Executive Board
          </Link>
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-50">
            Our Causes & Projects
          </Link>
          <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-50">
            News & Events
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-50">
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-slate-800 hover:bg-slate-50">
            Contact
          </Link>
          <div className="pt-3">
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-leo-cyan text-white font-bold text-sm rounded-lg block shadow-sm hover:bg-leo-cyan-hover transition-colors"
            >
              Join UWU Leos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
