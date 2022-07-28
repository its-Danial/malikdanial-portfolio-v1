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
