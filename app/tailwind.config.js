/** @type {import('tailwindcss').config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'git-brown': '#3d2d06',
        'git-orange': '#f1502d',
        'git-white': '#f8f4ed',
        'git-white-20': '#c6c3be',
        'git-white-40': '#95928e',
      }
    },
  },
  plugins: [],
}