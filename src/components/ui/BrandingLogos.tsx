import React from "react";

// Official Lions Clubs International Emblem (High-Fidelity Vector Replica)
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

      {/* Outer Gold Ring */}
      <circle cx="60" cy="60" r="58" fill="url(#lionsGold)" stroke="#B36B00" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="54" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />

      {/* Inner Blue Shield Circle */}
      <circle cx="60" cy="60" r="48" fill="url(#lionsBlue)" stroke="#F5A800" strokeWidth="2.5" />

      {/* Outer Banner Text: LIONS */}
      <text
        x="60"
        y="25"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="2.5"
      >
        LIONS
      </text>

      {/* Outer Banner Text: INTERNATIONAL */}
      <text
        x="60"
        y="102"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="8"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="1.8"
      >
        INTERNATIONAL
      </text>

      {/* Center Gold Circle */}
      <circle cx="60" cy="60" r="28" fill="url(#lionsGold)" stroke="#995C00" strokeWidth="1.5" />

      {/* Center Serif 'L' */}
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fill="#002B80"
        fontSize="34"
        fontWeight="900"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        L
      </text>

      {/* Left Lion Profile Head (Facing Left / Past) */}
      <path
        d="M32 46 C26 48 20 54 22 62 C24 70 30 74 34 74 C33 68 35 60 38 56 C35 52 33 48 32 46 Z"
        fill="url(#lionsGold)"
        stroke="#995C00"
        strokeWidth="1"
      />
      <circle cx="26" cy="56" r="1.5" fill="#002B80" />

      {/* Right Lion Profile Head (Facing Right / Future) */}
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

// Official Leo Club Emblem (Authentic Dual Lion Head Silhouette)
export function LeoEmblemSvg({ className = "w-18 h-18" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-sm`}
    >
      <defs>
        <linearGradient id="leoMaroon" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#800020" />
          <stop offset="100%" stopColor="#4D0013" />
        </linearGradient>
        <linearGradient id="leoGold" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
      </defs>

      {/* Circular Emblem Frame */}
      <circle cx="60" cy="60" r="56" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#800020" strokeWidth="3" />

      {/* Left Lion Profile */}
      <path
        d="M42 38 C32 42 24 50 26 62 C28 72 36 78 44 80 C40 72 42 62 46 54 C44 48 43 42 42 38 Z"
        fill="url(#leoMaroon)"
      />
      <path d="M30 52 C32 50 36 50 38 52" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="56" r="1.5" fill="#FFD700" />

      {/* Right Lion Profile */}
      <path
        d="M78 38 C88 42 96 50 94 62 C92 72 84 78 76 80 C80 72 78 62 74 54 C76 48 77 42 78 38 Z"
        fill="url(#leoMaroon)"
      />
      <path d="M90 52 C88 50 84 50 82 52" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="86" cy="56" r="1.5" fill="#FFD700" />

      {/* Center Vertical L-E-O Banner */}
      <rect x="49" y="28" width="22" height="64" rx="4" fill="url(#leoMaroon)" stroke="#FFD700" strokeWidth="1.5" />

      <text
        x="60"
        y="46"
        textAnchor="middle"
        fill="#FFD700"
        fontSize="14"
        fontWeight="900"
        fontFamily="sans-serif"
      >
        L
      </text>
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="14"
        fontWeight="900"
        fontFamily="sans-serif"
      >
        E
      </text>
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fill="#FFD700"
        fontSize="14"
        fontWeight="900"
        fontFamily="sans-serif"
      >
        O
      </text>
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

      {/* Outer Wreath / Gear Border */}
      <circle cx="60" cy="60" r="56" fill="url(#md306Grad)" stroke="#00A3E0" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" fill="#0A2552" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />

      {/* Central Majestic Lion Head Outline */}
      <path
        d="M60 30 L66 42 L78 40 L72 50 L82 58 L70 64 L74 76 L60 70 L46 76 L50 64 L38 58 L48 50 L42 40 L54 42 Z"
        fill="#00A3E0"
        opacity="0.3"
      />

      {/* Lion Face Artwork */}
      <circle cx="54" cy="52" r="2" fill="#FFFFFF" />
      <circle cx="66" cy="52" r="2" fill="#FFFFFF" />
      <path d="M57 58 L63 58 L60 62 Z" fill="#00A3E0" />
      <path d="M54 64 C57 66 63 66 66 64" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

      {/* Upper Arc Text: LEO MD */}
      <text
        x="60"
        y="32"
        textAnchor="middle"
        fill="#00A3E0"
        fontSize="9"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        LEO MD
      </text>

      {/* Center Bold Number: 306 */}
      <text
        x="60"
        y="88"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="22"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        306
      </text>

      {/* Subtitle: SRI LANKA & MALDIVES */}
      <text
        x="60"
        y="102"
        textAnchor="middle"
        fill="#A5D8F3"
        fontSize="5.5"
        fontWeight="700"
        fontFamily="sans-serif"
        letterSpacing="0.8"
      >
        SRI LANKA &amp; MALDIVES
      </text>
    </svg>
  );
}

// Background subtle line-art doodle pattern (matching the exact reference card background)
export function CardDoodlePattern({ className = "absolute inset-0 pointer-events-none" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Dove / Bird outline */}
      <path
        d="M420 40 C410 45 400 48 390 42 C380 36 385 24 395 28 C405 32 415 30 425 22 C430 30 428 36 420 40 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <path
        d="M405 35 C415 45 425 50 435 48 C440 40 435 32 425 22"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />

      {/* Backpack / Medical pouch outline */}
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
      <path
        d="M395 80 C395 68 430 68 430 80"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />
      <line x1="412" y1="96" x2="412" y2="118" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
      <line x1="401" y1="107" x2="423" y2="107" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />

      {/* Heart outline */}
      <path
        d="M310 130 C310 115 325 108 335 118 C345 108 360 115 360 130 C360 152 335 168 335 168 C335 168 310 152 310 130 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.1"
      />

      {/* Globe grid */}
      <circle cx="270" cy="50" r="30" stroke="currentColor" strokeWidth="1.2" opacity="0.08" strokeDasharray="3 3" />
      <ellipse cx="270" cy="50" rx="30" ry="12" stroke="currentColor" strokeWidth="1.2" opacity="0.08" />
    </svg>
  );
}
