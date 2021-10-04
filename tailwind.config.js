module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      first:'#009da6',
      second:'#ff9c27',
      ash:'#53524d',
      white:'#fff',
      third:'#fafafa'
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
