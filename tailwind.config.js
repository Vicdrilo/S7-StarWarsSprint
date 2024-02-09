/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/component/*.jsx"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#FFF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Roboto Slab", "Merriweather", "serif"],
      mono: ["Courier New", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
