// Clock and Date Functionality
function updateClock() {
    const now = new Date();

    // Formato de hora 12 horas con AM/PM
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 debe ser 12
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes} ${ampm}`;

    // Formato de fecha con año (DD Mon YYYY)
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Combinar en una sola línea
    const clockInfo = `${timeString} | ${dateString}`;

    // Actualizar elemento del navbar
    document.getElementById('navbar-clock-info').textContent = clockInfo;
}

// Actualizar reloj cada segundo
setInterval(updateClock, 1000);

// Llamar una vez al cargar para no esperar 1 segundo
updateClock();
