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
      xss: ['0.6875rem', { lineHeight: '0.75rem', letterSpacing: '0.88px' }],
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.228px' }],
      sm: ['0.9375rem', { lineHeight: '1.25rem', letterSpacing: '0.285px' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.432px' }],
      xl: ['1.25rem', { lineHeight: '1.5rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3.125rem', { lineHeight: '3.5rem' }],
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
