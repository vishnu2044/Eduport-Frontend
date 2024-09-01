/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: '#000000', // Set default text color to black
      },
    },
  },
  plugins: [],
}
