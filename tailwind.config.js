/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app": "minmax(100px, 4fr) minmax(150px, 6fr) minmax(375px, 15fr)"
      }
    },
  },
  plugins: [],
}

