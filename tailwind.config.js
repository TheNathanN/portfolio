module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      darkBlue: '#18172F',
      lightBlue: '#424487',
      blue: '#0B0D48',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
    },
    screens: {
      lg: '1000px',
      md: '700px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-to), var(--tw-gradient-from))',
      },
    },
  },
  plugins: [],
};
