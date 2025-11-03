// FUNCIONES ESPECIFICAS DE AMPLIACION 

//devuelve la parte de la URL que incluye los parametros id

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let idProducto = parseInt(id) //lo pase a numero porque estaba en string

//ahora recorro productos y comparo ids con find()

let idAmpliado = productos.find(elemento => elemento.id === idProducto)

//funcion para mostrar productos ampliados

const mostrarProdAmpliado = () => {
    let divAmpliado = document.querySelector("#productoAmpliado")
    divAmpliado.innerHTML = `<div class="columna-imagen">
    <div class="galeria-miniaturas">
      <img src="${idAmpliado.img[0]}" />
      <img src="${idAmpliado.img[1]}" />
      <img src="${idAmpliado.img[2]}" />
    </div>
      <img src="${idAmpliado.img[0]}" class="imagen-grande" />
    </div>
    <div class="columna-detalles detalles-producto">
      <h2>${idAmpliado.nombre}</h2>
      <p class="precio">$${idAmpliado.precio}</p>
      <select id="selectTalles"></select>
      <p class="info-secundaria">Color: ${idAmpliado.color}</p>
      <hr>
      <p class="descripcion">${idAmpliado.descripcion}</p>
      <button id="${idAmpliado.id}" class="botonAñadir">Añadir al carrito</button>
    </div>
  </div>`
}

mostrarProdAmpliado()

//select de talles dinamico, luego de que ya existe el producto ampliado

let crearSelect = () => {
    let select = "";
    selectTalles = document.querySelector("#selectTalles");

    //si el producto no tiene talle queda en display none
    if (idAmpliado.talle.length === 0) {
        selectTalles.style.display = "none";
    }
    else {
        selectTalles.style.display = "block";
        idAmpliado.talle.forEach(element => {
            select += `<option value="${element}">${element}</option>`
        });
    }

    selectTalles.innerHTML = select
}

crearSelect()

//hacer cliqueables las img miniatura, recorrer nodelist y luego ampliar la cliqueada en .imagen-grande

const ampliarImagen = () => {
    let miniaturas = document.querySelectorAll(".galeria-miniaturas img");
    miniaturas.forEach((element) => {
        element.addEventListener("click", (evento) => {
            let src = evento.target.getAttribute("src");
            console.log(src);

            let imagenGrande = document.querySelector(".imagen-grande")
            imagenGrande.setAttribute("src", src);
        })
    });
}

ampliarImagen()

// =================================================================
// SECCIÓN DE PRODUCTOS SIMILARES Y ASIGNACIÓN DE EVENTOS
// =================================================================

// Función para asignar eventos a los botones del slider
const asignarEventosBotonesGenero = () => {
    let botonesGenero = document.querySelectorAll(".guardarGen");

    botonesGenero.forEach((unBoton) => {
        unBoton.addEventListener("click", (evento) => {
            let idElementoQueQuieroGuardar = parseInt(evento.currentTarget.id);
            // La doble conversión a parseInt no es necesaria, ya que se hizo arriba, 
            // pero el código funciona, se mantiene la limpieza solo para productoGuardar.
            let productoGuardar = productos.find(e => e.id === idElementoQueQuieroGuardar);

            window.location.href = `ampliacion.html?id=${encodeURIComponent(productoGuardar.id)}`;
        })
    })
}


// Función para mostrar productos similares (con multiplicación condicional)
const mostrarxGenero = () => {
    let contenido = "";
    
    // Filtra productos por el mismo género, EXCLUYENDO el producto que ya se está mostrando
    let coleccionGenero = productos.filter(e => e.genero === idAmpliado.genero && e.id !== idAmpliado.id);

    // --- Generación del HTML Original ---
    let htmlOriginal = "";
    coleccionGenero.forEach(element => {
        htmlOriginal += ` <div class="articulo">
            <img src="${element.img[1]}" alt="Artículo" />
            <div class="info">
            <h5>También te puede interesar...</h5>
            <div class="titulo">${element.nombre}</div>
            <div class="precio">$${element.precio}</div>
            <button class="boton guardarGen" id="${element.id}">Ver más</button>
            </div>
        </div> `;
    });

    // --- Lógica de Multiplicación Condicional ---
    
    if (htmlOriginal.length > 0) {
        let multiplicador = 2; 

        if (idAmpliado.genero === "masculino") {
            multiplicador = 4;
        }

        // Construir el contenido final concatenando el HTML original 'multiplicador' veces
        for (let i = 0; i < multiplicador; i++) {
            contenido += htmlOriginal;
        }
        
    } else {
        contenido = `<p style="padding: 1rem; text-align: center;">No se encontraron otros productos de este género.</p>`;
    }
    
    // Inyecta el HTML multiplicado
    document.querySelector(".galeria-slider").innerHTML = contenido;

    // Llama a la función de asignación de eventos DESPUÉS de inyectar el nuevo HTML.
    asignarEventosBotonesGenero();
}

// Llamada a la función que inicia el proceso
mostrarxGenero();

