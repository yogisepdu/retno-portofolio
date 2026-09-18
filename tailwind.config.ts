import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#0f172a",
        accent: "#7c3aed",
        accent2: "#06b6d4",
      },
    },
  },
  plugins: [],
};

export default config;
