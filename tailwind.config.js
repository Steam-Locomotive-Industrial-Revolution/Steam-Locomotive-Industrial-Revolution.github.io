/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./**/*.js",
    "./*.html",
    "./src/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'yinmn-blue': '#4c6085',
        'celestial-blue': '#39a0ed',
        'aquamarine': '#36f1cd',
        'mint': '#13c4a3',
        'black-olive': '#32322c',
      }
    },
  },
  plugins: [],
}
