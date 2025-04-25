/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'animate-spin',
    'rounded-full',
    'h-32',
    'w-32',
    'border-t-4',
    'border-yellow-500'
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        coffeeBrown: "#4B2E0E",
        coffeeLight: "#6B4E16",
        coffeeYellow: "#F3C677",
      },
    },
  },
  plugins: [],
}
