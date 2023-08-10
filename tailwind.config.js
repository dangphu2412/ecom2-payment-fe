// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    variables: {
      'header-height': '12rem',
      'footer-height': '6rem'
    },
    colors: {
      success: '#1bc5bd',
      successLight: '#1bc5bd8a',
      primary: '#3699ff',
      primaryLight: '#3699ff8a',
      info: '#8950fc',
      disable: colors.gray['500'],
      white: '#ffffff',
      black: '#000000'
    }
  },
  plugins: []
};
