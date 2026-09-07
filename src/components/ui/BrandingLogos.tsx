import React from "react";

// Official UWU Leo Logo (Full Lockup: Seal + Divider + Text)
export function UwuLeoOfficialLogo({
  className = "h-11 w-auto",
  theme = "dark", // "dark" for dark text on light backgrounds, "light" for white text on dark backgrounds
  alt = "Leo Club of Uva Wellassa University",
}: {
  className?: string;
  theme?: "dark" | "light";
  alt?: string;
}) {
  const src = theme === "light" ? "/logos/uwu-leo-logo-white.png" : "/logos/uwu-leo-logo.png";
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain select-none`}
    />
  );
}

// Official UWU Leo Seal (Circular Lion Emblem only)
export function UwuLeoEmblem({
  className = "w-12 h-12",
  theme = "dark",
  alt = "Leo Club of UWU Seal",
}: {
  className?: string;
  theme?: "dark" | "light";
  alt?: string;
}) {
  const src = theme === "light" ? "/logos/uwu-leo-seal-white.png" : "/logos/uwu-leo-seal.png";
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain select-none shrink-0`}
    />
  );
}

// Aliases for seamless component compatibility
export const LeoEmblemSvg = UwuLeoEmblem;
export const UwuLeoEmblemSvg = UwuLeoEmblem;
export const UwuLeoOfficialLogoSvg = UwuLeoOfficialLogo;

// Official Lions Clubs International Emblem
export function LionsEmblemSvg({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-md`}
    >
      <defs>
        <linearGradient id="lionsGold" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="45%" stopColor="#F5A800" />
          <stop offset="100%" stopColor="#D98200" />
        </linearGradient>
        <linearGradient id="lionsBlue" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0045B5" />
          <stop offset="100%" stopColor="#002570" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="58" fill="url(#lionsGold)" stroke="#B36B00" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
      <circle cx="60" cy="60" r="48" fill="url(#lionsBlue)" stroke="#F5A800" strokeWidth="2.5" />

      <text x="60" y="25" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="900" fontFamily="sans-serif" letterSpacing="2.5">
        LIONS
      </text>

      <text x="60" y="102" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.8">
        INTERNATIONAL
      </text>

      <circle cx="60" cy="60" r="28" fill="url(#lionsGold)" stroke="#995C00" strokeWidth="1.5" />

      <text x="60" y="72" textAnchor="middle" fill="#002B80" fontSize="34" fontWeight="900" fontFamily="Georgia, 'Times New Roman', serif">
        L
      </text>

      <path
        d="M32 46 C26 48 20 54 22 62 C24 70 30 74 34 74 C33 68 35 60 38 56 C35 52 33 48 32 46 Z"
        fill="url(#lionsGold)"
        stroke="#995C00"
        strokeWidth="1"
      />
      <circle cx="26" cy="56" r="1.5" fill="#002B80" />

      <path
        d="M88 46 C94 48 100 54 98 62 C96 70 90 74 86 74 C87 68 85 60 82 56 C85 52 87 48 88 46 Z"
        fill="url(#lionsGold)"
        stroke="#995C00"
        strokeWidth="1"
      />
      <circle cx="94" cy="56" r="1.5" fill="#002B80" />
    </svg>
  );
}

// Authentic Leo Multiple District 306 Emblem
export function DistrictEmblemSvg({ className = "w-18 h-18" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-md`}
    >
      <defs>
        <linearGradient id="md306Grad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00A3E0" />
          <stop offset="50%" stopColor="#0052CC" />
          <stop offset="100%" stopColor="#08204D" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="56" fill="url(#md306Grad)" stroke="#00A3E0" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" fill="#0A2552" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />

      <path
        d="M60 30 L66 42 L78 40 L72 50 L82 58 L70 64 L74 76 L60 70 L46 76 L50 64 L38 58 L48 50 L42 40 L54 42 Z"
        fill="#00A3E0"
        opacity="0.3"
      />

      <circle cx="54" cy="52" r="2" fill="#FFFFFF" />
      <circle cx="66" cy="52" r="2" fill="#FFFFFF" />
      <path d="M57 58 L63 58 L60 62 Z" fill="#00A3E0" />
      <path d="M54 64 C57 66 63 66 66 64" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

      <text x="60" y="32" textAnchor="middle" fill="#00A3E0" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
        LEO DISTRICT
      </text>

      <text x="60" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
        306 D10
      </text>

      <text x="60" y="102" textAnchor="middle" fill="#A5D8F3" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.8">
        SRI LANKA
      </text>
    </svg>
  );
}

// Background subtle line-art doodle pattern
export function CardDoodlePattern({ className = "absolute inset-0 pointer-events-none" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M420 40 C410 45 400 48 390 42 C380 36 385 24 395 28 C405 32 415 30 425 22 C430 30 428 36 420 40 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <rect
        x="380"
        y="80"
        width="65"
        height="55"
        rx="12"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <circle cx="270" cy="50" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.08" strokeDasharray="3 3" />
    </svg>
  );
}
