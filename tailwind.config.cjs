/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#fff",
      gray: {
        100: "#F4F5F5",
        200: "#ECEDEF",
        300: "#B1B3B5",
        400: "#808080",
        500: "#555659",
        600: "#353638",
        700: "#2A2B2E",
        800: "#202122",
        900: "#161617",
      },
      darkPurple: {
        100: "#7F7DCA",
        200: "#6360BE",
        300: "#4A47AE",
        400: "#3E3B91",
        500: "#322F74",
        600: "#242254",
      },
      transparentDarkPurple: {
        100: "rgba(127, 125, 202, 0.4)",
        200: "rgba(127, 125, 202, 0.6)",
        300: "rgba(127, 125, 202, 0.8)",
      },
      lightPurple: {
        100: "#F2F2F8",
        200: "#D8D9E9",
        300: "#BEC0DA",
        400: "#A4A6CB",
        500: "#8A8DBC",
        600: "#676AA7",
      },
      green: {
        100: "#7FF0DD",
        200: "#48EACF",
        300: "#19D1B2",
        400: "#09493E",
      },
      turquoise: {
        100: "#C8F9F1",
        200: "#91F2E2",
        300: "#5BECD4",
      },
      yellow: {
        100: "#FCE6B1",
        200: "#F8CE62",
        300: "#F5B514",
      },
      red: {
        100: "#F29391",
        200: "#EE6F6D",
        300: "#EA4B48",
        400: "#E73936",
      },
    },
  },
  plugins: [],
};
