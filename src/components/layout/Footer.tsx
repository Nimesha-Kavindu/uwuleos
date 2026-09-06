"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  Award,
  Globe,
} from "lucide-react";
import { LeoEmblemSvg } from "@/components/ui/BrandingLogos";

export default function Footer() {
  return (
    <footer className="bg-[#051636] text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Affiliation Banner */}
        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <LeoEmblemSvg className="w-14 h-14 shrink-0" />
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Affiliated with Lions Clubs International
              </h4>
              <p className="text-slate-300 text-sm">
                Empowering youth through Leadership, Experience & Opportunity across 150+ countries.
              </p>
            </div>
          </div>
          <Link
            href="/about#hierarchy"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-sm transition-colors border border-white/20"
          >
            <Globe className="w-4 h-4 text-leo-cyan" />
            <span>View Global Structure</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1: Brand & Bio (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
              Leos of Sri Lanka & Maldives (Leo MD 306)
            </span>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Multiple District 306 unites young change-makers across Sri Lanka and the Maldives to create meaningful humanitarian impact, foster executive leadership skills, and serve vulnerable communities.
            </p>
            <div className="pt-2 text-xs text-leo-cyan font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Chartered in 1969 • Multiple District 306</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 className="font-heading font-bold text-sm tracking-wider uppercase text-leo-cyan mb-4">
              Explore
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-leo-cyan transition-colors">
                  About Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/board" className="hover:text-leo-cyan transition-colors">
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-leo-cyan transition-colors">
                  Our Causes & Projects
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-leo-cyan transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-leo-cyan transition-colors">
                  Photo & Media Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h5 className="font-heading font-bold text-sm tracking-wider uppercase text-leo-cyan mb-4">
              Resources
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/join" className="hover:text-leo-cyan transition-colors">
                  Membership Guidelines
                </Link>
              </li>
              <li>
                <a href="#constitution" className="hover:text-leo-cyan transition-colors">
                  Club Constitution (PDF)
                </a>
              </li>
              <li>
                <a href="#branding" className="hover:text-leo-cyan transition-colors">
                  LCI Brand Assets
                </a>
              </li>
              <li>
                <a href="#reporting" className="hover:text-leo-cyan transition-colors">
                  Project Report Forms
                </a>
              </li>
              <li>
                <a href="#leosong" className="hover:text-leo-cyan transition-colors">
                  Official Leo Song
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h5 className="font-heading font-bold text-sm tracking-wider uppercase text-leo-cyan mb-4">
              Get in Touch
            </h5>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-leo-cyan mt-0.5 shrink-0" />
                <a href="mailto:secretariat@leomd306.org" className="hover:text-leo-cyan break-all">
                  secretariat@leomd306.org
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-leo-cyan mt-0.5 shrink-0" />
                <span>+94 11 258 4567</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-leo-cyan mt-0.5 shrink-0" />
                <span>Lions Activity Centre, Vidya Mawatha, Colombo 07, Sri Lanka</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#F5A800] mt-0.5 shrink-0" />
                <span className="text-xs text-slate-400">Monthly Council Meeting - 1st Saturday at 4:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Leos of Sri Lanka & Maldives (Leo MD 306). Affiliated with Lions Clubs International. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with passion for Leos</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>across MD 306</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
