/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dynamic: ['"Allura"', 'cursive'], // curly, elegant typewriter words
        logo: ["Playfair Display", "serif"], // for brand/logo
        navbar: ["Lato", "sans-serif"],      // for links & buttons
      },
    },
  },
  plugins: [],
}