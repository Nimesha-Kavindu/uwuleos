import React from "react";

// Official Lions International Emblem SVG
export function LionsEmblemSvg({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="48" fill="#F5A800" stroke="#003399" strokeWidth="4" />
      <circle cx="50" cy="50" r="38" fill="#003399" />
      <circle cx="50" cy="50" r="28" fill="#F5A800" />
      <text x="50" y="24" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
        LIONS
      </text>
      <text x="50" y="58" textAnchor="middle" fill="#003399" fontSize="28" fontWeight="900" fontFamily="serif">
        L
      </text>
      <text x="50" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">
        INTERNATIONAL
      </text>
      <path d="M22 42 Q15 50 22 58" stroke="#F5A800" strokeWidth="3" fill="none" />
      <path d="M78 42 Q85 50 78 58" stroke="#F5A800" strokeWidth="3" fill="none" />
    </svg>
  );
}

// Official Leo Club Dual-Lion Emblem SVG
export function LeoEmblemSvg({ className = "w-16 h-16", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="100" height="100" rx="20" fill={dark ? "rgba(255,255,255,0.08)" : "#FFFFFF"} />
      <circle cx="50" cy="50" r="42" stroke={dark ? "#00A3E0" : "#003399"} strokeWidth="3.5" fill="none" />
      <path
        d="M30 35 C25 42 25 58 30 65 M70 35 C75 42 75 58 70 65"
        stroke={dark ? "#00A3E0" : "#003399"}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill={dark ? "#FFFFFF" : "#003399"}
        fontSize="24"
        fontWeight="900"
        fontFamily="sans-serif"
        letterSpacing="3"
      >
        LEO
      </text>
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fill={dark ? "#00A3E0" : "#5A6578"}
        fontSize="7"
        fontWeight="700"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        LEADERSHIP
      </text>
    </svg>
  );
}

// District / Local Club Emblem SVG
export function DistrictEmblemSvg({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="50" cy="50" r="46" fill="#003399" stroke="#00A3E0" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="#082860" />
      <path d="M50 16 L60 38 L84 38 L65 52 L72 74 L50 60 L28 74 L35 52 L16 38 L40 38 Z" fill="#00A3E0" opacity="0.25" />
      <text x="50" y="44" textAnchor="middle" fill="#00A3E0" fontSize="10" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
        LEO MD
      </text>
      <text x="50" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="900" fontFamily="sans-serif">
        306
      </text>
      <circle cx="50" cy="80" r="2.5" fill="#F5A800" />
    </svg>
  );
}

// Line-art doodle watermark illustration background as seen in the reference card
export function CardDoodlePattern({ className = "absolute inset-0 opacity-15 pointer-events-none" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      {/* Globe */}
      <circle cx="520" cy="70" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <ellipse cx="520" cy="70" rx="40" ry="18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="520" y1="30" x2="520" y2="110" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Heart */}
      <path d="M420 180 C420 160 440 150 450 165 C460 150 480 160 480 180 C480 210 450 230 450 230 C450 230 420 210 420 180 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      
      {/* Backpack / Medical kit */}
      <rect x="300" y="160" width="60" height="50" rx="10" stroke="currentColor" strokeWidth="2" />
      <path d="M315 160 C315 145 345 145 345 160" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="330" y1="175" x2="330" y2="195" stroke="currentColor" strokeWidth="2" />
      <line x1="320" y1="185" x2="340" y2="185" stroke="currentColor" strokeWidth="2" />

      {/* Graduation Cap */}
      <polygon points="120,70 160,50 200,70 160,90" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M135 78 L135 105 C135 115 185 115 185 105 L185 78" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="195" y1="73" x2="205" y2="105" stroke="currentColor" strokeWidth="2" />

      {/* Sprout / Plant */}
      <path d="M220 240 C220 210 240 200 240 200 C240 200 260 210 260 240" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="240" y1="200" x2="240" y2="250" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
