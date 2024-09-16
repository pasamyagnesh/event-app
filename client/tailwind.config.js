/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {

      'xs':'480px',
      
      'sm': '640px',

      'md': '768px',

      'air':'820px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
      colors: {
        twitter: '#15202B',
        darkgreybackground: '#111111',
        darkgreytext:'#191919',
        pearl:'#f7f7f7',
        ivory:'#f7f6e4',
        cream:'#f9f4e1',
        oliurblue:'#0045d9',

      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],  // Add your Bebas Neue font here
        poppins: ['Poppins', 'Sans'],  // Add your Bebas Neue font here
        AmericanCaptainMdEY: ['AmericanCaptain-MdEY', 'sans-serif'],
        WallingtonRegularPYK7: ['WallingtonRegular-PYK7', 'sans-serif'],
        Dubiel: ['Dubiel', 'sans-serif'],
        DubielItalic: ['DubielItalic', 'sans-serif'],
        MarvelRegularDj83: ['MarvelRegular-Dj83', 'sans-serif'],
        Vogue: ['Vogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
