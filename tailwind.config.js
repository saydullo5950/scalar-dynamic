/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brend: {
          blue: {
            100: '#5F7AFF',
            200: '#1A253C',
            300: '#2E3F63',
            400: '#848D9B',
            500: '#E5EAFF'
          },
          gray: {
            100: '#F2F3FC'
          },
          primary: {
            100: '#F8F9FD'
          }
        }
      }
    },
  },
  gins: [],
}
