/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Chillax-Variable", "sans-serif"],
      chillaxXL: ["Chillax-Extralight", "sans-serif"],
      chillaxL: ["Chillax-Light", "sans-serif"],
      chillaxR: ["Chillax-Regular", "sans-serif"],
      chillaxM: ["Chillax-Medium", "sans-serif"],
      chillaxSB: ["Chillax-Semibold", "sans-serif"],
      chillaxB: ["Chillax-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        'main-green':'#5e5c3b',
        'second-green':'#868254',
        'third-green':'#B2A769',
        'accent-red':'#AF6246',
        'accent-red-dark':'#92523A',
        'accent-purple':'#762D6A',
        'blue':'#75BBFF',
        'grey':'#75786A'
      }
    },
  },
  plugins: [],
}

