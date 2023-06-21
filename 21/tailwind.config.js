/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
      colors: {
        purple: {
          600: "#9333EA",
          500: "#A855F7",
          400: "#C084FC",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#E4E4E7",
          200: "#A1A1AA",
          300: "#3F3F46",
          400: "#18181B",
        },
      },
    },
  },
  plugins: [],
};
