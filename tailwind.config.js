
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    container:{
      center:'true',
       padding:{
        DEFAULT:'20px',
        sm:'30px',
        md:'40px',
        lg:'60px'
       },
      
    },
    fontFamily:{
     'sans-sarif': ['poppiens']
    },
    extend: {
    
    },
  },
  plugins: [],
}