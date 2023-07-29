/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "app": "minmax(200px, 4fr) minmax(1050px, 21fr)",
        "contact": "minmax(450px, 9fr) minmax(600px, 12fr)",
      }
    },
  },
  plugins: [],
}

