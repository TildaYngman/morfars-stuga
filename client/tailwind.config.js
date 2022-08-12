/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "1025px",
      xl: "1201px",
    },
    extend: {},
  },
  plugins: [],
};
