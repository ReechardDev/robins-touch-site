/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#EFF8F6",
          100: "#D9F1EB",
          200: "#BCE5DC",
          300: "#8FD1C6",
          400: "#5DB7A9",
          500: "#2F9B8C",
          600: "#1F816F",
          700: "#14695A",   // Robin green
          800: "#0E5145",
          900: "#0B3E35",
        },
      },
    },
  },
  plugins: [],
};
