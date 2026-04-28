document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Toggle Dark/Light Mode
    const modeBtn = document.querySelector('.alternarModo');
    modeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')) {
            document.body.style.backgroundColor = "#f5f5f5";
            document.body.style.color = "#1a1a1a";
        } else {
            document.body.style.backgroundColor = "#0a0a0a";
            document.body.style.color = "#f5f5f5";
        }
    });

    // Basic message for Buy buttons
    const buyButtons = document.querySelectorAll('.events__table button');
    buyButtons.forEach(btn => btn.addEventListener('click', () => alert('Redirecting to ticket office...')));
});