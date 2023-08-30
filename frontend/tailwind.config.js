import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ['Nunito', 'sans-serif'],
        parrafo: ['Roboto', 'sans-serif']
      },
      colors: {
        marronCustom: 'var(--marron-custom)',
        greenCustom: 'var(--green-custom)',
        greenCustom2: 'var(--green-custom2)',
        oranjeCustom: 'var(--oranje-custom)',
        blackCustom: 'var(--black-custom)',
        lightBrownCustom: 'var(--lightBrown-custom)',
        greyCustom: 'var(--grey-custom)',
        whiteCustom: '#ffff',
        whiteCustom1: 'var(--white-custom1)',
        whiteCustom2: 'var(--white-custom2)',
        whiteCustom3: 'var(--white-custom3)',
        whiteBackgroundForm: '#f6f6f6',
        whiteBackgraundForm2: '#FFFFFF',
        greenCard: '#9FCB38'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.botonBase': {
          background: '#f8f9fa;',
          boxShadow: '3px 3px 3px #be995c, -3px -3px 3px #ffeb8c',
          color: 'var(--green-custom2)',
          border: '1px solid var(--white-custom1)',
          borderRadius: '30px',
          transition: 'all .2s linear',
          padding: '8px 25px',

          '&:hover': {
            background: 'linear-gradient(145deg, #e26f02, #be5e02)',
            boxShadow: '3px 3px 3px #a75202, -3px -3px 3px #ff7e02',
            color: 'var(--white-custom1)',
            border: '1px solid var(--oranje-custom)'
          }
        }
      })
    })
  ]
}
