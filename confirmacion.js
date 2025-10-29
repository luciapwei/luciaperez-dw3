//confirmacion de formulario

document.addEventListener('DOMContentLoaded', (event) => {
    
    const path = window.location.pathname;

    if (path.includes('confirmacion') || path.includes('gracias')) {
        
        const modalElemento = document.getElementById('suscripcionModal');

        if (modalElemento) {
            const miModal = new bootstrap.Modal(modalElemento);
            miModal.show();
        }
    }
});

//cruz para volver a index

document.querySelector("#cruz").addEventListener("click", ()=>{
    window.location.href = "index.html";
})

//nombre personal

const urlParams = new URLSearchParams(window.location.search);

const nombreUsuario = urlParams.get('nombre');

const espacioNombreModal = document.getElementById('nombreUsuario');

if (nombreUsuario) {
    espacioNombreModal.textContent = nombreUsuario; 
} else {
    espacioNombreModal.textContent = 'estimadx'; 
}
