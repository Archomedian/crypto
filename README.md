# crypto

Requires .env in root directory

example .env:
```
VITE_PANCAKE_API_URL = https://api.pancakeswap.info/api/v2
VITE_PANCAKE_API_TOKENS_URI = /tokens

VITE_GECKO_API = https://api.coingecko.com/api/v3

VITE_GECKO_API_COINS_MARKET_URI = /coins/markets
VITE_GECKO_API_COINS_MARKET_FIAT = eur
VITE_GECKO_API_COINS_MARKET_TOKENS_PER_PAGE = 50
VITE_GECKO_API_COINS_MARKET_STARTING_NUMBER_OF_PAGES = 1

VITE_GECKO_API_COINS_LIST_URI = /coins/list
VITE_GECKO_API_COINS_LIST_INCLUDE_PLATFORM = true
```

You can check the variables that exist in the src/env.d.ts file

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
