/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mdl': { 'min': '900px'}
      },
      animation: {
        'half-slow-spin': 'spin 10s linear infinite'
      },
      height: {
        '136': '34rem',
        '272': '68rem'
      }
    },
  },
  plugins: [],
};
