/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      screens:{
          
          
          'mobile':'340px',
          'sf':'280',
          
      },
      fontSize:{
        'tiny':'.75rem',
        'ml':'.800rem'
        
    },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
      smartaudiotheme: {
        primary: "#18191F",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
      },
    },
    ],
  },
}
