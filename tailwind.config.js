/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      "Outfit": ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6773DA",
          1: "#5f6ac9",
        },
        secondary: {
          DEFAULT: "#6A6A6A",
          1: "#595959",
        },
        gold: {
          DEFAULT: "#FDD64D",
          1: "#e6c245",
        },
        danger: {
          DEFAULT: "#FF3366",
          1: "#ed3261",
        }
      }
    }
  },
  plugins: []
};