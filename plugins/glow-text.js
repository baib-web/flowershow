module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '@keyframes glowPulse': {
          '0%, 100%': {
            'text-shadow': '0 0 5px var(--glow-color), 0 0 10px var(--glow-color)',
            'filter': 'blur(0.3px)',
          },
          '50%': {
            'text-shadow': '0 0 15px var(--glow-color), 0 0 30px var(--glow-color)',
            'filter': 'blur(0.6px)',
          },
        },
        '.glow': {
          'color': '#FFFFFF', // 设置文字颜色为纯白色
          '--glow-color': 'rgba(255, 255, 255, 0.6)',
          '--glow-blur': '0.3px',
          'animation': 'glowPulse 2s infinite',
        },
      });
    },
  ],
};
