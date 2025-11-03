// ====================================================================
// 1. FUNCIONALIDAD DE SLIDER RANDOM
// ====================================================================

const slider = () => {
    // Usamos 'const' ya que 'random' no se reasigna, solo se declara aquí.
    const random = Math.floor(Math.random() * imagenesSlider.length);
    document.querySelector("#slider").innerHTML = `
        <img src="img/${imagenesSlider[random]}" alt="Banner aleatorio de la colección">`; // Añadimos 'alt' por accesibilidad.
};

slider();


// ====================================================================
// 2. SECCIÓN DESTACADOS RANDOM Y LÓGICA DE EVENTOS (Refactorizada)
// ====================================================================

const seccionProductos = document.querySelector("#productos");

const mostrarProductosRandom = () => {
    let productosMostrar = ""; // Declaramos con 'let' en lugar de usar una variable global implícita.

    const productosDestacados = productos.filter(e => e.destacados);
    const copiaDestacados = productosDestacados.slice();
    let contador = 0;

    while (copiaDestacados.length > 0 && contador < 8) {
        const posRandom = Math.floor(Math.random() * copiaDestacados.length);
        const productoSacado = copiaDestacados.splice(posRandom, 1)[0];

        productosMostrar += `
            <div class="col-12 col-sm-6 col-lg-3 mb-4">
                <div class="producto">
                    <img src="${productoSacado.img[1]}" alt="Foto de ${productoSacado.nombre}">
                    <div class="info-producto">
                        <h6>Destacados</h6>
                        <h6>${productoSacado.nombre}</h6>
                        <p>$${productoSacado.precio}</p>
                        <button class="boton guardar-producto" data-id="${productoSacado.id}">Ver más</button>
                    </div>
                </div>
            </div>
        `;

        contador++;
    }

    seccionProductos.innerHTML = productosMostrar;
};

// Llamamos a la función de renderizado.
mostrarProductosRandom();


// ====================================================================
// 3. COLECCIÓN ESTACIONAL (Detección y Duplicación para Slider)
// ====================================================================

const getEstacion = () => {
    const fechaActual = new Date();
    // getMonth() devuelve 0 (Enero) a 11 (Diciembre)
    const numeroMes = fechaActual.getMonth();

    // Nota: Usamos el formato "Primavera Verano" para coincidir con tu datos.js
    if (numeroMes >= 8 || numeroMes <= 1) { // 8=Sept a 11=Dic, 0=Ene, 1=Feb
        return "Primavera Verano";
    } else {
        return "Otoño Invierno";
    }
}

// Obtenemos la estación y la guardamos en una constante local.
const estacionActual = getEstacion();

// Texto en slider (se ejecuta después de obtener la estación)
document.querySelector(".textoEstacion").textContent = "Colección " + estacionActual;


// Filtro el array productos según coleccion y duplica el HTML para la animación infinita
const mostrarxTemporada = () => {
    // let contenidoHTML = ""; // Ya no es necesario si usamos map/join
    
    // ¡CORRECCIÓN CLAVE! Usamos '===' para comparar, no '=' para asignar.
    const coleccionEstacion = productos.filter(e => e.coleccion === estacionActual); 
    
    // 1. Generación del HTML de la colección (Bloque Original)
    const contenidoOriginal = coleccionEstacion.map(element => {
        return ` 
            <div class="articulo">
                <img src="${element.img[0]}" alt="Artículo de la colección ${element.coleccion}" />
                <div class="info">
                    <h5>${element.coleccion}</h5>
                    <div class="titulo">${element.nombre}</div>
                    <div class="precio">$${element.precio}</div>
                    <button class="boton guardar-producto" data-id="${element.id}">Ver más</button>
                </div>
            </div> 
        `;
    }).join(''); // Convertimos el array de strings en un solo string

    // 2. DUPLICAMOS EL CONTENIDO (Clave para el efecto de scroll infinito y rápido)
    const contenidoHTML = contenidoOriginal + contenidoOriginal;

    // Muestro artículos
    document.querySelector(".galeria-slider").innerHTML = contenidoHTML;
}

mostrarxTemporada();


// ====================================================================
// 4. LÓGICA DE BOTONES CENTRALIZADA (DRY)
// ====================================================================

// Creamos una función que maneja el click de forma genérica.
const manejarClickProducto = (evento) => {
    // Usamos dataset.id para obtener el valor del atributo data-id, más limpio que currentTarget.id
    const idProducto = parseInt(evento.currentTarget.dataset.id); 
    
    // Buscamos el producto
    const productoGuardar = productos.find(e => e.id === idProducto);

    // Verificación de seguridad (buena práctica)
    if (productoGuardar) {
        window.location.href = `ampliacion.html?id=${encodeURIComponent(idProducto)}`;
    } else {
        console.error("Error: Producto no encontrado con ID:", idProducto);
    }
};

// Seleccionamos *todos* los botones relevantes (destacados y temporada)
// Les dimos la clase común 'guardar-producto' en el HTML generado.
// setTimeout asegura que el DOM se haya renderizado antes de buscar los botones.
setTimeout(() => {
    const todosLosBotones = document.querySelectorAll(".guardar-producto");
    
    todosLosBotones.forEach((unBoton) => {
        unBoton.addEventListener("click", manejarClickProducto);
    });
}, 0); // La ejecución diferida asegura que los botones dinámicos existan.