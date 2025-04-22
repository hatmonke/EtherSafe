const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './dapps/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      textShadow: {
        textBorder: '4px 4px 4px var(--tw-shadow-color)',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 12px 24px var(--tw-shadow-color)',
        '2xl': '0 16px 32px var(--tw-shadow-color)',
        '3xl': '0 24px 48px var(--tw-shadow-color)',
        'xs-neon': '0 0 5px var(--tw-shadow-color), 0 0 10px var(--tw-shadow-color), 0 0 16px var(--tw-shadow-color)',
        'sm-neon': '0 0 1px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color), 0 0 45px var(--tw-shadow-color), 0 0 50px var(--tw-shadow-color), 0 0 75px var(--tw-shadow-color)',
        neon: '0 0 2px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px var(--tw-shadow-color), 0 0 80px var(--tw-shadow-color), 0 0 90px var(--tw-shadow-color), 0 0 100px var(--tw-shadow-color), 0 0 150px var(--tw-shadow-color)',
      },
      colors: {
        primary: "#D4747F",
        contrast: "#fff",
        secondary: "#AE7ED2",
        sub: "#44aCb9",
        neutral: "#000",
        basebg: "#040D1A",
        text: "#fff"
      },
      fontFamily: {
        gruppo: ['var(--font-gruppo)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
        '5xl': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.017em' }],
        '6xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        'endless': 'endless 20s linear infinite',
        'gradient-x':'gradient-x 5s ease infinite',
        'gradient-y':'gradient-y 5s ease infinite',
        'gradient-xy':'gradient-xy 5s ease infinite',
      },
      keyframes: {
        'endless': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-245px)' }
        },
        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
      },
      'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      'gradient-xy': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
      }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
