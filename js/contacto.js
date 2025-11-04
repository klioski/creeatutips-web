document.addEventListener('DOMContentLoaded', function() {
    // Referencia al formulario en el HTML
    const form = document.getElementById('contact-form');

    // REEMPLAZA estos placeholders con tus IDs reales de EmailJS
    const SERVICE_ID = "service_yqr16l6";
    const TEMPLATE_ID = "template_cil9z3k";
    // NOTA: La Public Key ya se inicializó en el HTML.

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Detiene el envío normal del formulario

            // 1. Muestra un mensaje de carga (Opcional, pero buena práctica)
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // 2. Envía el formulario usando emailjs
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
                .then(function() {
                    // Éxito:
                    console.log('¡Mensaje enviado con éxito!');
                    alert('¡Cotización enviada con éxito! Te contactaremos pronto.');
                    form.reset(); // Limpia el formulario
                    submitButton.textContent = 'Enviar Solicitud de Cotización';
                    submitButton.disabled = false;
                }, function(error) {
                    // Error:
                    console.error('Error al enviar el mensaje:', error);
                    alert('Error al enviar la cotización. Por favor, intenta de nuevo o escríbenos directamente.');
                    submitButton.textContent = 'Enviar Solicitud de Cotización';
                    submitButton.disabled = false;
                });
        });
    }
});