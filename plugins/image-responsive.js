module.exports = function ({ addUtilities }) {
  addUtilities({
    '.image-responsive': {
      'object-fit': 'contain',
      'max-width': '100%',
    },
  })
}
