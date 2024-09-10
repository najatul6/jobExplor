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
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #7E90FE, #9873FF)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

