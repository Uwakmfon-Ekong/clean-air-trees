import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          darkest: "#0a1f0d",
          dark: "#1b5e20",
          mid: "#2e7d32",
          DEFAULT: "#388e3c",
          light: "#4caf50",
          bright: "#66bb6a",
          pale: "#a5d6a7",
          mist: "#e8f5e9",
          fog: "#f1f8e9",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
