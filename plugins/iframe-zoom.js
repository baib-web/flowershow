module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.no-pointer-events': {
      'pointer-events': 'none',
    },
    '.pointer-events-auto': {
      'pointer-events': 'auto',
    },
  });
});
