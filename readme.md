# Svelte3-Typescript Boilerplate

TS analytics works in VSCode! Based on [geakstr/svelte-3-rollup-typescript-vscode](https://github.com/geakstr/svelte-3-rollup-typescript-vscode)

## Description

Starter pack for Svelte 3/Rollup/Typescript/Visual Studio Code:

- Typescript support inside Svelte components with [@pyonr/svelte-ts-preprocess](https://github.com/pyonr/svelte-ts-preprocess)
- Also it adds some support for Visual Studio Code and [svelte-vscode](https://github.com/UnwrittenFun/svelte-vscode) extension (via `svelte.config.js`)
- Jest for test for .js/.ts/.svelte
- Supports `index.html` entry file, dev server to serve it and livereload
- ESLint, Prettier
- dts removed
- See all in `rollup.config.js`

## How to start

Please, notice the importance of `svelte.config.js` in the root directory for VSCode to use your project's preprocessors. Jest, Prettier, ESLint, PostCSS are optional but useful. So clone and

```sh
npm i
npm run dev
```
