document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.technique-btn');
    const designOverlay = document.getElementById('designOverlay');
    const productImage = document.getElementById('productImage');

    // Define la ruta base para todas las imágenes
    const imageBase = 'img/';

    // Define la imagen base (aunque ya está en el HTML, es buena práctica tener la referencia)
    const productBase = 'base_playera.png';
    productImage.src = imageBase + productBase;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const technique = button.getAttribute('data-technique');

            // 1. Elimina la clase 'active' de todos los botones y añade a este
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Determina la imagen de superposición basada en la técnica
            let newImageSrc = '';

            // Usa la lógica para cargar la imagen correcta
            if (technique === 'dtf') {
                newImageSrc = imageBase + 'logo_dtf.png';
            } else if (technique === 'laser') {
                newImageSrc = imageBase + 'logo_laser.png';
            } else if (technique === 'bordado') {
                newImageSrc = imageBase + 'logo_bordado.png';
            } else {
                // Si no hay técnica válida, no hagas nada
                return;
            }

            // 3. Aplica la nueva imagen
            // Para una mejor UX, considera añadir una pequeña pausa
            designOverlay.style.opacity = '0'; // Oculta brevemente
            setTimeout(() => {
                designOverlay.src = newImageSrc;
                designOverlay.style.opacity = '1'; // Muestra de nuevo
            }, 50); // Pequeño retraso para que la transición sea más visible (50ms)
        });
    });
});