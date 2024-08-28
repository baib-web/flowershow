// scripts/toggle.js
document.querySelector('.toggle-button').addEventListener('click', function() {
  const content = document.querySelector('.content');
  content.classList.toggle('hidden');
  this.textContent = content.classList.contains('hidden') ? '展开' : '收起';
});
