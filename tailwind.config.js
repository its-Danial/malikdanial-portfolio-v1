/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        latoSans: ["Lato"],
      },
      colors: {
        nextBlue: "#0070f3",
      },
    },
  },
  plugins: [],
};
