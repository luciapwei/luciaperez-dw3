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

