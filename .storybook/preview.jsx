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

const styles = { padding: '2rem', margin: '1rem auto', width: '80%', background: '#eee' }


export const decorators = [
  (Story) => (
      <div style={{}}>
          <Story />
      </div>
  ),
]
