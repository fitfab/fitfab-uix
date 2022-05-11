# fitfab-uix

`fitfab user interface experience` is a collection of React components and utilities for building user interfaces using web api technologies. (and of course, Reactjs.)

This project uses the following technologies:

- [vitejs](https://vitejs.dev/)
- [reactjs](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [tailwindcss](https://tailwindcss.com/)

## TypeScript

I am using TypeScript to generate the types of the components and utilities with the command below.

```json
"postbuild": "tsc --emitDeclarationOnly"
```

And type checking is enabled when building with the following command.

```json
"build": "tsc --noemit && vite build",
```

## Storybook with Vitejs

[Storybook for vite](https://storybook.js.org/blog/storybook-for-vite/)
