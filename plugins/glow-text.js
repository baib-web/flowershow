module.exports = function ({ addUtilities }) {
  addUtilities({
    '.glow': {
      'color': '#FFFFFF', // 设置文字颜色为纯白色
      'text-shadow': '0 0 10px var(--glow-color), 0 0 20px var(--glow-color)',
      'filter': 'blur(0.5px)',
      '--glow-color': 'rgba(255, 255, 255, 0.6)',
      '--glow-blur': '0.5px'
    }
  })
}
