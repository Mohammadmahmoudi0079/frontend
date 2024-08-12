/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        purple: "#674188"
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:'3rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem'
        }
      },
      container2:{
        center:false,
        padding:{
          default:"1rem",
          sm:'3rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem'
        }
      }
    },
  },
  plugins: [],
}