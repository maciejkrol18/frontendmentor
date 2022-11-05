/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
        colors: {
            // style-guide.md
            'fem-light-gray': 'hsl(212, 45%, 89%)',
            'fem-dark-blue': 'hsl(218, 44%, 22%)',
            'fem-grayish-blue': 'hsl(220, 15%, 55%)',
        },
        fontFamily: {
            // style-guide.md
            'outfit': ['Outfit', 'Helvetica', 'sans-serif']
        }
    },
  },
  plugins: [],
}
