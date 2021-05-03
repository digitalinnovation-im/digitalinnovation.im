const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand1": {
          "50": defaultTheme.colors.white,
          "100": defaultTheme.colors.white,
          "200": defaultTheme.colors.white,
          "300": defaultTheme.colors.white,
          "400": defaultTheme.colors.white,
          "500": defaultTheme.colors.white,
          "600": defaultTheme.colors.white,
          "700": defaultTheme.colors.white,
          "800": defaultTheme.colors.white,
          "900": defaultTheme.colors.white
        },
        "brand2": {
          "50": "#ff9832",
          "100": "#ff8e28",
          "200": "#ff841e",
          "300": "#ff7a14",
          "400": "#ff700a",
          "500": "#ff6600",
          "600": "#f55c00",
          "700": "#eb5200",
          "800": "#e14800",
          "900": "#d73e00"
        },
        // "brand3": {
        //   "50": defaultTheme.colors.gray["50"],
        //   "100": defaultTheme.colors.gray["100"],
        //   "200": defaultTheme.colors.gray["200"],
        //   "300": defaultTheme.colors.gray["300"],
        //   "400": defaultTheme.colors.gray["400"],
        //   "500": defaultTheme.colors.gray["500"],
        //   "600": defaultTheme.colors.gray["600"],
        //   "700": defaultTheme.colors.gray["700"],
        //   "800": defaultTheme.colors.gray["800"],
        //   "900": defaultTheme.colors.gray["900"]
        // }
        "brand3": {
          "50": "#434a59",
          "100": "#39404f",
          "200": "#2f3645",
          "300": "#252c3b",
          "400": "#1b2231",
          "500": "#111827",
          "600": "#070e1d",
          "700": "#000413",
          "800": "#000009",
          "900": "#000000"
        }
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
