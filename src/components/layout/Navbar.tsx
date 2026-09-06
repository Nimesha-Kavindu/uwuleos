"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ExternalLink, User } from "lucide-react";
import { LeoEmblemSvg } from "@/components/ui/BrandingLogos";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [districtsOpen, setDistrictsOpen] = useState(false);
  const [causesOpen, setCausesOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-leo-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Authentic Brand Logo: "Leos of Sri Lanka & Maldives • INSPIRING LIVES" with Leo Lion Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-lg text-[#111827] tracking-tight group-hover:text-leo-blue transition-colors">
                  Leos of Sri Lanka & Maldives
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] uppercase font-extrabold tracking-[0.18em] text-leo-cyan">
                  • INSPIRING LIVES
                </span>
              </div>
            </div>
            <LeoEmblemSvg className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Nav Items matching reference */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-[#374151]">
            
            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 hover:text-leo-blue transition-colors"
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-leo-border p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/about"
                    className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl text-leo-charcoal hover:text-leo-blue font-medium"
                  >
                    Our Story & History
                  </Link>
                  <Link
                    href="/board"
                    className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl text-leo-charcoal hover:text-leo-blue font-medium"
                  >
                    Leadership & Executive Board
                  </Link>
                  <Link
                    href="/about#hierarchy"
                    className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl text-leo-charcoal hover:text-leo-blue font-medium"
                  >
                    LCI & MD 306 Hierarchy
                  </Link>
                </div>
              )}
            </div>

            {/* Districts */}
            <div
              className="relative"
              onMouseEnter={() => setDistrictsOpen(true)}
              onMouseLeave={() => setDistrictsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 hover:text-leo-blue transition-colors"
              >
                <span>Districts</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {districtsOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-leo-border p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Multiple District 306
                  </div>
                  <Link href="/about#districts" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    District 306 A1 • A2
                  </Link>
                  <Link href="/about#districts" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    District 306 B1 • B2
                  </Link>
                  <Link href="/about#districts" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    District 306 C1 • C2
                  </Link>
                </div>
              )}
            </div>

            {/* Our Causes */}
            <div
              className="relative"
              onMouseEnter={() => setCausesOpen(true)}
              onMouseLeave={() => setCausesOpen(false)}
            >
              <Link
                href="/projects"
                className="flex items-center gap-1 px-3 py-2 hover:text-leo-blue transition-colors"
              >
                <span>Our Causes</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {causesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-leo-border p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/projects?category=environment" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    Environment & Climate
                  </Link>
                  <Link href="/projects?category=hunger" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    Hunger Relief
                  </Link>
                  <Link href="/projects?category=vision" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    Vision & Health
                  </Link>
                  <Link href="/projects?category=youth" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    Youth Leadership
                  </Link>
                </div>
              )}
            </div>

            {/* News & Events */}
            <div
              className="relative"
              onMouseEnter={() => setNewsOpen(true)}
              onMouseLeave={() => setNewsOpen(false)}
            >
              <Link
                href="/events"
                className="flex items-center gap-1 px-3 py-2 hover:text-leo-blue transition-colors"
              >
                <span>News & Events</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {newsOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-leo-border p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link href="/events" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    Upcoming Events Calendar
                  </Link>
                  <Link href="/events#bulletins" className="block px-3 py-2 rounded-xl text-sm hover:bg-leo-pearl font-medium">
                    Quarterly E-Bulletins
                  </Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <Link
              href="/gallery"
              className="px-3 py-2 hover:text-leo-blue transition-colors"
            >
              Resources
            </Link>
          </nav>

          {/* Right Action Button: The signature "My Leo ↗" pill button directly from screenshot */}
          <div className="flex items-center gap-3">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-leo-cyan hover:bg-leo-cyan-hover text-white font-bold text-sm rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <User className="w-4 h-4 text-white" />
              <span>My Leo</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-leo-border px-4 py-4 space-y-2">
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl font-medium text-slate-800 hover:bg-slate-50">
            About Us
          </Link>
          <Link href="/board" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl font-medium text-slate-800 hover:bg-slate-50">
            Leadership
          </Link>
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl font-medium text-slate-800 hover:bg-slate-50">
            Our Causes
          </Link>
          <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl font-medium text-slate-800 hover:bg-slate-50">
            News & Events
          </Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl font-medium text-slate-800 hover:bg-slate-50">
            Resources & Gallery
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl font-medium text-slate-800 hover:bg-slate-50">
            Contact
          </Link>
          <div className="pt-2">
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-leo-cyan text-white font-bold text-sm rounded-full block shadow-md"
            >
              Join Us / My Leo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
