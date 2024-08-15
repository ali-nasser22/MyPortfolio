/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins':['poppins','sans-serif'],
    },
    screens:{
      'md':{'max':'768px'},
      'lg':{'max':'992px'},
      'xsm':{'max':'350px'},
      'sm':{'max':'576px'},
      
    },
    extend:{
      colors:{
        title:'hsl(0,0,20%)',
        'dark-title':'hsl(0,0,0%)',
        p:'hsl(0,0,46%)',
        body:'hsl(0,0,98%)',
        container:'#fff',
      },
      boxShadow:{
        'one':'0 -1px 4px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: [],
}

