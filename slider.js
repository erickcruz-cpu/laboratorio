// Slider Functionality
let counter = 1;
const totalSlides = 2;
let interval = setInterval(autoSlide, 5000);

function autoSlide() {
    counter++;
    if (counter > totalSlides) counter = 1;
    document.getElementById('radio' + counter).checked = true;
}

// Botones de flechas
document.getElementById('next-btn').addEventListener('click', () => {
    clearInterval(interval);
    autoSlide();
    interval = setInterval(autoSlide, 5000);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    clearInterval(interval);
    counter--;
    if (counter < 1) counter = totalSlides;
    document.getElementById('radio' + counter).checked = true;
    interval = setInterval(autoSlide, 5000);
});

// Reiniciar intervalo si se usan los puntos manuales
document.querySelectorAll('.manual-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        clearInterval(interval);
        counter = index + 1;
        interval = setInterval(autoSlide, 5000);
    });
});
