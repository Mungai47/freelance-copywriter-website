/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'whitesmoke': '#f5f5f5',
      'black': '#121212',
      'white': '#ffffff',
      'cyan-green': '#4a7973',
    },
    extend: {},
  },
  plugins: [],
}
