module.exports = function ({ addUtilities }) {
  addUtilities({
    '.zoom-in': {
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    '.zoom-out': {
      transform: 'scale(0.9)',
      transition: 'transform 0.2s ease-in-out',
    },
  });
};
