// Función para mostrar/ocultar el botón "Volver al Inicio"
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const aboutSection = document.getElementById('about-section');

    // Comprobamos si la sección de trabajos existe
    if (aboutSection && backToTopButton) {
        
        // Función que verifica la posición de scroll
        function toggleBackToTopButton() {
            // .offsetTop nos da la posición (distancia desde el inicio de la página)
            const aboutSectionTop = aboutSection.offsetTop; 
            
            // window.scrollY es la posición actual del scroll.
            // Si la posición actual es mayor que la posición de la sección works...
            if (window.scrollY > aboutSectionTop) {
                backToTopButton.style.display = 'block'; // Mostrar botón
            } else {
                backToTopButton.style.display = 'none'; // Ocultar botón
            }
        }

        // Asignar el listener al evento de scroll
        window.addEventListener('scroll', toggleBackToTopButton);
    }
});

//modal de success

document.addEventListener('DOMContentLoaded', function() {
    // 1. Intentar encontrar la Modal
    var exitoModalElement = document.getElementById('exitoModal');

    // 2. Comprobar si la Modal existe en la página actual
    if (exitoModalElement) {
        // Solo si estamos en la página donde existe la modal (confirmacion.html)
        var miModal = new bootstrap.Modal(exitoModalElement);
        miModal.show();

        // Opcional: Redirige automáticamente de vuelta al inicio
        setTimeout(function() {
            window.location.href = '/'; 
        }, 4000); 
    }
});