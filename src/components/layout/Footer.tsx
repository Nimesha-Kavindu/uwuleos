"use client";

import React from "react";
import Link from "next/link";
import { LeoEmblemSvg } from "@/components/ui/BrandingLogos";

export default function Footer() {
  return (
    <footer className="bg-[#051430] text-slate-400 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Emblem */}
        <div className="flex items-center gap-3">
          <LeoEmblemSvg className="w-9 h-9 shrink-0" />
          <div className="text-left">
            <span className="font-heading font-bold text-sm text-white block leading-tight">
              Leos of Sri Lanka &amp; Maldives
            </span>
            <span className="text-[11px] text-leo-cyan font-medium">
              Multiple District 306 • Affiliated with LCI
            </span>
          </div>
        </div>

        {/* Minimal Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/board" className="hover:text-white transition-colors">
            Leadership
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Causes
          </Link>
          <Link href="/events" className="hover:text-white transition-colors">
            Events
          </Link>
          <Link href="/join" className="hover:text-white transition-colors">
            Join Us
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Copyright & Email */}
        <div className="text-xs text-slate-400 text-center md:text-right">
          <div>&copy; {new Date().getFullYear()} Leo MD 306. All rights reserved.</div>
          <a
            href="mailto:secretariat@leomd306.org"
            className="text-[11px] text-leo-cyan hover:underline"
          >
            secretariat@leomd306.org
          </a>
        </div>

      </div>
    </footer>
  );
}
