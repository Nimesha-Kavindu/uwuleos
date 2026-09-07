"use client";

import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Leadership • Experience • Opportunity");

  useEffect(() => {
    // Prevent background scrolling while loading
    document.body.style.overflow = "hidden";

    const totalDurationMs = 3000; // Minimum 3 seconds
    const intervalMs = 30;
    const totalSteps = totalDurationMs / intervalMs;
    let stepCount = 0;

    const messages = [
      { progress: 28, text: "Leadership • Experience • Opportunity" },
      { progress: 62, text: "Empowering Youth • Serving Humanity" },
      { progress: 88, text: "Leo District 306 D10 • Sri Lanka" },
      { progress: 100, text: "Welcome to UWU Leos" },
    ];

    const timer = setInterval(() => {
      stepCount++;
      // Easing curve (ease-out cubic progression for smooth natural motion)
      const t = Math.min(stepCount / totalSteps, 1);
      const eased = Math.round((1 - Math.pow(1 - t, 2.5)) * 100);
      
      const currentVal = Math.min(100, Math.max(0, eased));
      setProgress(currentVal);

      // Update dynamic status messages
      const activeMsg = messages.find((m) => currentVal <= m.progress);
      if (activeMsg) {
        setStatusMessage(activeMsg.text);
      }

      if (stepCount >= totalSteps) {
        clearInterval(timer);
        setProgress(100);
        setStatusMessage("Welcome to UWU Leos");

        // Small hold at 100% before smooth fade exit
        setTimeout(() => {
          setIsFading(true);
          document.body.style.overflow = "";

          setTimeout(() => {
            setIsLoading(false);
          }, 600);
        }, 300);
      }
    }, intervalMs);

    // Fallback safety cleanup
    const safetyTimeout = setTimeout(() => {
      setProgress(100);
      setIsFading(true);
      document.body.style.overflow = "";
      setTimeout(() => setIsLoading(false), 600);
    }, 4500);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      id="site-preloader"
      aria-label="Loading Leo Club of Uva Wellassa University"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none transition-all duration-700 ease-out ${
        isFading ? "opacity-0 pointer-events-none scale-98" : "opacity-100 scale-100"
      }`}
    >
      {/* Soft ambient background glow effects for visual depth */}
      <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#00A3E0]/12 via-[#003399]/08 to-[#F5A800]/10 blur-[80px] pointer-events-none animate-pulse" />
      <div className="absolute inset-0 bg-doodle-pattern-dark opacity-30 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        
        {/* Animated Emblem Ring Lockup */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-6">
          
          {/* Outer Rotating Gradient Ring */}
          <div
            className="absolute inset-0 rounded-full p-[2.5px] animate-spin"
            style={{
              background: "conic-gradient(from 0deg, #F5A800, #00A3E0, #003399, transparent 80%, #F5A800)",
              animationDuration: "2.5s",
            }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </div>

          {/* Inner Dashed Cyan Accent Ring */}
          <div
            className="absolute inset-2 rounded-full border border-dashed border-[#00A3E0]/40 animate-spin"
            style={{
              animationDuration: "6s",
              animationDirection: "reverse",
            }}
          />

          {/* Soft Central Radial Backlight */}
          <div className="absolute inset-3 rounded-full bg-[#003399]/05 blur-sm" />

          {/* Leo Seal Icon */}
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <img
              src="/logos/uwu-leo-seal.png"
              alt="Leo Club of UWU Seal"
              className="w-full h-full object-contain filter drop-shadow-[0_6px_16px_rgba(0,51,153,0.16)]"
            />
          </div>
        </div>

        {/* Brand Titles */}
        <div className="space-y-1 mb-6">
          <h2 className="text-base sm:text-lg font-extrabold tracking-wider uppercase text-leo-dark font-heading drop-shadow-xs">
            Leo Club of UWU
          </h2>
          <p className="text-xs sm:text-[13px] font-semibold text-leo-blue tracking-wide min-h-[22px] transition-all duration-300">
            {statusMessage}
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-72">
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-[1px] border border-slate-200/80 shadow-xs">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#F5A800] via-[#00A3E0] to-[#003399] transition-all duration-75 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer light bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full animate-[shimmer_1.4s_infinite]" />
            </div>
          </div>

          {/* District Code & Live Percentage Indicator */}
          <div className="flex items-center justify-between mt-2.5 px-0.5 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5 text-[#00A3E0] tracking-wider uppercase text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00A3E0] animate-ping" />
              District 306 D10
            </span>
            <span className="tabular-nums font-mono text-leo-dark font-bold">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-6 sm:bottom-8 text-center px-4">
        <p className="text-[11px] text-slate-400 tracking-[0.2em] uppercase font-semibold">
          Servite Vel Rejunquo • Serve &amp; Rejoin
        </p>
      </div>
    </div>
  );
}
