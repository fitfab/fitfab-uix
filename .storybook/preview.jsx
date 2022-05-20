import React from 'react';
import "../src/styles/main.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const styles = { margin: '.5rem auto' }


export const decorators = [
  (Story) => (
      <div style={styles}>
          <Story />
      </div>
  ),
]
