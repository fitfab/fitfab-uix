# fitfab-uix

`fitfab user interface experience` is a collection of `React` components and utilities for building webpages relying on modern web apis.

This project uses the following technologies:

- [vitejs](https://vitejs.dev/)
- [reactjs](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)

## Create project with Vitejs

I started with the following CMD:

`yarn create vite fitfab-uix --template preact-ts`

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
