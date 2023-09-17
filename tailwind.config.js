/** @type {import('tailwindcss').Config} \*/
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    extend: {
      backgroundImage: {
        'hamburguer': "url('/hamburguer-background.png')",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
