import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Bricolage Grotesque'", "'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0A0A0F",
        surface: "#111118",
        card: "#16161E",
        border: "#1E1E2A",
        accent: {
          purple: "#7C3AED",
          violet: "#8B5CF6",
          pink: "#EC4899",
          blue: "#3B82F6",
          indigo: "#6366F1",
        },
        text: {
          primary: "#F0F0FF",
          secondary: "#9090A8",
          muted: "#4A4A60",
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "aurora-1": "aurora-1 20s ease-in-out infinite alternate",
        "aurora-2": "aurora-2 25s ease-in-out infinite alternate",
        "aurora-3": "aurora-3 30s ease-in-out infinite alternate",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "aurora-1": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
          "100%": { transform: "translate(15%, 10%) scale(1.1)", opacity: "0.4" },
        },
        "aurora-2": {
          "0%": { transform: "translate(0, 0) scale(1.1)", opacity: "0.1" },
          "100%": { transform: "translate(-10%, -15%) scale(1)", opacity: "0.3" },
        },
        "aurora-3": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0.15" },
          "100%": { transform: "translate(10%, -10%) scale(1.2)", opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
