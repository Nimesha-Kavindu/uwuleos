"use client";

import React, { useState } from "react";
import { useClub } from "@/context/ClubContext";
import CyanBar from "@/components/ui/CyanBar";
import { Image as ImageIcon, X } from "lucide-react";

const GALLERY_PHOTOS = [
  {
    id: 1,
    category: "community",
    title: "Youth Mangrove Planting & Coastal Conservation",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    category: "fellowship",
    title: "Multiple District Annual Youth Leadership Gala",
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    category: "community",
    title: "Sight For Youth School Screening Camp",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    category: "ceremonies",
    title: "16th Annual Installation of Executive Officers",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    category: "community",
    title: "Suwa Diviya Community Kitchens & Food Ration Drive",
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    category: "fellowship",
    title: "Inter-District Youth Sports & Leadership Camp",
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function GalleryPage() {
  const { club } = useClub();
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredPhotos = GALLERY_PHOTOS.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <div className="bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-leo-pearl via-white to-white py-16 lg:py-24 border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <CyanBar />
            <span className="block text-xs font-bold tracking-[0.14em] text-leo-slate uppercase mb-2">
              MEMORIES IN ACTION
            </span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-leo-charcoal tracking-tight leading-tight mb-6">
              Media Gallery & Photo Highlights
            </h1>
            <p className="text-lg text-leo-slate leading-relaxed">
              Capturing vibrant moments of service, fellowship, installations, and youth leadership across {club.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="py-8 bg-white border-b border-leo-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {[
              { id: "all", label: "All Photos" },
              { id: "community", label: "Community Service" },
              { id: "fellowship", label: "Fellowship & Camps" },
              { id: "ceremonies", label: "Installations & Awards" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-gradient-to-r from-[#003B99] to-[#00A3E0] text-white shadow-xs"
                    : "bg-leo-pearl text-leo-charcoal hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActiveImage(photo.url)}
                className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-leo-dark h-72 border border-leo-border"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leo-dark/90 via-leo-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-bold text-leo-cyan uppercase tracking-widest block mb-1">
                      {photo.category}
                    </span>
                    <h4 className="font-heading font-bold text-white text-base leading-snug">
                      {photo.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white p-2.5 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt="Enlarged gallery view"
            className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}

    </div>
  );
}
