const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addVariant }) {
      addVariant('children', '& > *')
      addVariant('last-children', '& > *:last-child')
    })
  ]
}
