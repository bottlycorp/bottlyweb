/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      "Outfit": ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6773DA",
        secondary: {
          DEFAULT: "#6A6A6A",
          text: "#E6E6E6"
        },
        gold: "#FDD64D",
        danger: "#FF3366"
      }
    }
  },
  plugins: []
};