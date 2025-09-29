/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0000ff',
        background: '#292a2d',
      },
      fontFamily: {
        custom: ['Meriva', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s forwards',
        letterPop: 'letterPop 0.5s forwards',
        zoomIn: 'zoomIn 0.6s forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        letterPop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '80%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomIn: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(2.9)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}