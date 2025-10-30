//funcion de slider randomico

const slider = () => {

    let random = Math.floor(Math.random() * imagenesSlider.length)
    document.querySelector("#slider").innerHTML = `
    <img src="img/${imagenesSlider[random]}">`
}

slider()


////////////////////////////////////////////////////////////////////////////////////
//SECCION destacados randomicos

let seccionProductos = document.querySelector("#productos")

const mostrarProductosRandom = () => {
    productosMostrar = "";

    let productosDestacados = productos.filter(e => e.destacados);
    let copiaDestacados = productosDestacados.slice();
    let contador = 0;

    while (copiaDestacados.length > 0 && contador < 6) {
        let posRandom = Math.floor(Math.random() * copiaDestacados.length);
        let productoSacado = copiaDestacados.splice(posRandom, 1)[0];

        productosMostrar += `<div class="producto">
             <img src="${productoSacado.img[1]}" alt="foto producto">
             <div class="info-producto">
              <h4>Destacados del mes</h4>
             <h3>${productoSacado.nombre}</h3>
              <p>$${productoSacado.precio}</p>
             <button class="boton guardar" id="${productoSacado.id}">Ver más</button>
             </div>
             </div>`;

        contador++;
    }

    seccionProductos.innerHTML = productosMostrar

}

mostrarProductosRandom();

//botones cliqueables para ampliar
let botonesSugerencias = document.querySelectorAll(".guardar");

botonesSugerencias.forEach((unBoton) => {
    unBoton.addEventListener("click", (evento) => {
        let idElementoQueQuieroGuardar = parseInt(evento.currentTarget.id);
        idElementoQueQuieroGuardar = parseInt(idElementoQueQuieroGuardar);
        let productoGuardar = productos.find(e => { return e.id === idElementoQueQuieroGuardar });

        window.location.href = `ampliacion.html?id=${encodeURIComponent(productoGuardar.id)}`;
    })

})

///////////////////////////////////////////////////////////////////////////////////////
//coleccion estacional segun mes 

let estacion = "";

const fecha = () => {
    let fechaActual = new Date();
    let numeroMes = fechaActual.getMonth();

    if (numeroMes === 8 || numeroMes === 9 || numeroMes === 10 || numeroMes === 11 || numeroMes === 0 || numeroMes === 1) {
        estacion = "Primavera-Verano";
    }
    else {
        estacion = "Otoño-Invierno"
    }
}

fecha()

document.querySelector(".textoEstacion").textContent = "Colección " + estacion; //texto en slider

//filtro el array productos segun coleccion, luego recorro el nuevo array coleccionEstacion y armo los articulos
const mostrarxTemporada = () => {
    let contenido = "";
    let coleccionEstacion = productos.filter(e => e.coleccion=estacion);
    coleccionEstacion.forEach(element => {
        contenido += ` <div class="articulo">
        <img src="${element.img[0]}" alt="Artículo 3" />
        <div class="info">
        <h5>${element.coleccion}</h5>
          <div class="titulo">${element.nombre}</div>
          <div class="precio">$${element.precio}</div>
          <button class="boton guardarTemp" id="${element.id}">Ver más</button>
        </div>
      </div> `

    });

    //muestro articulos 
    document.querySelector(".galeria-slider").innerHTML = contenido;
}

mostrarxTemporada()

//botones cliqueables para ampliar

let botonesTemporada = document.querySelectorAll(".guardarTemp");

botonesTemporada.forEach((unBoton) => {
    unBoton.addEventListener("click", (evento) => {
        let idElementoQueQuieroGuardar = parseInt(evento.currentTarget.id);
        idElementoQueQuieroGuardar = parseInt(idElementoQueQuieroGuardar);
        let productoGuardar = productos.find(e => { return e.id === idElementoQueQuieroGuardar });

        window.location.href = `ampliacion.html?id=${encodeURIComponent(productoGuardar.id)}`;
    })

})