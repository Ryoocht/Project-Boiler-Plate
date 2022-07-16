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
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      animation: {
        'spinner': 'spin 2s ease infinite'
      },
      keyframes: {
        'spin': {
          '0%, 100%': { transform: 'translate(0)'},
          '25%': { transform: 'translate(160%)'},
          '50%': { transform: 'translate(160%, 160%)'},
          '75%': { transform: 'translate(0, 160%)'},
        }
      }
    },
  },
  variants: {
    extend: {

    }
  },
  plugins: [],
}
