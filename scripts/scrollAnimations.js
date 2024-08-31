const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

const mediaQueryScroll = window.matchMedia('(max-width: 950px)');

sr.reveal('.main-header');
    sr.reveal('.main-name', {delay: 500});
    sr.reveal('.main-type', {delay: 600});
    sr.reveal('.main-car', {delay: 700});
    sr.reveal('.main-stats', {delay: 800, origin: 'bottom',});
    sr.reveal('.start', {delay: 100, duration: 1500});
    sr.reveal('.popular-header');
    sr.reveal('.slider-box', {delay: 500});
    sr.reveal('.features-header');
    sr.reveal('.info');
    sr.reveal('.reveal-bottom', {origin: 'bottom'});
    sr.reveal('.reveal-top');
    sr.reveal('.choose-mark', {delay: 500});
    sr.reveal('.grid-section', {delay: 600});
    sr.reveal('.logos');
    sr.reveal('.footer-item', {interval: 100});
    sr.reveal('.rights', {origin: 'bottom'});

if (!mediaQueryScroll.matches) {
    sr.reveal('.image-salon', {origin: 'left'});
    sr.reveal('.text-container', {origin: 'right'});
    sr.reveal('.offer', {origin: 'left'});
    sr.reveal('.reveal-right', {origin: 'right', distance: '20px'});
} else {
    sr.reveal('.image-salon', {origin: 'left', distance: '10px'});
    sr.reveal('.text-container', {origin: 'right', distance: '10px'});
    sr.reveal('.offer', {origin: 'left', distance: '10px'});
    sr.reveal('.reveal-right', {origin: 'right', distance: '10px'});
}

