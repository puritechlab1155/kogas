var homeS1swiper = new Swiper(".s1-swiper", {
    navigation: {
        nextEl: ".s1-swiper-button-next",
        prevEl: ".s1-swiper-button-prev",
    },
    pagination: {
        el: ".s1-swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: true,
});

const homes1playButton = document.querySelector('#home .s1-swiper .play-button-pc');
const homes1pauseButton = document.querySelector('#home .s1-swiper .pause-button-pc');

homes1playButton.addEventListener('click', () => {
    homeS1swiper.autoplay.start();
});
homes1pauseButton.addEventListener('click', () => {
    homeS1swiper.autoplay.stop();
});


var homeS1swiperMo = new Swiper(".s1-slide-mo", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".s1-mo-swiper-pagination",
        clickable: true,
    },
});

const homeS1playButtonMo = document.querySelector('#home .s1-slide-mo .play-button-mo');
const homeS1pauseButtonMo = document.querySelector('#home .s1-slide-mo .pause-button-mo');

homeS1playButtonMo.addEventListener('click', () => {
    homeS1swiperMo.autoplay.start();
});
homeS1pauseButtonMo.addEventListener('click', () => {
    homeS1swiperMo.autoplay.stop();
});

// s3-swiper
var s3swiper01 = new Swiper(".s3-swiper01", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: ".s3-swiper-pagination01",
        clickable: true,
    },
});

var s3swiper02 = new Swiper(".s3-swiper02", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: ".s3-swiper-pagination02",
        clickable: true,
    },
});

var s3swiper03 = new Swiper(".s3-swiper03", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: ".s3-swiper-pagination03",
        clickable: true,
    },
});

var s3swiper04 = new Swiper(".s3-swiper04", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: ".s3-swiper-pagination04",
        clickable: true,
    },
});