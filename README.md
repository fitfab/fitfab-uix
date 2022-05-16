# fitfab-uix

`fitfab user interface experience` is a collection of `React` components and utilities for building webpages relying on modern web apis.

This project uses the following technologies:

- [vitejs](https://vitejs.dev/)
- [reactjs](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)

## Create project with Vitejs

I started with the following CMD:

`yarn create vite fitfab-uix --template react-ts`

### Vite Library Mode

Follow these steps from the [Vite library mode documentation](https://vitejs.dev/guide/build.html#library-mode) to setup the project as a library:

## TypeScript

Use TypeScript to generate the types of the components and utilities with the command below.

```json
// Command to generate the types within the package.json file
"postbuild": "tsc --emitDeclarationOnly"
```

And type checking is enabled when building with the following command.

```json
// Command to build the project with type checking within the package.json file
"build": "tsc --noemit && vite build",
```

## Install Storybook with Vitejs builder

Install storybook with the command below at the foot of the project.

`npx sb init --builder @storybook/builder-vite`

Reference: [Storybook for vite](https://storybook.js.org/blog/storybook-for-vite/)

## Install Tailwindcss

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

The command above will generate the `tailwindcss.config.js` file. Update the `tailwind.config.js` content to point to the `src` directory se below.

```js
module.exports = {
  // ...points to the src directory
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Then create a `postcss.config.js` file with the following content.

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Create a `styles` folder with a `main.css` file in it.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Point Storybook to the new Tailwindcss styles

Update the `.storybook/preview.js` file to consume the stylesheet by importing it.

```js
import "../src/styles/main.css";
export const parameters = { //... rest of the code
```

## Standardjs setup

Refer to the official [supported variant for TypeScript `ts-standard`](https://standardjs.com/index.html#typescript) for more information.

```bash
# Install the official supported variant for TypeScript
yarn add -D ts-standard
```

```json
// update the package.json file to tell ts-standard to use the tsconfig.json file
{
  "ts-standard": {
    "project": "./tsconfig.json"
  }
}
```

### VScode Worksapace setup with `ts-standard`

Workspace settings are specific to a project and can be shared across developers on a project. Workspace settings override user setting

References:

[VSCode workspace documentation](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)

[ts-standard options](https://github.com/standard/vscode-standard#extension-options)

```json
// workspace settings
{
  "editor.defaultFormatter": "standard.vscode-standard",
  "editor.formatOnSave": true,
  "[typescriptreact, typescript]": {
    "editor.defaultFormatter": "standard.vscode-standard",
    "editor.formatOnSave": true
  },
  "standard.run": "onSave",
  "standard.enable": true,
  "standard.engine": "ts-standard",
  "standard.usePackageJson": true,
  "standard.autoFixOnSave": true
}
```

#### Caveat after setting ts-standard

I have to ignore linting for `vite.config.ts` because it throws the error below.

```bash
vite.config.ts:0:0: Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: vite.config.ts.
The file must be included in at least one of the projects provided. ()
```

also, I have to ignore linting for `vite-env.d.ts` because it throws the error below.

```bash
Do not use a triple slash reference for vite/client, use `import` style instead. (@typescript-eslint/triple-slash-reference)
```