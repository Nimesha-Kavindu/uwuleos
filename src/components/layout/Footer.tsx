"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LeoEmblemSvg,
  LionsEmblemSvg,
  DistrictEmblemSvg,
} from "@/components/ui/BrandingLogos";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Award,
  Globe,
  FileText,
  Heart,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#040E24] text-slate-300 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Global Affiliation Banner */}
        <div className="bg-gradient-to-r from-[#003B99]/40 via-[#072B6B]/30 to-white/5 rounded-3xl p-8 sm:p-10 border border-white/15 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="flex items-center gap-5">
            <div className="flex items-center -space-x-2 shrink-0">
              <LionsEmblemSvg className="w-14 h-14" />
              <LeoEmblemSvg className="w-14 h-14" />
            </div>
            <div>
              <div className="text-xs font-bold text-leo-cyan uppercase tracking-wider">
                Lions Clubs International • Multiple District 306
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                Stay Connected with Leo MD 306 Updates
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Get monthly e-bulletins, upcoming fellowship camp dates, and project stories delivered to your inbox.
              </p>
            </div>
          </div>

          {/* Newsletter Input */}
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 rounded-full text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing to our e-bulletin!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-2 w-full sm:w-96">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 text-white placeholder-slate-400 text-xs rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-leo-cyan"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-leo-cyan hover:bg-leo-cyan-hover text-white rounded-full font-bold text-xs shadow-md transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Comprehensive Information Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Heritage (Wide Column) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <DistrictEmblemSvg className="w-12 h-12 shrink-0" />
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight block">
                  Leos of Sri Lanka &amp; Maldives
                </span>
                <span className="text-xs text-leo-cyan font-bold tracking-widest uppercase">
                  Multiple District 306
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Empowering over 10,000 young humanitarians across 12 districts in Sri Lanka and the Republic of Maldives. Fostering executive leadership, personal growth, and impactful community service since 1969.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Award className="w-3.5 h-3.5 text-leo-gold" />
                <span>Chartered 1969</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Shield className="w-3.5 h-3.5 text-leo-cyan" />
                <span>LCI Affiliated</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & About */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.14em] text-leo-cyan mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story &amp; Origins
                </Link>
              </li>
              <li>
                <Link href="/board" className="hover:text-white transition-colors">
                  Executive Committee
                </Link>
              </li>
              <li>
                <Link href="/about#hierarchy" className="hover:text-white transition-colors">
                  Multiple District Hierarchy
                </Link>
              </li>
              <li>
                <Link href="/about#districts" className="hover:text-white transition-colors">
                  12 Sub-Districts Directory
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-white transition-colors">
                  Membership &amp; Chartering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus Causes */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.14em] text-leo-cyan mb-4">
              Our Causes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/projects?category=environment" className="hover:text-white transition-colors">
                  Environment &amp; Climate
                </Link>
              </li>
              <li>
                <Link href="/projects?category=vision" className="hover:text-white transition-colors">
                  Vision &amp; Eye Camps
                </Link>
              </li>
              <li>
                <Link href="/projects?category=hunger" className="hover:text-white transition-colors">
                  Hunger Relief &amp; Nutrition
                </Link>
              </li>
              <li>
                <Link href="/projects?category=youth" className="hover:text-white transition-colors">
                  Youth Leadership Academies
                </Link>
              </li>
              <li>
                <Link href="/projects?category=cancer" className="hover:text-white transition-colors">
                  Childhood Cancer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Governance */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.14em] text-leo-cyan mb-4">
              Resources &amp; Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-leo-cyan mt-0.5 shrink-0" />
                <a href="mailto:secretariat@leomd306.org" className="hover:text-white transition-colors break-all">
                  secretariat@leomd306.org
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-leo-cyan mt-0.5 shrink-0" />
                <span>+94 11 258 4567</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-leo-cyan mt-0.5 shrink-0" />
                <span className="leading-snug">
                  Lions Activity Centre, Vidya Mawatha, Colombo 07, Sri Lanka
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-leo-gold mt-0.5 shrink-0" />
                <span className="text-[11px] text-slate-400">
                  Monthly Council: 1st Saturday @ 4 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Leos of Sri Lanka &amp; Maldives (Multiple District 306). Affiliated with Lions Clubs International.
          </div>
          
          <div className="flex items-center gap-6 text-slate-400 text-[11px]">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#constitution" className="hover:text-white transition-colors">MD 306 Constitution</a>
            <span className="flex items-center gap-1 text-slate-400">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>for Leos</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
