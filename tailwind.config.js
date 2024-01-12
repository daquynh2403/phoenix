/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showUp: {
          '0%, 50%': { opacity: '0'},
          '50%': { opacity: '0.5'},
          '100%': { opacity: '1'},

        } 
      },
      animation: {
        showUp: 'showUp 3s ease-in-out 1'
      }
    },
    variants: {
      extend: {
        translate: ['group-hover', 'hover'],
        zIndex: ['group-hover', 'hover'],
      },
    }
  },
  plugins: [],
}