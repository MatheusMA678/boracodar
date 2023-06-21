/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      colors: {
        purple: {
          dark: "#372D3B",
          medium: "#864293",
        },
        gray: {
          light: "#E5D8EA",
        },
      },
    },
  },
  plugins: [],
};
