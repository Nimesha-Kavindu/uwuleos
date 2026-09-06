"use client";

import React, { useState } from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import {
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Globe,
  HelpCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function JoinPage() {
  const { club } = useClub();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    occupation: "",
    interests: [] as string[],
    motivation: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleInterest = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(val)
        ? prev.interests.filter((i) => i !== val)
        : [...prev.interests, val],
    }));
  };

  const FAQS = [
    {
      q: "What is the age requirement to join a Leo Club?",
      a: "Alpha Leo Clubs are organized for youth aged 12 to 18 (typically school-based), while Omega Leo Clubs are tailored for young adults aged 18 to 30 (university students and working professionals).",
    },
    {
      q: "What are the core benefits of becoming a Leo?",
      a: "Leos gain certified executive leadership training, public speaking experience, community project management exposure, and direct entry into Lions Clubs International's global network of 1.4 million leaders.",
    },
    {
      q: "How often do Leo clubs meet?",
      a: "Most clubs hold regular general meetings twice a month (physical or hybrid), along with service projects organized over weekends.",
    },
    {
      q: "Is there a membership fee?",
      a: "A nominal annual district dues fee covers your official Lions International membership kit, Leo lapel pin, insurance coverage, and official certificate.",
    },
  ];

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-leo-pearl via-white to-white py-16 lg:py-24 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <CyanBar />
            <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
              BECOME A YOUNG LEADER
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-leo-charcoal tracking-tight leading-tight mb-6">
              Begin Your Leadership Journey with {club.shortName}
            </h1>
            <p className="text-lg text-leo-slate leading-relaxed">
              Join thousands of passionate youth serving communities, mastering project leadership, and forging lifelong international friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8 text-leo-cyan" />,
                title: "Global Recognition",
                desc: "Official LCI certificates, leadership awards, and international youth conventions.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-leo-gold" />,
                title: "Executive Skills",
                desc: "Learn real-world budgeting, public speaking, team coordination, and crisis response.",
              },
              {
                icon: <Users className="w-8 h-8 text-leo-blue" />,
                title: "Lifelong Fellowship",
                desc: "Connect with like-minded ambitious youth across Sri Lanka, the Maldives, and worldwide.",
              },
              {
                icon: <Globe className="w-8 h-8 text-emerald-500" />,
                title: "Tangible Social Impact",
                desc: "Lead tree planting, food relief, pediatric cancer aid, and sight care camps.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-leo-pearl rounded-3xl p-6 border border-leo-border space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-leo-charcoal">{item.title}</h3>
                <p className="text-xs text-leo-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Application Form */}
      <section className="py-20 bg-leo-pearl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-leo-border shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-extrabold text-3xl text-leo-charcoal">
                  Welcome to the Pride!
                </h3>
                <p className="text-base text-leo-slate max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your membership application for <strong>{club.name}</strong> has been submitted. Our Club Membership Director will contact you within 48 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="px-8 py-3 bg-leo-blue text-white rounded-full font-bold text-sm hover:bg-leo-blue-hover"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Form Steps Header */}
                <div className="flex items-center justify-between border-b border-leo-border pb-6 mb-8">
                  <div>
                    <span className="text-xs font-bold text-leo-cyan uppercase tracking-wider">Step {step} of 2</span>
                    <h3 className="font-heading font-bold text-2xl text-leo-charcoal">
                      {step === 1 ? "Personal & Contact Details" : "Interests & Service Motivation"}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <span className={`w-3 h-3 rounded-full ${step === 1 ? "bg-leo-cyan" : "bg-leo-border"}`} />
                    <span className={`w-3 h-3 rounded-full ${step === 2 ? "bg-leo-cyan" : "bg-leo-border"}`} />
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === 1) {
                      setStep(2);
                    } else {
                      setIsSubmitted(true);
                    }
                  }}
                  className="space-y-6"
                >
                  {step === 1 ? (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                          Full Legal Name *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Kasun Mihiran Silva"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-leo-border text-sm focus:ring-2 focus:ring-leo-cyan focus:outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                            Email Address *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="kasun@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-leo-border text-sm focus:ring-2 focus:ring-leo-cyan focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                            Mobile / WhatsApp Phone *
                          </label>
                          <input
                            required
                            type="tel"
                            placeholder="+94 77 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-leo-border text-sm focus:ring-2 focus:ring-leo-cyan focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                            Date of Birth *
                          </label>
                          <input
                            required
                            type="date"
                            value={formData.dob}
                            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-leo-border text-sm focus:ring-2 focus:ring-leo-cyan focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                            Occupation / School / University
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Undergraduate / Engineer"
                            value={formData.occupation}
                            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl border border-leo-border text-sm focus:ring-2 focus:ring-leo-cyan focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-8 py-3.5 bg-leo-cyan hover:bg-leo-cyan-hover text-white rounded-full font-bold text-sm shadow-md transition-colors"
                        >
                          <span>Next Step</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-leo-charcoal uppercase mb-3">
                          Select Your Areas of Interest (Choose all that apply)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            "Community Service",
                            "Environmental Projects",
                            "Public Relations & Media",
                            "Graphic Design",
                            "Fundraising",
                            "Public Speaking",
                          ].map((cat) => (
                            <button
                              type="button"
                              key={cat}
                              onClick={() => toggleInterest(cat)}
                              className={`p-3 rounded-2xl text-xs font-bold text-left border transition-all ${
                                formData.interests.includes(cat)
                                  ? "bg-leo-blue text-white border-leo-blue shadow-sm"
                                  : "bg-leo-pearl text-leo-charcoal border-leo-border hover:bg-leo-pearl-dark"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-leo-charcoal uppercase mb-1.5">
                          Why do you want to join {club.shortName}?
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Briefly share what inspires you to serve..."
                          value={formData.motivation}
                          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-leo-border text-sm focus:ring-2 focus:ring-leo-cyan focus:outline-none"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-6 py-3 bg-leo-pearl hover:bg-leo-pearl-dark text-leo-charcoal rounded-full font-bold text-sm"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-8 py-3.5 bg-leo-cyan hover:bg-leo-cyan-hover text-white rounded-full font-bold text-sm shadow-md transition-colors"
                        >
                          Submit Application
                        </button>
                      </div>
                    </>
                  )}
                </form>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CyanBar className="mx-auto" />
            <h3 className="font-heading font-extrabold text-3xl text-leo-charcoal">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-leo-border rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-base text-leo-charcoal hover:bg-leo-pearl transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-leo-slate transition-transform ${
                      openFaq === idx ? "rotate-180 text-leo-cyan" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-leo-slate leading-relaxed bg-leo-pearl/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
