const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/@portaljs/core/dist/*.js",
    "./node_modules/@portaljs/core/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'light-blue': '#add8e6',
        'blue': '#0000ff',
      },
      animation: {
        'gradient-border': 'gradient-border 3s linear infinite',
      },
      keyframes: {
        'gradient-border': {
          '0%, 100%': { borderColor: '#add8e6' },
          '50%': { borderColor: '#0000ff' },
        },
      },
      //固定高度和自适应宽度
      height: {
        '350px': '350px',
      },
      width: {
        'auto': 'auto',
      },
      //动态渐变文字背景
      animation: {
        'move-bg': 'move-bg 5s infinite',
      },
      keyframes: {
        'move-bg': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      // support wider width for large screens >1440px eg. in hero
      maxWidth: {
        "8xl": "88rem",
      },
      fontFamily: {
        sans: ["ui-sans-serif", ...defaultTheme.fontFamily.sans],
        serif: ["ui-serif", ...defaultTheme.fontFamily.serif],
        mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
        headings: ["-apple-system", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          DEFAULT: colors.white,
          dark: colors.slate[900],
        },
        primary: {
          DEFAULT: colors.gray[700],
          dark: colors.gray[300],
        },
        secondary: {
          DEFAULT: colors.sky[400],
          dark: colors.sky[400],
        },
      },
    },
  },
  /* eslint global-require: off */
  plugins: [
    require("@tailwindcss/typography"),
    require('./plugins/image-responsive'),
    require('./plugins/expandable-button'),    
  ],
};
