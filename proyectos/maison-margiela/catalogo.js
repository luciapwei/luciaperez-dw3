////ampliar categoria desde menu hamburguesa

let parametrosEnviados = new URLSearchParams(window.location.search);
let idEnviado = parametrosEnviados.get("id")
let catalogoAmpliar = productos.filter((elemento) => elemento.categoria == idEnviado)

//funcion para mostrar productos
const mostrarArray = (array, colocar) => {
    let productosMostrar = "";
    array.forEach(element => {
        productosMostrar += `<div class="col-12 col-sm-6 col-lg-3 mb-4">
        <div class="producto">
             <img src="${element.img[0]}" alt="foto producto">
             <div class="info-producto">
              <h4>Destacados del mes</h4>
             <h3>${element.nombre}</h3>
              <p>$${element.precio}</p>
             <button class="boton" id="${element.id}">Ver más</button>
             </div>
             </div> 
             </div>`;


        colocar.innerHTML = productosMostrar
    }
    )
}

//armar breadcrumb prolijo con href inicio + idEnviado (que es la categoria seleccionada)

const armarBreadcrumb = () => {
    let idEnviadoconEspacio = " " + idEnviado
    document.querySelector(".breadcrumb").innerHTML = `<a href="index.html">Inicio / </a>` + idEnviadoconEspacio
}

armarBreadcrumb()

//apuntador del section donde se mostraran los productos de la categoria seleccionada
let seccionProductos = document.querySelector("#productos")

mostrarArray(catalogoAmpliar, seccionProductos)


////////////////////////////////////////////////////////////////////////////////////
//select

let selectProductos = document.querySelector("#selectProductos");

const filtroSelect = () => {
    productosMostrar = "";
    let filtroSeleccionado = selectProductos.value;

    if (filtroSeleccionado === "Destacados") {

        let productosDestacados = catalogoAmpliar.filter(e => e.destacados);
        let copiaDestacados = productosDestacados.slice();
        let contador = 0;

        while (copiaDestacados.length > 0 && contador < 9) {
            let nroRandom = Math.floor(Math.random() * copiaDestacados.length);
            let productoSacado = copiaDestacados.splice(nroRandom, 1)[0];

            productosMostrar += `<div class="producto">
             <img src="${productoSacado.img[0]}" alt="foto producto">
             <div class="info-producto">
             <h3>${productoSacado.nombre}</h3>
              <p>$${productoSacado.precio}</p>
             <button class="boton"id="${productoSacado.id}">Ver más</button>
             </div>
             </div>`;

            contador++;
        }
    }

    else if (filtroSeleccionado === "Todos") {
        let copiaProductos = catalogoAmpliar.slice();
        let productosAleatorios = [];
        let contador = 0;
        while (copiaProductos.length > 0 && contador < 9) {
            let nroRandom = Math.floor(Math.random() * copiaProductos.length);
            let productoSacado = copiaProductos.splice(nroRandom, 1)[0];
            productosAleatorios.push(productoSacado);
            contador++;
        }
        productosAleatorios.forEach((e) => {
            productosMostrar += `<div class="producto">
             <img src="${productoSacado.img[0]}" alt="foto producto">
             <div class="info-producto">
             <h3>${productoSacado.nombre}</h3>
              <p>$${productoSacado.precio}</p>
             <button class="boton"id="${productoSacado.id}">Ver más</button>
             </div>
             </div>`
        });
    }

    else if (filtroSeleccionado === "PrecioMenor") {
        let copiaProductos = catalogoAmpliar.slice();
        let productosOrdenadosPrecio = [];
        while (copiaProductos.length > 0) {
            let menorPrecio = copiaProductos[0];
            let nroMenor = 0;

            for (let i = 1; i < copiaProductos.length; i++) {
                if (copiaProductos[i].precio < menorPrecio.precio) {
                    menorPrecio = copiaProductos[i];
                    nroMenor = i;
                }
            }

            let productoSacado = copiaProductos.splice(nroMenor, 1)[0];
            productosOrdenadosPrecio.push(productoSacado);
        }
        for (let i = 0; i < 9 && i < productosOrdenadosPrecio.length; i++) {
            let e = productosOrdenadosPrecio[i];
            productosMostrar += `<div class="producto">
            <img src="${e.img[0]}" alt="foto producto">
            <div class="info-producto">
            <h3>${e.nombre}</h3>
            <p>$${e.precio}</p>
            <button class="boton" id="${e.id}">Ver más</button>
            </div>
            </div>`;
        }
    }

    else if (filtroSeleccionado === "PrecioMayor") {
        let copiaProductos = catalogoAmpliar.slice();
        let productosOrdenadosPrecioMayor = [];

        while (copiaProductos.length > 0) {
            let mayorPrecio = copiaProductos[0];
            let nroMayor = 0;

            for (let i = 1; i < copiaProductos.length; i++) {
                if (copiaProductos[i].precio > mayorPrecio.precio) {
                    mayorPrecio = copiaProductos[i];
                    nroMayor = i;
                }
            }

            let productoSacado = copiaProductos.splice(nroMayor, 1)[0];
            productosOrdenadosPrecioMayor.push(productoSacado);
        }
        for (let i = 0; i < 9 && i < productosOrdenadosPrecioMayor.length; i++) {
            let e = productosOrdenadosPrecioMayor[i];
            productosMostrar += `<div class="producto">
            <img src="${e.img[0]}" alt="foto producto">
            <div class="info-producto">
            <h3>${e.nombre}</h3>
            <p>$${e.precio}</p>
            <button class="boton" id="${e.id}">Ver más</button>
            </div>
            </div>`;
        }

    }

    seccionProductos.innerHTML = productosMostrar

}

selectProductos.addEventListener("change", filtroSelect);

//hacer cliqueables a los botones de los productos para ampliar en ampliacion.html

const asignarEventosBotones = () => {
    let botones = document.querySelectorAll(".boton");
    botones.forEach((boton) => {
        boton.addEventListener("click", (evento) => {
            let id = parseInt(evento.currentTarget.id);
            let producto = productos.find(p => p.id === id);
            window.location.href = `ampliacion.html?id=${encodeURIComponent(producto.id)}`;
        });
    });
};

asignarEventosBotones();
