const cssnano = require('cssnano')
const postcss_preset_env = require('postcss-preset-env')
const postcss_import = require('postcss-import')
const postcss_url = require('postcss-url')
const purgecss = require('@fullhuman/postcss-purgecss')

const dev = process.env.ROLLUP_WATCH

let plugins = [
  postcss_import(),
  postcss_url(),
  //require('bulma'),
  //require('tailwindcss'),
  postcss_preset_env({
    stage: 0,
    autoprefixer: {
      grid: true,
    },
  }),
  cssnano({
    autoprefixer: false,
    preset: ['default'],
  }),
]

if (!dev)
  plugins.push(
    purgecss({
      content: ['./**/*.html', './**/*.svelte'],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  )

module.exports = { plugins }
