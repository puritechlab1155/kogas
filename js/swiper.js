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

const homes1playButton = document.querySelector('#home .s1-swiper .play-button');
const homes1pauseButton = document.querySelector('#home .s1-swiper .pause-button');

homes1playButton.addEventListener('click', () => {
    homeS1swiper.autoplay.start();
});
homes1pauseButton.addEventListener('click', () => {
    homeS1swiper.autoplay.stop();
});