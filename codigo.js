// función para mostrar/ocultar el botón "volver al inicio"
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    const aboutSection = document.getElementById('about-section');

    // Comprobamos si la sección de trabajos existe
    if (aboutSection && backToTopButton) {
        
        function toggleBackToTopButton() {

            const aboutSectionTop = aboutSection.offsetTop; 
        
            if (window.scrollY > aboutSectionTop) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none'; 
            }
        }

        window.addEventListener('scroll', toggleBackToTopButton);
    }
});


//variable nombre

const formulario = document.getElementById('miFormulario');
const campoNombre = document.getElementById('campoNombre'); 

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const nombreIngresado = campoNombre.value;
    const nombreCodificado = encodeURIComponent(nombreIngresado);
    window.location.href = `confirmacion.html?nombre=${nombreCodificado}`;

});


