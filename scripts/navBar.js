const navItems = document.querySelectorAll('.nav-animation');
const mediaQueryScroll = window.matchMedia('(max-width: 950px)');


navItems[0].classList.add('active');
let isScrolling = false;



function toHome() {
        isScrolling = true;
        navItems[0].classList.add('active');
        navItems[1].classList.remove('active');
        navItems[2].classList.remove('active');
        navItems[3].classList.remove('active'); 

        const section = document.getElementById('Home');
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
         
        setTimeout(() => {
            isScrolling = false;
        }, 3000);

        if (mediaQueryScroll.matches) {
            hidden.style.width = '10px';
            hidden.style.opacity = '0';
            setTimeout(() => {
            navBar.style.display = 'none';
            hidden.style.display = 'none';
            closeBtn.style.display = 'none';
      }, 600);
    }
}

function toAbout() {
    isScrolling = true;
    navItems[0].classList.remove('active');
    navItems[1].classList.add('active');
    navItems[2].classList.remove('active');
    navItems[3].classList.remove('active');
    const section = document.getElementById('About');
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 210;
    
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
     
        setTimeout(() => {
            isScrolling = false;
        }, 3000);

        if (mediaQueryScroll.matches) {
            hidden.style.width = '10px';
            hidden.style.opacity = '0';
            setTimeout(() => {
            navBar.style.display = 'none';
            hidden.style.display = 'none';
            closeBtn.style.display = 'none';
      }, 600);
    }
}

function toPopular() {
    isScrolling = true;
    navItems[0].classList.remove('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.add('active');
    navItems[3].classList.remove('active');
    const section = document.getElementById('Popular');
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 140;
    
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });

        setTimeout(() => {
            isScrolling = false;
        }, 3000);

        if (mediaQueryScroll.matches) {
            hidden.style.width = '10px';
            hidden.style.opacity = '0';
            setTimeout(() => {
            navBar.style.display = 'none';
            hidden.style.display = 'none';
            closeBtn.style.display = 'none';
      }, 600);
    }
}

function toFeatured() {
    isScrolling = true;
    navItems[0].classList.remove('active');
    navItems[1].classList.remove('active');
    navItems[2].classList.remove('active');
    navItems[3].classList.add('active');
    const section = document.getElementById('Featured');
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 120;
    
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });

        setTimeout(() => {
            isScrolling = false;
        }, 3000);

        if (mediaQueryScroll.matches) {
            hidden.style.width = '10px';
            hidden.style.opacity = '0';
            setTimeout(() => {
            navBar.style.display = 'none';
            hidden.style.display = 'none';
            closeBtn.style.display = 'none';
      }, 600);
    }
}

function checkNavigation() {
    if (isScrolling) return;
    const offsetY = window.pageYOffset;

    if (offsetY < 950) {
        navItems[0].classList.add('active');
        navItems[1].classList.remove('active');
        navItems[2].classList.remove('active');
        navItems[3].classList.remove('active');
    } else if (offsetY < 1500) {
        navItems[0].classList.remove('active');
        navItems[1].classList.add('active');
        navItems[2].classList.remove('active');
        navItems[3].classList.remove('active');
    } else if (offsetY < 2700) {
        navItems[0].classList.remove('active');
        navItems[1].classList.remove('active');
        navItems[2].classList.add('active');
        navItems[3].classList.remove('active');
    } else {
        navItems[0].classList.remove('active');
        navItems[1].classList.remove('active');
        navItems[2].classList.remove('active');
        navItems[3].classList.add('active');
    }
}

window.addEventListener('scroll', checkNavigation);

const toTop = document.querySelector('.to-top');

function moveToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
        navItems[0].classList.add('active');
        navItems[1].classList.remove('active');
        navItems[2].classList.remove('active');
        navItems[3].classList.remove('active');
}

toTop.addEventListener('click', moveToTop);

function border() {
    const offsetY = window.pageYOffset;
    const header = document.querySelector('header');
    if (offsetY > 5) {
        toTop.classList.add('active');
        header.classList.add('activeHeader')
    } else {
        toTop.classList.remove('active');
        header.classList.remove('activeHeader')
    }
}

setInterval (border, 100)

// mobile navbar

const menu = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav-bar');
const hidden = document.querySelector('.hidden-nav');
const closeBtn = document.querySelector('#close-nav');

function showNav() {
    navBar.style.display = 'block';
    hidden.style.display = 'flex';
    closeBtn.style.display = 'block';
    setTimeout(() => {
        hidden.style.width = '100%';
        hidden.style.opacity = '1';
      }, 100);
}

menu.addEventListener('click', showNav);

function closeNavBar() {
    hidden.style.width = '10px';
    hidden.style.opacity = '0';
    setTimeout(() => {
        navBar.style.display = 'none';
        hidden.style.display = 'none';
        closeBtn.style.display = 'none';
      }, 600);
}

closeBtn.addEventListener('click', closeNavBar)

