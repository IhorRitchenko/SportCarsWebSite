const all = document.getElementById('all');
const McLaren = document.getElementById('McLarenB');
const Porche = document.getElementById('PorscheB');
const Ferrari = document.getElementById('FerrariB');
const gridElements = document.querySelectorAll('.slider-item');
const grid = document.querySelector('.grid');
let isActive = false;
const mediaQueryScrolling = window.matchMedia('(max-width: 600px)');
const mediaQueryScrollingII = window.matchMedia('(max-width: 1150px)');


function showAll() {
    if (isActive) return;
    if (!marks[0].classList.contains('active')) {
        for (let i = 5; i <= 13; i++) {
            gridElements[i].classList.add('hidden');
            setTimeout(() => {
                gridElements[i].classList.remove('hidden');
            }, 600)
        }
        setTimeout(() => {
            for (let j = 5; j <= 13; j++) {
                gridElements[j].style.display = 'block';
            }
            if (mediaQueryScrolling.matches) {
                grid.style.gridTemplateRows = 10 + '%' + 10 + '%' + 10 + '%' + 10 + '%' + 10 + '%' + 10 + '%' + 10 + '%' + 10 + '%' + 10 + '%';
            } else if(mediaQueryScrollingII.matches) {
                grid.style.gridTemplateRows = 18 + '% ' + 18 + '% ' + 18 + '% ' + 18 + '% ' + 18 + '% ';

            } else {
                grid.style.gridTemplateRows = 33 + '% ' + 33 + '% ' + 33 + '% ';
            }
        }, 400); 
    }    
}

function showMcLaren() {
    if (isActive) return;
    if (!marks[1].classList.contains('active')) {
    for (let i = 5; i <= 13; i++) {
        gridElements[i].classList.add('hidden');
        if (i < 10) {
            setTimeout(() => {
                gridElements[i].classList.remove('hidden');
            }, 600)  
        }
    }
    setTimeout(() => {
        for (let j = 5; j <= 13; j++) {
            if (j < 10) {
                gridElements[j].style.display = 'block';
            } else {
                gridElements[j].style.display = 'none';
            }
        }
        if (mediaQueryScrolling.matches) {
            grid.style.gridTemplateRows = 18 + '%' + 18 + '%' + 18 + '%' + 18 + '%' + 18 + '%';
        } else if(mediaQueryScrollingII.matches) {
            grid.style.gridTemplateRows = 30 + '% ' + 30 + '% ' + 30 + '% ';
        } else {
            grid.style.gridTemplateRows = 50 + '% ' + 50 + '% ';
        }
    }, 400);
}
}

function showPorche() {
    if (isActive) return;
    if (!marks[2].classList.contains('active')) {
    for (let i = 5; i <= 13; i++) {
        gridElements[i].classList.add('hidden');
        if (i >= 10 && i <= 11) {
            setTimeout(() => {
                gridElements[i].classList.remove('hidden');
            }, 600)  
        }
    } 
    setTimeout(() => {
        for (let j = 5; j <= 13; j++) {
            if (j < 10 || j > 11) {
                gridElements[j].style.display = 'none';
            } else {
                gridElements[j].style.display = 'block';
            }
        }
        if (!mediaQueryScrolling.matches) {
        grid.style.gridTemplateRows = 100 + '% ';
        } else {
            grid.style.gridTemplateRows = 45 + '%' + 45 + '%';
        }
    }, 400);
}
}


function showFerrari() {
    if (isActive) return;
    if (!marks[3].classList.contains('active')) {
    for (let i = 5; i <= 13; i++) {
        gridElements[i].classList.add('hidden');
        if (i > 11) {
            setTimeout(() => {
                gridElements[i].classList.remove('hidden');
            }, 600)
        }

        setTimeout(() => {
            for (let j = 5; j <= 13; j++) {
                if (j > 11) {
                    gridElements[j].style.display = 'block';
                } else {
                    gridElements[j].style.display = 'none';
                }
            }
            if (!mediaQueryScrolling.matches) {
                grid.style.gridTemplateRows = 100 + '% ';
                } else {
                    grid.style.gridTemplateRows = 45 + '%' + 45 + '%';
                }
        }, 400);
    }
}   
}



all.addEventListener('click', showAll)

McLaren.addEventListener('click', showMcLaren)

Porche.addEventListener('click', showPorche)

Ferrari.addEventListener('click', showFerrari)

let marks = document.querySelectorAll('.mark');
let McLarenImg = document.getElementById('McLarenL');
let PorscheImg = document.getElementById('PorscheL');
let FerrariImg = document.getElementById('FerrariL');

marks[0].classList.add('active');

function changeAll () {
    if (isActive) return;
    isActive = true;
    marks[0].classList.add('active');
    marks[1].classList.remove('active');
    marks[2].classList.remove('active');
    marks[3].classList.remove('active');
    McLarenImg.style.opacity = 0.4;
    PorscheImg.style.opacity = 0.4;
    FerrariImg.style.opacity = 0.4;
    setTimeout(() => {
        isActive = false;
    }, 600)
}

function changeMcLaren() {
    if (isActive) return;
    isActive = true;
    marks[0].classList.remove('active');
    marks[1].classList.add('active');
    marks[2].classList.remove('active');
    marks[3].classList.remove('active');
    McLarenImg.style.opacity = 1;
    PorscheImg.style.opacity = 0.4;
    FerrariImg.style.opacity = 0.4;
    setTimeout(() => {
        isActive = false;
    }, 600)
}

function changePorsche() {
    if (isActive) return;
    isActive = true;
    marks[0].classList.remove('active');
    marks[1].classList.remove('active');
    marks[2].classList.add('active');
    marks[3].classList.remove('active');
    McLarenImg.style.opacity = 0.4;
    PorscheImg.style.opacity = 1;
    FerrariImg.style.opacity = 0.4;
    setTimeout(() => {
        isActive = false;
    }, 600)
}

function changeFerrari() {
    if (isActive) return;
    isActive = true;
    marks[0].classList.remove('active');
    marks[1].classList.remove('active');
    marks[2].classList.remove('active');
    marks[3].classList.add('active');
    McLarenImg.style.opacity = 0.4;
    PorscheImg.style.opacity = 0.4;
    FerrariImg.style.opacity = 1;
    setTimeout(() => {
        isActive = false;
    }, 600)
}

marks[0].addEventListener('click', changeAll);
marks[1].addEventListener('click', changeMcLaren);
marks[2].addEventListener('click', changePorsche);
marks[3].addEventListener('click', changeFerrari);
