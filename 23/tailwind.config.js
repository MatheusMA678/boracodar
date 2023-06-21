/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'IBM Plex Sans', sans-serif",
      },

      colors: {
        purple: {
          500: "#8257E5",
          600: "#633BBC",
        },
        gray: {
          100: "#E1E1E6",
          200: "#8D8D99",
          300: "#7C7C8A",
          400: "#323238",
        },
        success: "#1D8841",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
