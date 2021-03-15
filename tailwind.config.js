module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '3/4': '75%'
     },
    screens: {
      'xs': '414px',
      'sm': '600px',
      'md': '900px',
      'lg': '1124px',
      'xl': '1265px',
      '2xl': '1530px',
      '3xl': '1920px'
    },
    fontFamily: {
      sans: ['Source Code Pro', 'sans-serif'],
      serif: ['Source Serif Pro', 'serif'],
      mono: ['Source Sans Pro', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.9375rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.5rem' }],
      xl: ['1.25rem', { lineHeight: '1.5rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '2.75rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        black: '#000000'
      },
    },
  },
  variants: {
    extend: {
      padding: ['first'],
      visibility: ['group-hover'],
      display: ['group-hover']
    },
  },
  plugins: [],
}
