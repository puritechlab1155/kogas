document.addEventListener('DOMContentLoaded', function() {
    
    var header = document.querySelector('#header');
    if (header) {
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
        // section02
        var s2tabs = home.querySelectorAll('.section02 .tabs .tab');
        var s2tabContsItem = home.querySelectorAll('.section02 .tab-conts li');

        s2tabs.forEach((tab, idx) => {
            tab.addEventListener('click', function() {
                s2tabs.forEach(t => t.classList.remove('on'));
                tab.classList.add('on');

                s2tabContsItem.forEach(item => item.classList.remove('on'));
                s2tabContsItem[idx].classList.add('on');
            });
        });

        // section03
        var s3tabs = home.querySelectorAll('.section03 .tabs .tab');
        var s3tabSlides = home.querySelectorAll('.section03 .tab-slide-container .tab-slide');

        // 중복 생성 방지를 위해 슬라이드 복제 여부를 확인하는 변수
        var isSlideCloned = Array.from({ length: s3tabSlides.length }, () => false);

        s3tabs.forEach((tab, idx) => {
            tab.addEventListener('click', function () {
                // 탭 활성화
                s3tabs.forEach(t => t.classList.remove('on'));
                tab.classList.add('on');

                // 슬라이드 활성화
                s3tabSlides.forEach(slide => slide.classList.remove('active'));
                s3tabSlides[idx].classList.add('active');

                // 슬라이드 복제 (한 번만 실행)
                if (!isSlideCloned[idx]) {
                    const s3slideList = s3tabSlides[idx].querySelector('.slide-list');
                    const s3slideListClone = s3slideList.cloneNode(true);

                    const slideWrap = s3tabSlides[idx].querySelector('.slide-wrap');
                    slideWrap.appendChild(s3slideListClone);
                    slideWrap.querySelector('.slide-list').offsetWidth + 'px'; // 강제 리플로우

                    s3slideList.classList.add('original');
                    s3slideListClone.classList.add('clone');

                    isSlideCloned[idx] = true; // 슬라이드 복제 상태 저장
                }
            });
        });
    }
});