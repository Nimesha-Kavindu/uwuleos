"use client";

import React, { useState } from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Heart,
  Award,
  CheckCircle2,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const { club } = useClub();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-leo-pearl via-white to-white py-16 lg:py-24 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <CyanBar />
            <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
              CONNECT & COLLABORATE
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-leo-charcoal tracking-tight leading-tight mb-6">
              Get in Touch with {club.shortName}
            </h1>
            <p className="text-lg text-leo-slate leading-relaxed">
              Have a project collaboration proposal, sponsorship inquiry, or question about our community service programs? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-leo-blue text-white rounded-xl p-8 shadow-card space-y-6">
                <h3 className="font-heading font-extrabold text-2xl">
                  Club Secretariat & Office
                </h3>
                
                <div className="space-y-4 text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-leo-cyan mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase font-bold text-leo-cyan tracking-wider">Official Email</div>
                      <a href={`mailto:${club.contact.email}`} className="font-medium hover:underline text-white">
                        {club.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-leo-cyan mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase font-bold text-leo-cyan tracking-wider">Hotline & WhatsApp</div>
                      <div className="font-medium text-white">{club.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-leo-cyan mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase font-bold text-leo-cyan tracking-wider">Location / Venue</div>
                      <div className="font-medium text-white">{club.contact.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Clock className="w-5 h-5 text-leo-gold mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs uppercase font-bold text-leo-gold tracking-wider">Meeting Schedule</div>
                      <div className="text-xs text-slate-300">{club.contact.meetingSchedule}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Partnership Card */}
              <div className="bg-leo-pearl rounded-xl p-8 border border-leo-border space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-leo-cyan flex items-center justify-center shadow-sm">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
                <h4 className="font-heading font-bold text-xl text-leo-charcoal">
                  CSR & Corporate Sponsorship
                </h4>
                <p className="text-sm text-leo-slate leading-relaxed">
                  We partner with corporations, embassies, and philanthropic foundations to deploy impactful CSR funds directly into tangible community development.
                </p>
              </div>

            </div>

            {/* Right Col: Interactive Message Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl p-8 sm:p-10 border border-leo-border shadow-card">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-leo-charcoal">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-leo-slate max-w-md mx-auto">
                      Thank you for contacting <strong>{club.shortName}</strong>. Our club secretary will respond shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white rounded-xl font-bold text-xs shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading font-extrabold text-2xl text-leo-charcoal mb-4">
                      Send an Inquiry
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Kasun Fernando"
                          className="w-full px-4 py-3 rounded-xl border border-leo-border text-sm focus:ring-2 focus:ring-[#003B99] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="kasun@domain.com"
                          className="w-full px-4 py-3 rounded-xl border border-leo-border text-sm focus:ring-2 focus:ring-[#003B99] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-leo-border text-sm focus:ring-2 focus:ring-[#003B99] focus:outline-none">
                        <option>General Information</option>
                        <option>Corporate Partnership / CSR Sponsorship</option>
                        <option>Project Joint Collaboration</option>
                        <option>Media & Press Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                        Message Content *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl border border-leo-border text-sm focus:ring-2 focus:ring-[#003B99] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#003B99] to-[#00A3E0] hover:from-[#002D7A] hover:to-[#0092C7] text-white rounded-xl font-bold text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
