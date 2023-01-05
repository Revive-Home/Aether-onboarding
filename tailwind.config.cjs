/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      divider: "#DFE0EB",
      green: "#17D1B2",
      greenDark: "#14a38b",
      greenLight: "rgba(23, 209, 178, 0.06)",
      grey: "#CCD5E4",
      inputBorder: "#c5c7cd",
      mainBlue: "#1b1f4f",
      midwayDarker: "#5f708c",
      navy: "#242254",
      purple: "#676AA7",
      purpleMenu: "#686CA3",
      purpleSubMenuAlt: "#f4f4fe",
      lavender: "#B2B4D0",
      lavenderLight: "#DADCFF",
      red: "#E01E5A",
      white: "#fff",
      yellow: "#f6b91f",
    },
  },
  plugins: [],
};
