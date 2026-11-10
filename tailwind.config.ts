import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        brand: {
          navy: "#0A0E27",
          royal: "#1E3A8A",
          electric: "#3B82F6",
          cyan: "#06B6D4",
          violet: "#8B5CF6",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, #1E3A8A 0%, #0A0E27 55%, #050714 100%)",
        "brand-gradient":
          "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #8B5CF6 100%)",
        "glass-border":
          "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(6,182,212,0.3), rgba(139,92,246,0.6))",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-50px) scale(1.12)" },
          "66%": { transform: "translate(-30px,30px) scale(0.92)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.7)" },
          "50%": { boxShadow: "0 0 0 10px rgba(34,197,94,0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "gradient-slow": "gradient 12s ease infinite",
        aurora: "aurora 22s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.55)",
        "glow-cyan": "0 0 40px -10px rgba(6,182,212,0.55)",
        "glow-violet": "0 0 40px -10px rgba(139,92,246,0.55)",
        glass:
          "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;