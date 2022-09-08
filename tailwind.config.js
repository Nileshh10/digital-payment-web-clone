/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    }, 
    extend: {
      colors:{
      lightblue: '#00baf2;',
      darkblue: '#002970;',
      hover1: '#00afe3',
      hover2: '#0d3e80',
      backgroundlight: '#f0fbff'
      }
    },
  },
  plugins: [],
}
