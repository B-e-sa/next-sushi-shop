/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'half-slow-spin': 'spin 10s linear infinite' 
      },
      height: {
        '136': '34rem'
      }
    },
  },
  plugins: [],
};
