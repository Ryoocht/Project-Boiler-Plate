/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'SuggesterfyWhite': '#FFFFFF',
        'SuggesterfyRed': '#FA503D',
        'SuggesterfyDark': '#333333',
        'SuggesterfyGrey': '#EFEFEF',
        'SuggesterfyBlack': '#1F1F1F',
      },
      fontWeight: {
        extralight: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {

    }
  },
  plugins: [],
}
