module.exports = plugin(function({ addUtilities }) {
    // 父网页
    window.addEventListener('message', function(event) {
        if (event.data === 'disableScroll') {
            document.body.style.overflow = 'hidden';
        } else if (event.data === 'enableScroll') {
            document.body.style.overflow = 'auto';
        }
    });

    // 嵌入式网页
    window.parent.postMessage('disableScroll', '*');
});
