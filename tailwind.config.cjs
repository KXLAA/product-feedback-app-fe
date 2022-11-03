/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  fontFamily: {
    sans: ["jost", ...defaultTheme.fontFamily.sans],
    serif: [...defaultTheme.fontFamily.serif],
    mono: [...defaultTheme.fontFamily.mono],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
