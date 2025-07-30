const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('open');
});
