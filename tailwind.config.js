/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      'brand': '#605AD6',
      'dark': '#0B0825',
      'background': '#FAFBFC',
      'text': '#24292E',
      'text-secondary': '#57606A'
    },},
  },
  plugins: [],
}
