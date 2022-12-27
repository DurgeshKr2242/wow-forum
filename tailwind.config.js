/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#121212",
        Gray: "#363636",
        White: "#FCFCFC",
        WhiteSec: "#F3F3F3",
        Blue: "#3D5AF1",
        Red: "#FF5D75",
      },
    },
  },
  plugins: [],
};
