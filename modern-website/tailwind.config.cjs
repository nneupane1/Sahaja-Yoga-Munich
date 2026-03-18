/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#04131b',
        abyss: '#071d28',
        mist: '#d8e5e1',
        sand: '#f3d7ab',
        ember: '#e5a65f',
        seafoam: '#78b2b5'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(4, 19, 27, 0.45)'
      }
    }
  },
  plugins: []
};
