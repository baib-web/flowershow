module.exports = function ({ addUtilities }) {
  addUtilities({
    '.expandable-button': {
      'display': 'block',
      'width': '300px', // 按钮宽度
      'padding': '10px',
      'background-color': 'transparent', // 按钮背景颜色，完全透明
      'color': 'white', // 按钮文字颜色
      'text-align': 'center',
      'border-radius': '5px', // 按钮圆角
      'cursor': 'pointer',
      'font-size': '16px',
      'transition': 'background-color 0.3s',
    },
    '.expandable-button:hover': {
      'background-color': 'rgba(0, 86, 179, 0.5)', // 悬停时按钮背景颜色，带透明度
    },
    'summary::marker': {
      'display': 'none', // 隐藏默认的箭头
    },
  });
};
