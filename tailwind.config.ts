import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        amiri: ["Amiri", "serif"],
      },
      backdropBlur: {
        lg: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
