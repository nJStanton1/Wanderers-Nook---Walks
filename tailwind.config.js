/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
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
        'main-green':'#5E5C3B',
        'second-green':'#868254',
        'third-green':'#B2A769',
        'red':'#AF6246',
        'grey':'#75786A',
      }
    },
  },
  plugins: [],
}

