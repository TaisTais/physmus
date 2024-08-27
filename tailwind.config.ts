import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        input: "hsl(var(--input))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary:"hsl(var(--secondary))",
        hover: "hsl(var(--hover))",
        focus: "hsl(var(--focus))",
        popover: "hsl(var(--popover))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          orange: "hsl(var(--accent-orange))",
          lime: "hsl(var(--accent-lime))",
          blue: "hsl(var(--accent-blue))",
          yellow: "hsl(var(--accent-yellow))",
          green: "hsl(var(--accent-green))",
          pink: "hsl(var(--accent-pink))",
          sky: "hsl(var(--accent-sky))",
        },
        light: {
          peach: "hsl(var(--light-peach))",
          lime: "hsl(var(--light-lime))",
          blue: "hsl(var(--light-blue))",
          yellow: "hsl(var(--light-yellow))",
          green: "hsl(var(--light-green))",
          pink: "hsl(var(--light-pink))",
          sky: "hsl(var(--light-sky))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tertriary: "hsl(var(--tertriary))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate")
  ],
} satisfies Config

export default config