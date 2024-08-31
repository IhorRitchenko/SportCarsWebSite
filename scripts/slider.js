let rightButton = document.getElementById('moveRight');
let leftButton = document.getElementById('moveLeft');
let isAnimating = false;
const mediaQuery = window.matchMedia('(max-width: 950px)');

function slideToRight() {
    if (isAnimating) return;
    isAnimating = true;

    let margin = getCurrentMedia();
    let slider = document.querySelector('.slider');
    let currentMargin = parseInt(window.getComputedStyle(slider).marginLeft);
    
    if (currentMargin > -margin) {
        slider.style.marginLeft = (currentMargin - margin) + 'px';
    }

    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

rightButton.addEventListener('click', slideToRight);

function slideToLeft() {
    if (isAnimating) return;
    isAnimating = true;

    let margin = getCurrentMedia();
    let slider = document.querySelector('.slider');
    let currentMargin = parseInt(window.getComputedStyle(slider).marginLeft);
    
    if (currentMargin <= 160) {
        slider.style.marginLeft = (currentMargin + margin) + 'px';
    }

    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

leftButton.addEventListener('click', slideToLeft);

function getCurrentMedia() {
    return mediaQuery.matches ? 320 : 530;
}

mediaQuery.addEventListener('change', () => {
    getCurrentMedia();
});
