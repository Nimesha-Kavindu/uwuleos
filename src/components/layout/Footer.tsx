"use client";

import React from "react";
import Link from "next/link";
import { LeoEmblemSvg } from "@/components/ui/BrandingLogos";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#051430] text-white border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Row: Brand on Left, Quick Links & Contact on Right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-4">
            <LeoEmblemSvg className="w-12 h-12 shrink-0" />
            <div>
              <div className="font-heading font-extrabold text-lg text-white tracking-tight">
                Leos of Sri Lanka &amp; Maldives
              </div>
              <div className="text-xs text-leo-cyan font-bold tracking-wider uppercase">
                Multiple District 306 • Affiliated with Lions International
              </div>
            </div>
          </div>

          {/* Center / Right: Clean Simple Navigation */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300 font-medium">
            <Link href="/about" className="hover:text-leo-cyan transition-colors">
              About Us
            </Link>
            <Link href="/board" className="hover:text-leo-cyan transition-colors">
              Leadership
            </Link>
            <Link href="/projects" className="hover:text-leo-cyan transition-colors">
              Our Causes
            </Link>
            <Link href="/events" className="hover:text-leo-cyan transition-colors">
              News &amp; Events
            </Link>
            <Link href="/join" className="hover:text-leo-cyan transition-colors">
              Join Leos
            </Link>
            <Link href="/contact" className="hover:text-leo-cyan transition-colors">
              Contact
            </Link>
          </nav>

        </div>

        {/* Bottom Bar: Contact & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-leo-cyan" />
              <a href="mailto:secretariat@leomd306.org" className="hover:text-white transition-colors">
                secretariat@leomd306.org
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-leo-cyan" />
              <span>Colombo, Sri Lanka &amp; Malé, Maldives</span>
            </span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Leo MD 306. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
