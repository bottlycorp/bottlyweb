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
          DEFAULT: "#373A56",
          dark: "#6773DA"
        },
        secondary: {
          DEFAULT: "#6A6A6A",
          text: {
            DEFAULT: "#787878",
            dark: "#E6E6E6"
          },
          dark: "#6A6A6A"
        },
        gold: {
          DEFAULT: "#FDD64D",
          dark: "#C1A951"
        },
        danger: {
          DEFAULT: "#FF3366"
        }
      }
    }
  },
  plugins: []
};