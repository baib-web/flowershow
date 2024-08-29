module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.no-hover-parent': {
          pointerEvents: 'none',
        },
        '.no-hover-iframe': {
          pointerEvents: 'auto',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
