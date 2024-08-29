function plugin(addUtilities) {
  addUtilities({
    '.prevent-parent-hover': {
      'iframe': {
        'pointer-events': 'none',
      },
    },
  })
}

module.exports = plugin
