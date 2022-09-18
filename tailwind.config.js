/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'xs' :'400px',
      'sm':'480px',
      'md':'768px',
      'lg':'976px',
      'xl':'1440px',
      

    },
    extend: {
      fontFamily:{

        fredoka:["Fredoka", "sans-serif"]
      },
      colors: {
        
        'cprintYellow': '#FFE74C',
        'cprintRed': '#FF5964',
        'cprintDblue': '#38618C',
        'cprintBlue' : '#35A7FF'
      },
      backgroundImage:{
        'welcome': "url(./images/comic.jpg)"

      },

    },
  },
  plugins: [],
}