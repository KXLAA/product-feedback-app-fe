/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  fontFamily: {
    sans: ["jost", ...defaultTheme.fontFamily.sans],
    serif: [...defaultTheme.fontFamily.serif],
    mono: [...defaultTheme.fontFamily.mono],
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      sm: ["13px", "19px"],
      base: ["15px", "22px"],
      lg: ["16px", "23px"],
      xl: ["18px", "26px"],
      "2xl": ["20px", "29px"],
      "3xl": ["24px", "35px"],
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      DEFAULT: "10px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      pink: "#AD1FEA",
      orange: "#F49F85",
      blue: {
        50: "#F7F8FD",
        100: "#F2F4FE",
        200: "#647196",
        300: "#373F68",
        400: "#3A4374",
        500: "#4661E6",
        600: "#62BCFA",
        DEFAULT: "#647196",
      },
      red: {
        ...colors.rose,
        DEFAULT: "#D73737",
      },
      gray: colors.neutral,
      green: colors.green,
      yellow: colors.amber,
    },
    extend: {},
  },
  plugins: [],
};
