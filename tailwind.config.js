/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-white': '#f9f9f9',
        'btn-primary': '#3797EF',
        'primary': '#3797EF'
      }
    },
  },
  plugins: [],
}

