import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#ffffff",
        gray: {
          700: "#4a5568",
          800: "#2d3748",
        },
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
