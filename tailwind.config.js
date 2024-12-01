/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: 'fall 10s linear infinite',
        fadeIn : 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fall: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
    
  },
  plugins: [
    
    require('tailwindcss-patterns'),
  ],
}

