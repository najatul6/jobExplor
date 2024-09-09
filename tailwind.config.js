/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue":"#7E90FE",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

