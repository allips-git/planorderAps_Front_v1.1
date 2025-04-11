/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    // ...
  
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx,html}"
    ],
    theme: {
      extend: {
        screens: {
          '3xl': '1920px',
        },
        gridTemplateColumns: {
          '15': 'repeat(15, minmax(0, 1fr))'
        },
        gap: ['responsive', 'hover', 'focus']
      },
    },
    plugins: [
      require('@tailwindcss/forms')({
      }),
      require('tailwindcss-primeui'),
  
    ],
  }
  
  