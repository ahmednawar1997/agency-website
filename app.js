const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        toggleNavbar();

    });
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (screen.width < 1024) {
                toggleNavbar();
            }
        })
    })


}
const toggleNavbar = () => {
    const burger = document.querySelector('.burger');
    const body = document.querySelector('body');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    nav.classList.toggle('nav-active');
    body.classList.toggle('nav-active-body');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    burger.classList.toggle('toggle');
}
navSlide();