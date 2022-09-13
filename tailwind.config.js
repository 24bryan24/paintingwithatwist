/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Allura: ["Allura", "cursive"],
        Celestina: ["Celestina", "cursive"],
        GreatVibes: ["Great Vibes", "cursive"],
        DancingScript: ['Dancing Script', 'cursive']
      },
      screens: {
        large: "992px",
        // => @media (min-width: 992px) { ... }
        medium: "767px",
        // => @media (min-width: 767px) { ... }
      },
    },
  },
  plugins: [],
};
