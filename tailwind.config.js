module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darker-blue': '#052245',
        'regular-blue': '#19ADF9',
        'regular-green': '#30BF80',
        'off-white': '#FFFFFF',

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
