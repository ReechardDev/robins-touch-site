/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#008080",
          gold: "#DAA520",
          charcoal: "#2D3748",
          mint: "#E6FFFA",
          graybg: "#F4F6F8"
        }
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)"
      },
      borderRadius: {
        '2xl': "1rem"
      }
    },
  },
  plugins: [],
};