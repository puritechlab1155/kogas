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
});