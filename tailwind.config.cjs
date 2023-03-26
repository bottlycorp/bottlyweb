/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "background": "#161618",
        "plus": "#FFE18A",
        "discord": "#5865F2",
      }
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },
  },
  plugins: [],
}
