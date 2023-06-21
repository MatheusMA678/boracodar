/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Hepta Slab', sans-sefif"
      },
      // colors: {
      //   gray: {
      //     900: "#121214"
      //   }
      // }
    },
  },
  plugins: [],
}

