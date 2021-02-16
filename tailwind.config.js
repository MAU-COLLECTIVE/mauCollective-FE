module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '414px',
      'sm': '600px',
      'md': '900px',
      'lg': '1124px',
      'xl': '1265px',
      '2xl': '1530px'
    },
    fontFamily: {
      sans: ['Source Code Pro', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif'],
      mono: ['Source Sans Pro', 'monospace'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
