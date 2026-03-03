/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079c1",     // Gazprom blue (logo)
        accent: "#f59e0b",      // Home link orange
        heroLeft: "#ff8a00",    // Hero gradient left
        heroRight: "#9ca3af",   // Hero gradient right
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};