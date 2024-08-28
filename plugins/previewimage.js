module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.image-container': {
          'width': '300px', // 容器宽度
          'height': '200px', // 容器高度
          'overflow': 'hidden',
          'position': 'relative',
        },
        '.image-container img': {
          'height': '100%', // 图片高度固定
          'width': 'auto', // 图片宽度自适应
          'transition': 'transform 0.3s ease',
        },
        '.image-container:hover img': {
          'transform': 'scale(1.1)', // 鼠标悬停时放大图片
        },
      });
    },
  ],
};
