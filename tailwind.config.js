module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darker-blue': '#052245',
        'regular-blue': '#19ADF9',
        'regular-green': '#30BF80',
        'light-green': '#59AC61',
        'off-white': '#FFFFFF',
        'off-grey': '#A4BED2',
        'light-blue': '#A1C2D3',
        'about-blue': '#0381C1',
        'pricing-blue': '#213E60',
        'light-regular-blue': '#4EC3FF',
        'pricing-whiteblue': '#EEF7FF',
        'pricing-white': '#ECF6FF',
        'darker-orange': '#F59D4B',
        
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
