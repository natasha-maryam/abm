/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans","sans-serif"],
        dm: ["DM Sans"],
        clash: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
