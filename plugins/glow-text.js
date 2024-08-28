 /*发光*/
module.exports = function ({ addUtilities }) {
  addUtilities({
    '.glow': {
      'text-shadow': '0 0 5px var(--glow-color), 0 0 10px var(--glow-color)',
      'filter': 'blur(var(--glow-blur))',
      '--glow-color': 'rgba(255, 255, 255, 0.3)',
      '--glow-blur': '1px'
    }
  })
}
