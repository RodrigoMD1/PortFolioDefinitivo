/** @type {import('tailwindcss').Config} */

export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      fontFamily:{
        body:['Fredoka'],
        subtext:['Nunito']
      }
    },
    
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}


