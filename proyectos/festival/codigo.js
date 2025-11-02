
    const boton = document.querySelector("#btn-leer-mas");
    const parrafo = document.querySelector("#informacion"); 
    
    boton.addEventListener("click", (event) => {
        
        event.preventDefault(); 
        
        parrafo.style.display = "block";
        
        boton.style.display = "none";
    });
