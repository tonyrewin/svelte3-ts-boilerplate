const { 
  preprocess, 
  createEnv, 
  readConfigFile } = require('@pyoner/svelte-ts-preprocess')
const autoPreprocess = require('svelte-preprocess')

const postcss = require('./postcss.config.js')
const env = createEnv()

module.exports = {
  preprocess: {
    ...preprocess({
        env,
        compilerOptions: {
          ...readConfigFile(env),
          allowNonTsExtensions: true
        }
    }),
    ...autoPreprocess({ transformers: { postcss } })
  }
}
