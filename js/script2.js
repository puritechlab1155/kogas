document.addEventListener('DOMContentLoaded', function() {

    var header = document.querySelector('#header');
    if (header) {

        var gnbItemAll = header.querySelectorAll('.gnb-item');
        var lnbWrap = header.querySelector('.lnb-wrap');

        gnbItemAll.forEach((item) => {
            item.addEventListener('mouseenter', function() {
                lnbWrap.classList.add('active');
            });
            item.addEventListener('mouseleave', function() {
                lnbWrap.classList.remove('active');
            });
        });


        var offcanvasOpen = header.querySelector('.offcanvas-open');
        var offcanvas = header.querySelector('.offcanvas');
        var offcanvasBackdrop = header.querySelector('.offcanvas-backdrop');

        offcanvasOpen.addEventListener('click', function() {
            offcanvasOpen.classList.toggle('active');
            if (offcanvasOpen.classList.contains('active')) {
                offcanvas.classList.add('show');
                offcanvasBackdrop.classList.add('show');
            } else {
                offcanvas.classList.remove('show');
                offcanvasBackdrop.classList.remove('show');
            }
        });
    }

    var home = document.querySelector('#home');
    if (home) {
        /* section02 */
        var s2tabs = home.querySelectorAll('.section02 .conts-wrap .tabs .tab');
        var s2tabConts = home.querySelectorAll('.section02 .conts-wrap .tab-conts .cont');

        s2tabs.forEach((tab, idx) => {
            tab.addEventListener('click', function() {
                s2tabs.forEach(t => t.classList.remove('on'));
                tab.classList.add('on');

                s2tabConts.forEach(cont => cont.classList.remove('on'));
                s2tabConts[idx].classList.add('on');
            });
        });
    }
});