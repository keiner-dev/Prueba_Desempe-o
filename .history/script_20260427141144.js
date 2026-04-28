document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // 2. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('main-nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });

    // 3. Dark/Light Mode Toggle
    const modeBtn = document.querySelector('.alternarModo');
    modeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });

    // 4. Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 5. Buy buttons interaction
    const buyButtons = document.querySelectorAll('.events__table button');
    buyButtons.forEach(btn => btn.addEventListener('click', () => alert('Redirecting to ticket office...')));
});