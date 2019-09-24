const svelte = require("rollup-plugin-svelte")
const commonjs = require("rollup-plugin-commonjs")
const resolve = require("rollup-plugin-node-resolve")
const tsplugin = require("rollup-plugin-typescript2")
const typescript = require("typescript")
const { terser } = require("rollup-plugin-terser")
const serve = require("rollup-plugin-serve")
const livereload = require("rollup-plugin-livereload")

// const tsconfig = require('./tsconfig.json')
const svelteConfig = require("./svelte.config.js")
const base = "public"
const prod = process.env.NODE_ENV === "production"
const dev = process.env.NODE_ENV === "development"
const css = process.env.NODE_ENV === "test" ? 
  false : css => css.write(base + "/bundle.css")



module.exports = {
    input: "src/main.ts",
    output: {
      sourcemap: true,
      name: "main",
      file: base + "/bundle.js",
      format: "iife",
      exports: "named"
    },
    plugins: [
      svelte({ dev, css, ...svelteConfig }),
      resolve({ 
        browser: true,
        dedupe: importee => importee === "svelte" || importee.startsWith("svelte/")
      }), 
      commonjs({ include: "node_modules/**" }),
      tsplugin({ 
        typescript,
        tsconfig: './tsconfig.json'
      }),
      dev && serve({
          open: false,
          openPage: "/index.html",
          historyApiFallback: "/index.html",
          contentBase: ["./" + base]
        }),
      process.env.ROLLUP_WATCH && livereload({ watch: base }),
      prod && terser({ sourcemap: true })
      ]
  }
