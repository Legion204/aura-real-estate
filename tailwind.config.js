/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Playfair: ["Playfair Display", 'serif'],
      Work: ['Work sans', 'serif'],
    },
  },
  plugins: [require("daisyui"),
  require('@tailwindcss/forms'),
  ],
}

