gsap.fromTo(
    "#home .main-visual .visual-title .text01",
    { opacity: 0, x: -300 },
    { opacity: 1, x: 0, duration: 1.3 }
)
gsap.fromTo(
    "#home .main-visual .visual-title .text02",
    { opacity: 0, x: 300 },
    { opacity: 1, x: 0, duration: 1.3, delay: 1 }
)