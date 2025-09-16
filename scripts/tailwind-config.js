/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // all HTML files in the root
    "./src/**/*.html",  // if you put HTML in src/
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
