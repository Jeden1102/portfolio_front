/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc3949',
        secondary: '#283036',
      },
      fontFamily: {
        primary: ['"Inter"'],
      },
    },
  },
  plugins: [],
}
