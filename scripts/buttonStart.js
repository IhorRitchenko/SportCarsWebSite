let button = document.querySelector('.start')

function btnAnimation() {
    if(button.classList.contains('start')) {
        button.classList.remove('start');
        button.classList.add('start-animate')
    } else {
        button.classList.remove('start-animate');
        button.classList.add('start')
    }
  
}

setInterval(btnAnimation, 700)

function scrollToSecondSection() {
    const section = document.getElementById('About');
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 200;
    
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
}

button.addEventListener('click', scrollToSecondSection);