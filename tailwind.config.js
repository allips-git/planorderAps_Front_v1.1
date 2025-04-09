/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    // ...
  
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx,html}",
      './index.html'
    ],
    theme: {
      extend: {
        screens: {
          '3xl': '1920px',
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
  
  