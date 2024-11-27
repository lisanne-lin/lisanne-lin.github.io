import colors from 'tailwindcss/colors';

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {
        primary: colors.cyan,
        neutral: colors.zinc,
      },
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
        '50%': { transform: 'translateY(-10px) rotate(3deg)' }
      },
      wave: {
        '0%, 100%': { transform: 'translateY(0) rotate(0)' },
        '50%': { transform: 'translateY(-10px) rotate(3deg)' }
      }
    }
  },
  plugins: [],
};
