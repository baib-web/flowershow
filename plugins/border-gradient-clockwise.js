const plugin = require('tailwindcss/plugin');

module.exports = {
  // 你的其他配置
  plugins: [
    plugin(function({ addUtilities, e, theme, variants }) {
      const newUtilities = {
        '.border-gradient-clockwise': {
          'border-image': 'conic-gradient(from 0deg, #3b82f6, #3b82f6 25%, #60a5fa 50%, #3b82f6 75%, #3b82f6) 1',
          'border-width': '2px',
          'border-style': 'solid',
          'border-radius': '10px',
          'animation': 'spin 3s linear infinite',
        },
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
