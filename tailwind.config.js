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
        'off-grey': '#A4BED2',
        'light-blue': '#A1C2D3',
        'about-blue': '#0381C1',
        'pricing-blue': '#213E60',
        'pricing-whiteblue': '#EEF7FF',
        

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
