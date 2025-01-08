import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#172A3A", // Dark Navy Blue
        foreground: "#FFFFFF", // White
        primary: {
          DEFAULT: "#1F3541", // Darker Steel Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#324A5F", // Steel Blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#EF8354", // Coral Orange
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#4F5D75", // Slate Blue
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#004643", // Deep Teal
          foreground: "#FFFFFF",
        },
        // Additional custom colors from the image
        "navisa-dark": "#0D1B24", // Darkest Blue
        "navisa-steel": "#324A5F", // Steel Blue
        "navisa-slate": "#4F5D75", // Slate Blue
        "navisa-teal": "#004643", // Deep Teal
        "navisa-forest": "#26413C", // Forest Green
        "navisa-coral": "#EF8354", // Coral Orange
        "navisa-sky": "#D6EFFF", // Light Sky Blue
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;