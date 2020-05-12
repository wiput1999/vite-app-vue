module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './App.vue',
      './components/**/*.vue'
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
