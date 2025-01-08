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
        background: "#172A3A", // Prussian Blue
        foreground: "#FFFCF9", // Baby Powder
        primary: {
          DEFAULT: "#233D4D", // Gunmetal
          foreground: "#FFFCF9",
        },
        secondary: {
          DEFAULT: "#4F6D7A", // Steel Blue
          foreground: "#FFFCF9",
        },
        accent: {
          DEFAULT: "#FE5F55", // Coral
          foreground: "#FFFCF9",
        },
        muted: {
          DEFAULT: "#6E7E85", // Payne's Gray
          foreground: "#FFFCF9",
        },
        card: {
          DEFAULT: "#1B4B43", // Brunswick Green
          foreground: "#FFFCF9",
        },
        // Additional custom colors from the first iteration
        "navisa-dark": "#172A3A", // Prussian Blue
        "navisa-steel": "#4F6D7A", // Steel Blue
        "navisa-slate": "#6E7E85", // Payne's Gray
        "navisa-teal": "#1B4B43", // Brunswick Green
        "navisa-forest": "#2D5A27", // Dark Slate Green
        "navisa-coral": "#FE5F55", // Coral
        "navisa-sky": "#BFDBF7", // Columbia Blue
        "navisa-wheat": "#F5DEB3", // Wheat
        "navisa-sandy": "#F4A460", // Sandy Brown
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