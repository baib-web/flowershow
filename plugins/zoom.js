const iframe = document.getElementById('my-iframe');
iframe.addEventListener('wheel', (event) => {
  event.preventDefault();
  // 在这里添加自定义的缩放逻辑，比如根据鼠标滚轮的方向进行缩放
  // 可以使用 Tailwind CSS 的类名来控制缩放
  if (event.deltaY > 0) {
    iframe.classList.add('scale-125');
    iframe.classList.remove('scale-100');
  } else {
    iframe.classList.add('scale-100');
    iframe.classList.remove('scale-125');
  }
});
