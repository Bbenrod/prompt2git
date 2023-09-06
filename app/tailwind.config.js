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
        'git-brown-10': '#50421f',
        'git-brown-20': '#645738',
        'git-brown-30': '#776c51',
        'git-brown-d10': '#1f1d1a',
        'git-brown-d20': '#383634',
        'git-brown-d30': '#514f4d',
        'git-brown-90': '#060401',
        'git-orange': '#f1502d',
        'git-orange-2' : '#b0751d',
        'git-white': '#f8f4ed',
        'git-white-10': '#dfdcd5',
        'git-white-20': '#c6c3be',
      }
    },
  },
  plugins: [],
}