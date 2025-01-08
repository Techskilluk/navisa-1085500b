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
          DEFAULT: "#122932", // Gunmetal
          foreground: "#FFFCF9", // Baby Powder
        },
        secondary: {
          DEFAULT: "#324A5F", // Steel Blue
          foreground: "#FFFCF9", // Baby Powder
        },
        accent: {
          DEFAULT: "#EF8354", // Coral
          foreground: "#FFFCF9", // Baby Powder
        },
        muted: {
          DEFAULT: "#4F5D75", // Payne's Gray
          foreground: "#E2DCDE", // Platinum
        },
        card: {
          DEFAULT: "#004643", // Brunswick Green
          foreground: "#FFFCF9", // Baby Powder
        },
        // Additional custom colors
        "dark-slate": "#26413C", // Dark Slate Green
        "columbia-blue": "#D6EFFF", // Columbia Blue
        wheat: "#FFE8C2", // Wheat
        "sandy-brown": "#F0A868", // Sandy Brown
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