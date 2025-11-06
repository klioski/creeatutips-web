document.addEventListener('DOMContentLoaded', function() {
    // Referencia al formulario en el HTML
    const form = document.getElementById('contact-form');
    const articuloSelect = document.getElementById('articulo');
    const opcionesPlayera = document.getElementById('opciones-playera');
    const opcionesSudadera = document.getElementById('opciones-sudadera');
    const opcionesTermos = document.getElementById('opciones-termos');
    const opcionesTela = document.getElementById('opciones-tela');
    const color = document.getElementById('idcolor');

    // REEMPLAZA estos placeholders con tus IDs reales de EmailJS
    const SERVICE_ID = "service_du3r5mm";
    const TEMPLATE_ID = "template_cil9z3k";
    // NOTA: La Public Key ya se inicializó en el HTML.


    // Función para mostrar u ocultar opciones adicionales
    function toggleArticulosAdicionales() {
        const valorSeleccionado = articuloSelect.value;

        // Ocultar todos los grupos primero
        opcionesPlayera.classList.add('hidden-group');
        opcionesSudadera.classList.add('hidden-group');
        opcionesTermos.classList.add('hidden-group');
        opcionesTela.classList.add('hidden-group');
        color.classList.add('hidden-group');


        // Mostrar el grupo correspondiente
        if (valorSeleccionado === 'playera') {
            opcionesPlayera.classList.remove('hidden-group');
            opcionesTela.classList.remove('hidden-group');
            color.classList.remove('hidden-group');

        } else if (valorSeleccionado === 'sudadera') {
            opcionesSudadera.classList.remove('hidden-group');
            color.classList.remove('hidden-group');

        } else if (valorSeleccionado === 'termos') {
            opcionesTermos.classList.remove('hidden-group');
        }

        // Nota: Si se selecciona un artículo, se puede hacer que los campos específicos sean 'required' aquí
    }

    // Inicializar el estado al cargar la página (por si el navegador recuerda la selección)
    toggleArticulosAdicionales();

    // Escuchar el evento 'change' en el selector de Artículos
    articuloSelect.addEventListener('change', toggleArticulosAdicionales);



    // Lógica de Envío de Formulario (EmailJS)
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Detiene el envío normal del formulario

            // 1. Muestra un mensaje de carga
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            // 2. Envía el formulario usando emailjs
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
                .then(function() {
                    // Éxito:
                    console.log('¡Mensaje enviado con éxito!');
                    // Reemplazar alert() con un mensaje en la interfaz
                    alert('¡Cotización enviada con éxito! Te contactaremos pronto.');
                    form.reset(); // Limpia el formulario
                    // Volver a ocultar opciones dinámicas después de resetear
                    toggleArticulosAdicionales();
                    submitButton.textContent = 'Enviar Solicitud de Cotización';
                    submitButton.disabled = false;
                }, function(error) {
                    // Error:
                    console.error('Error al enviar el mensaje:', error);
                    // Reemplazar alert() con un mensaje en la interfaz
                    alert('Error al enviar la cotización. Por favor, intenta de nuevo o escríbenos directamente.');
                    submitButton.textContent = 'Enviar Solicitud de Cotización';
                    submitButton.disabled = false;
                });
        });
    }
});