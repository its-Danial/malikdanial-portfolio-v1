/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        latoSans: ["Lato"],
      },
      boxShadow: {
        "3xl": "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
      },
      colors: {
        nextBlue: "#0070f3",
        eggshell: "#F9FEFF",
        brightBlue: "#72f9f5",
        lightBlue: "#4083f2",
      },
      animation: {
        spin: "spin 0.5s linear",
        "reverse-spin": "reverse-spin 0.5s linear",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
