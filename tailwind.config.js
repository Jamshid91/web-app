/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'lato': ["Lato", 'system-ui'],
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        'black-light': '#484848',
        'gray': '#606060',
        'gray-light': '#ABABAB',
        'gray-light2': '#E0E5E4',
        'gray-dark': '#565656',
        'dark': '#232323',
        'primary': '#7E77F9',
        'primary-dark': '#5660D1',
        'primary-light': '#ACB0FF',
        'primary-thin': '#D5DDFF',
        'blue-light': '#DCDEFF',
        'blue-dark': '#413F6B',
      },
    }
  }
}