const purgeCss =
  process.env.NODE_ENV === 'production'
    ? [
        require('@fullhuman/postcss-purgecss'),
        {
          content: [
            './components/**/*.vue',
            './App.vue'
          ],
          defaultExtractor: (content) =>
            content.match(/[A-Za-z0-9-_:/]+/g) || [],
        },
      ]
    : undefined

module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('tailwindcss'),
    require('postcss-preset-env'),
    // purgeCss,
    require('autoprefixer'),
    require('cssnano'),
  ]
}