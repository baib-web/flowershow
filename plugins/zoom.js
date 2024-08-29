const iframe = document.getElementById('my-iframe');
iframe.addEventListener('wheel', (event) => {
  event.preventDefault();
  if (event.deltaY > 0) {
    iframe.classList.add('scale-125');
    iframe.classList.remove('scale-100');
  } else {
    iframe.classList.add('scale-100');
    iframe.classList.remove('scale-125');
  }
});
