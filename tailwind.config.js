module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darker-blue': '#052245',
        'regular-blue': '#19ADF9',
        'light-regular-blue': '#5CC8FF',
        'regular-green': '#30BF80',
        'off-white': '#FFFFFF',
        'off-grey': '#A4BED2',
        'light-blue': '#A4BED2',
        'about-blue': '#0381C1',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
