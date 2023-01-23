/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        halfSpin: {
          '0%, 100%': { transform: 'rotate(70deg)' },
          '50%': { transform: 'rotate(320deg)'}
        }
      },
      screens: {
        'mdl': { 'min': '900px' },
        'xl': {'min': '3'}
      },
      animation: {
        'half-slow-spin': 'halfSpin 15s linear infinite'
      },
      height: {
        '120': '30rem',
        '200': '50rem',
        '90vh': '90vh'
      }
    },
  },
  plugins: [],
};
