document.addEventListener('DOMContentLoaded', () => {
    // --- Menú Hamburguesa ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('nav-open');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Cerrar menú al hacer click en un enlace
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav-open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- Visualizador de Técnicas (solo si existe en la página) ---
    const buttons = document.querySelectorAll('.technique-btn');
    const designOverlay = document.getElementById('designOverlay');
    const productImage = document.getElementById('productImage');
    const imageBase = 'img/';

    if (productImage && designOverlay) {
        productImage.src = imageBase + 'base_playera.png';
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!designOverlay) return;
            const technique = button.getAttribute('data-technique');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            let newImageSrc = '';
            if (technique === 'dtf') {
                newImageSrc = imageBase + 'logo_dtf.png';
            } else if (technique === 'laser') {
                newImageSrc = imageBase + 'logo_laser.png';
            } else if (technique === 'bordado') {
                newImageSrc = imageBase + 'logo_bordado.png';
            } else {
                return;
            }

            designOverlay.style.opacity = '0';
            setTimeout(() => {
                designOverlay.src = newImageSrc;
                designOverlay.style.opacity = '1';
            }, 50);
        });
    });
});