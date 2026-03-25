/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.js', './src/**/*.{js,jsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        org: {
          red: '#C8102E',
          redDark: '#9E0B24',
          paper: '#F4F4F5',
          ink: '#0F172A',
          line: '#E4E4E7',
        },
      },
    },
  },
  plugins: [],
};
