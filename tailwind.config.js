/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#092434",
        second: "#0AA9FF",
        third: "#F4F9E9",
        fourth: "#FFCF33",
        fifth: "#DB324D",
      },
    },
  },
  plugins: [],
};
