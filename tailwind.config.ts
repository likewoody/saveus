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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: "#137fec",
        background: {
          light: "#f6f7f8",
          dark: "#101922",
        },
        surface: {
          light: "#ffffff",
          dark: "#19232d",
        },
        status: {
          green: "#99E89D",
          red: "#ff2c2c",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
