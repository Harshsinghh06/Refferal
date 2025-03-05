 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "Lora"], // Add more custom font families as needed
      },
      colors: {
        'tahiti': {
        100: '#ff3131',
        200: '#ff110e',
        300: '#fcff34',
        400: '#faf1e7',
        500: '#ffd7f1',
        600: '#ffddda',
        700: '#fff1e4',
        800: '#d6ffef',
        900: '#d7e1ff',
      },
      }
    },
  },
  plugins: [],
}