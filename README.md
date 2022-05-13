# fitfab-uix

`fitfab user interface experience` is a collection of React components and utilities for building user interfaces using web api technologies. (and of course, Reactjs.)

This project uses the following technologies:

- [vitejs](https://vitejs.dev/)
- [reactjs](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)

## Vitejs

I started with the following CMD:

`yarn create vite fitfab-uix --template preact-ts`

### Vite Library Mode

Follow these steps from the [Vite library mode documentation](https://vitejs.dev/guide/build.html#library-mode) to setup the project as a library:

## TypeScript

I am using TypeScript to generate the types of the components and utilities with the command below.

```json
// Command to generate the types within the package.json file
"postbuild": "tsc --emitDeclarationOnly"
```

And type checking is enabled when building with the following command.

```json
// Command to build the project with type checking within the package.json file
"build": "tsc --noemit && vite build",
```

## Storybook with Vitejs

I install storybook with the command below at the foot of the project.

`npx sb init --builder @storybook/builder-vite`

Reference: [Storybook for vite](https://storybook.js.org/blog/storybook-for-vite/)
