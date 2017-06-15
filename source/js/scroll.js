var lastScrollTop = document.body.scrollTop;

window.onscroll = function() {
    var header = document.getElementsByClassName('site-header');
    if (document.body.scrollTop !== 0) {
        header[0].className = 'site-header site-header-with-shadow';
        if (document.body.scrollTop > lastScrollTop) {
            header[0].className = 'site-header site-header-hidden';
        }
        lastScrollTop = document.body.scrollTop;
    } else {
        header[0].className = 'site-header'
    }   
}