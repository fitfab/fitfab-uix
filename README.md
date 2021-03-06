# fitfab-uix

`fitfab user interface experience` is a collection of `React` components and utilities for building webpages relying on modern web apis.

This project uses the following technologies:

- [vitejs](https://vitejs.dev/)
- [reactjs](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)

TODO:

[] add unit test

[] add storybook accessibility plugin

[] add light-house or web-vitals

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

Enable Vite code spliting by adding the following configuration to the `.storybook/main.js` file. Read more about [Storybook Performance: Vite vs Webpack](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite/).

```js
  features: {
    storyStoreV7: true,
  },
```

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
Do not use a triple slash reference for vite/client, use `import` style instead.
(@typescript-eslint/triple-slash-reference)
```

## Commilint setup

Reference: [Commilint local setup guide](https://commitlint.js.org/#/./guides-local-setup?id=guides-local-setup)

  ```bash
  # 1. Install the npm package
  yarn add -D @commitlint/{cli,config-conventional}

  # 2. Create a commilint.config.js file and 
  # configure commitlint to use conventional config
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
  ```

### Install Husky

Reference: [A handy git hook helper.](https://typicode.github.io/husky/#/?id=manual)
  
  ```bash
  # 1. Install the npm package
  yarn add -D husky

  # 2. Enable git hooks
  npx husky install

  # 3. To automatically have Git hooks enabled after install, edit package.json
  npm set-script prepare "husky install"

  # 4. The command above will add this to the package.json file:
  {
    "scripts": {
      "prepare": "husky install"
    }
  }

  # 5. Add 1st hook with the Command below
  cat <<EEE > .husky/commit-msg
  #!/bin/sh
  . "\$(dirname "\$0")/_/husky.sh"

  npx --no -- commitlint --edit "\${1}"
  EEE

  # 6. Add 2nd hook with the husky Command below
  npx husky add .husky/pre-commit "npx lint-staged"
  ```

### Lint-staged setup
  
  ```bash
  # 1. Install the npm package
  yarn add -D lint-staged

  # 2. Add the following to the package.json file
    "lint-staged": {
      "*.{js,ts,tsx}": [
        "yarn lint"
      ]
    }
  ```

## Release-please setup

  Reference: [Release-please github action setup documentation](https://github.com/google-github-actions/release-please-action)

## Jest & Testing-library setup

```bash

yarn add -D jest @types/jest jest-environment-jsdom ts-jest @testing-library/jest-dom @testing-library/react @testing-library/react-hooks @testing-library/user-event identity-obj-proxy
```

- Add a **jest.setup.ts** file [jest.setup.ts](./jest.setup.ts)

  ```js
  // jest-dom adds custom jest matchers for asserting on DOM nodes.
  // allows you to do things like:
  // expect(element).toHaveTextContent(/react/i)
  // learn more: https://github.com/testing-library/jest-dom
  import '@testing-library/jest-dom'
  ```

- Add a **jest.config.js** file [jest.config.js](./jest.config.js)

  Make sure you point to the `jest.setup.ts` within `jest.config.js` file.

  ```ts
    // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed
    // https://jestjs.io/docs/configuration#setupfilesafterenv-array
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  ```

- Update the `tsconfig.json` file to include the following types:

  ```json
    //...
    "types": ["vite/client", "@types/jest", "@testing-library/jest-dom"]
  ```
