/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/index.html", "src/**/*.@(ts|tsx)"],
  theme: {
    // 参照　https://ironodata.info/rgb.php?color=6DCAD4
    colors: {
      black: "#333333",
      white: "#ffffff",
      reverse: "#6DCAD4",
      background: {
        primary: "#6DCAD4",
        secondary: "#58A5AD",
        reverse: "#ffffff",
      },
      buttonColor: {
        primary: "#458187",
      },
    },
    extend: {},
  },
  plugins: [],
};
