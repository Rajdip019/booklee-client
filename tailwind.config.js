module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin:{
          darkGreen: 'var(--dark-green)',
          darkBlue: 'var(--dark-blue)',
          darkRed: 'var(--dark-red)',
          lightGreen: 'var(--light-green)',
          lightBlue: 'var(--light-blue)',
          lightRed: 'var(--light-red)'
        }
      },
      backgroundColor: {
        skin:{
          darkGreen: 'var(--dark-green)',
          darkBlue: 'var(--dark-blue)',
          darkRed: 'var(--dark-red)',
          lightGreen: 'var(--light-green)',
          lightBlue: 'var(--light-blue)',
          lightRed: 'var(--light-red)',
          hoverGreen: 'var(--btn-hover-green)',
          hoverBlue: 'var(--btn-hover-blue)'
        },
      },
      fontFamily: {
        rokkitt: "'Rokkitt', serif;",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"),require('@tailwindcss/forms')]
  
}
