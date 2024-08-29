module.exports = function ({ addUtilities }) {
  addUtilities({
    '.expandable-button': {
      'display': 'block',
      'width': '100%', // 按钮宽度
      'padding': '10px',
      'background-color': 'transparent', // 按钮背景颜色，完全透明
      'color': 'white', // 按钮文字颜色
      'text-align': 'center',
      'border-radius': '0px', // 按钮圆角
      'cursor': 'pointer',
      'font-size': '16px',
      'transition': 'background-color 0.3s',
      'line-height': '1', // 设置行高为1
      'height': 'auto', // 自动调整高度
    },
    '.expandable-button:hover': {
    },
    'summary::marker': {
      'display': 'none', // 隐藏默认的箭头
    },
  });
};
