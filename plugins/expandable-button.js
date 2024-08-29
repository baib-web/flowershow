module.exports = function ({ addUtilities }) {
  addUtilities({
    '.expandable-button': {
      'display': 'flex', // 使用Flexbox布局
      'align-items': 'center', // 垂直居中
      'justify-content': 'center', // 水平居中
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
    '.expandable-button h3': {
      'margin': '0', // 移除默认的外边距
      'padding': '0', // 移除默认的内边距
      'width': '100%', // 占满父元素宽度
      'text-align': 'center', // 居中对齐
    },
  });
};
