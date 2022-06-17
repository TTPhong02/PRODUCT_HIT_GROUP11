module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '300px',
      // => @media (min-width: 300px) { ... }

      'md': '740px',
      // => @media (min-width: 740px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
}
