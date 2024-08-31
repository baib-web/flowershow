module.exports = plugin(function({ addUtilities }) {
    // 添加自定义的Tailwind CSS类
    addUtilities({
        '.disable-scroll': {
            overflow: 'hidden',
        },
        '.enable-scroll': {
            overflow: 'auto',
        },
    });

    // 添加JavaScript代码
    if (typeof window !== 'undefined') {
        window.addEventListener('message', function(event) {
            if (event.data === 'disableScroll') {
                document.body.classList.add('disable-scroll');
            } else if (event.data === 'enableScroll') {
                document.body.classList.remove('disable-scroll');
            }
        });

        // 嵌入式网页
        window.parent.postMessage('disableScroll', '*');
    }
});
