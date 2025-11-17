import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["var(--font-audiowide)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          "50": "#fcf7fc",
          "100": "#f9edfa",
          "200": "#f1dbf3",
          "300": "#e8bee9",
          "400": "#d891d9",
          "500": "#c76ec7",
          "600": "#ab4eab",
          "700": "#8d3e8b",
          "800": "#733570",
          "900": "#602f5d",
          "950": "#3d153a",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        grid: "grid 15s linear infinite",
        marqueeVerticalUp: "marqueeVerticalUp 40s linear infinite",
        marqueeVerticalDown: "marqueeVerticalDown 40s linear infinite",
        marqueeHorizontalReverse:
          "marqueeHorizontalReverse 65s linear infinite",
        marqueeHorizontal: "marqueeHorizontal 65s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        marqueeVerticalDown: {
          "0%": {
            transform: "translateY(calc(-100% - 1rem))",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        marqueeVerticalUp: {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(calc(-100% - 1rem))",
          },
        },
        marqueeHorizontalReverse: {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        marqueeHorizontal: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
