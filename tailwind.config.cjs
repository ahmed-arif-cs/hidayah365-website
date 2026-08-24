/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0EB',
          100: '#CCE1D7',
          200: '#99C3AF',
          300: '#66A587',
          400: '#33875F',
          500: '#0E6B4F',
          600: '#0B5640',
          700: '#084130',
          800: '#052C21',
          900: '#021711',
        },
        gold: {
          50: '#FDF8E8',
          100: '#FBF1C8',
          200: '#F7E395',
          300: '#F3D562',
          400: '#EFC72F',
          500: '#D4A807',
          600: '#A78506',
          700: '#7A6204',
          800: '#4D3F03',
          900: '#201B01',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

