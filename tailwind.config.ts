import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        leo: {
          blue: "#003399",
          "blue-hover": "#002b80",
          dark: "#061838",
          navy: "#082860",
          cyan: "#00A3E0",
          "cyan-hover": "#008ec4",
          "cyan-light": "#E6F6FC",
          gold: "#F5A800",
          "gold-light": "#FFF7E6",
          pearl: "#F4F6F9",
          "pearl-dark": "#E9EDF4",
          charcoal: "#111827",
          slate: "#5A6578",
          border: "#E5E9F0",
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "Outfit", "Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        "card-lg": "24px",
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 51, 153, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 20px 40px -5px rgba(0, 51, 153, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.06)",
        glow: "0 0 25px rgba(0, 163, 224, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
