 /* 隐藏滑条 */
module.exports = function ({ addUtilities }) {
  addUtilities({
    '.hide-scrollbar': {
      /* Chrome, Edge, Safari */
      '-webkit-overflow-hidden': 'hidden',
      /* Firefox */
      '-moz-overflow-hidden': 'hidden',
      /* IE, Edge */
      'overflow': 'hidden',
    },
    '.show-scrollbar:hover': {
      /* Chrome, Edge, Safari */
      '-webkit-overflow-hidden': 'scroll',
      /* Firefox */
      '-moz-overflow-hidden': 'scroll',
      /* IE, Edge */
      'overflow': 'scroll',
    },
  })
}
