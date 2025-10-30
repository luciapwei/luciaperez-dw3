//VENTANA MODAL para inicio de sesion desde boton user

//apuntadores
botonUser = document.querySelector("#botonUser");
ventanaModal = document.querySelector("#ventanaModal");
botonCruz = document.querySelector("#botonCruz");
divRegistrarse = document.querySelector("#registrarse");//div que se abre al cliquear boton crear cuenta
botonIniciar = document.querySelector(".botonIniciar");
botonCrear = document.querySelector(".botonCrear");
inputEmail = document.querySelector("#email");
inputContraseña = document.querySelector("#contraseña");
inputContraseña2 = document.querySelector("#contraseña2");
inputNombre = document.querySelector("#nombre");
inputApellido = document.querySelector("#apellido");
inputCelular = document.querySelector("#celular");
mensajeEmail = document.querySelector("#mensajeEmail");
mensajeContraseña = document.querySelector("#mensajeContraseña");
mensajeContraseña2 = document.querySelector("#mensajeContraseña2");
mensajeNombre = document.querySelector("#mensajeNombre");
mensajeApellido = document.querySelector("#mensajeApellido");
mensajeCelular = document.querySelector("#mensajeCelular");


//abrir ventanaModal con boton user
botonUser.addEventListener("click", () => {
    ventanaModal.style.display = "flex";
    botonIniciar.disabled = false;
    divRegistrarse.style.display = "none";
    botonCrear.style.display = "block";
})
//cerrar ventanaModal con boton cruz
botonCruz.addEventListener("click", () => {
    ventanaModal.style.display = "none";
    botonIniciar.disabled = false;
    divRegistrarse.style.display = "none";
    botonCrear.style.display = "block";
})

//boton crear cuenta despliega div registrarse

botonCrear.addEventListener("click", () => {
    divRegistrarse.style.display = "block"
    botonCrear.style.display = "none"
    botonIniciar.disabled = true
})

//validacion de inputs para iniciar sesion

const validarMail = () => {
    let mailIngresado = inputEmail.value;
    if (mailIngresado.length == 0) {
        mensajeEmail.textContent = "El campo de email no puede estar vacío."
    }
    else if (mailIngresado.indexOf("@") == -1) {
        mensajeEmail.textContent = "El email debe contener @"
    }
    else if (mailIngresado.indexOf("@") == 0) {
        mensajeEmail.textContent = "El email debe contener texto antes del @"
    }

    else if (mailIngresado.indexOf("@") == mailIngresado.length - 1) {
        mensajeEmail.textContent = "El email debe contener texto despues del @"
    }
    else if (mailIngresado.indexOf(".", mailIngresado.indexOf("@")) == -1) {
        mensajeEmail.textContent = "El email debe contener un punto despues del @"
    }
    else if (mailIngresado.indexOf(".", mailIngresado.indexOf("@")) == mailIngresado.length - 1) {
        mensajeEmail.textContent = "El email debe contener texto despues del punto."
    }
    else {
        mensajeEmail.textContent = "";
    }
}

inputEmail.addEventListener("focusout", validarMail)

let contraIngresada = "";

const validarContraseña = () => {
    let contraIngresada = inputContraseña.value;
    if (contraIngresada.length == 0) {
        mensajeContraseña.textContent = "El campo de contraseña no puede estar vacío."
    }
    else if (contraIngresada.length < 12) {
        mensajeContraseña.textContent = "La contraseña debe tener mínimo 12 caracteres."
    }
    else {
        mensajeContraseña.textContent = "";
    }
}

inputContraseña.addEventListener("focusout", validarContraseña)

const validarContraseña2 = () => {
    let repetirContra = inputContraseña2.value;
    let contraIngresada = inputContraseña.value;
    if (repetirContra.length == 0) {
        mensajeContraseña2.textContent = "El campo de contraseña no puede estar vacío."
    }
    else if (repetirContra != contraIngresada) {
        mensajeContraseña2.textContent = "La contraseña debe ser igual en ambos campos."
    }
    else {
        mensajeContraseña2.textContent = "";
    }
}

inputContraseña2.addEventListener("focusout", validarContraseña2)

const validarNombre = () => {
    let nombreUsuario = inputNombre.value;
    if (nombreUsuario.length == 0) {
        mensajeNombre.textContent = "El campo de nombre no puede estar vacío."
    }
    else {
        mensajeNombre.textContent = "";
    }
}

inputNombre.addEventListener("focusout", validarNombre)

const validarApellido = () => {
    let apellidoUsuario = inputApellido.value;
    if (apellidoUsuario.length == 0) {
        mensajeApellido.textContent = "El campo de apellido no puede estar vacío."
    }
    else {
        mensajeApellido.textContent = "";
    }
}

inputApellido.addEventListener("focusout", validarApellido)

const validarCelular = () => {
    let celularUsuario = inputCelular.value;
    if (celularUsuario.length == 0) {
        mensajeCelular.textContent = "El campo de celular no puede estar vacío."
    }
    else if (isNaN(celularUsuario)) {
        mensajeCelular.textContent = "El campo de celular debe ser numérico."
    }
    else {
        mensajeCelular.textContent = "";
    }
}

inputCelular.addEventListener("focusout", validarCelular)

const validarFormularioCompleto = () => {
    if (divRegistrarse.style.display === "block") {
        if (inputNombre.value !== "" && mensajeNombre.textContent === "" &&
            inputCelular.value !== "" && mensajeCelular.textContent === "" &&
            inputEmail.value !== "" && mensajeEmail.textContent === "" &&
            inputApellido.value !== "" && mensajeApellido.textContent === "" &&
            inputContraseña2.value !== "" && mensajeContraseña2.textContent === "" &&
            inputContraseña.value !== "" && mensajeContraseña2.textContent === "") {
            botonIniciar.disabled = false;
        }
        else {
            botonIniciar.disabled = true;
        }
    }
}

document.addEventListener("focusout", validarFormularioCompleto)

botonIniciar.addEventListener("click", () => {
    ventanaModal.style.display = "none"
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FILTRAR POR TEXTO en lupa

//apuntadores
let botonLupa = document.querySelector("#botonLupa");
let inputBuscador = document.querySelector("#inputBuscador");

//funcion para que al cliquear la lupa se despliegue el input text con border bottom con una transicion

botonLupa.addEventListener("click", () => {
    if (inputBuscador.style.display === "none") {
        inputBuscador.style.display = "block";


        // despues de 10 ms aplicamos los estilos finales con la transicion del css
        setTimeout(() => {
            inputBuscador.style.width = "180px";
            inputBuscador.style.opacity = "1";
            inputBuscador.style.padding = "5px 10px";
            inputBuscador.style.borderBottom = "1px solid white";
        }, 10);

        // enfocamos el input
        inputBuscador.focus();

    } else {
        // si el input ya esta visible, al cliquear la lupa vuelve a ocultarse
        inputBuscador.style.width = '0px';
        inputBuscador.style.opacity = '0';
        inputBuscador.style.padding = '0';
        inputBuscador.style.borderBottom = '1px solid transparent';

        // despues de que la animacion de cierre haya terminado
        setTimeout(() => {
            inputBuscador.style.display = 'none';
        }, 300); // coincide con la duracion de la transicion en CSS

        inputBuscador.value = '';
        inputBuscador.blur();
    }
});


//ahora hay que hacer una funcion mediante keyup para que se filtre la informacion del input.value con el elemento .nombres del array productos

//apuntador del div sugerencias que se va a desplegar con los productos filtrados
let sugerencias = document.querySelector("#sugerencias");


inputBuscador.addEventListener("keyup", () => {

    let contenidohtml = "";
    sugerencias.innerHTML = "";
    let textoBuscador = inputBuscador.value.toLowerCase();

    //armo un array nombresProducto con los productos filtrados que comienzan con lo mismo que se escriba en el input buscador

    let nombresProducto = productos.filter(element => element.nombre.toLowerCase().startsWith(textoBuscador))

    //condicional para que si el input esta vacio no se abra el div de sugerencias   
    if (textoBuscador === "") {
        sugerencias.style.display = "none";
        sugerencias.style.opacity = "0";
        sugerencias.innerHTML = "";
        return;
    }

    //condicional para que si el array nombresProducto tiene elementos, q se acumulen en la variable contenidohtml
    if (nombresProducto.length > 0) {
        nombresProducto.forEach(elemento => {
            contenidohtml += `<button class="guardar" id="${elemento.id}">${elemento.nombre}</button>`
        })

        //el id me sirve para luego ampliar

        if (contenidohtml != "") {
            sugerencias.style.display = "block";
            sugerencias.innerHTML += contenidohtml;
            // animar la opacidad con un delay
            setTimeout(() => {
                sugerencias.style.opacity = "1";
            }, 10);
        }
    }


    //hacer cliqueables los productos en sugerencias y guardar id para ampliacion

    let botonesSugerencias = document.querySelectorAll(".guardar");

    botonesSugerencias.forEach((unBoton) => {
        unBoton.addEventListener("click", (evento) => {
            let idElementoQueQuieroGuardar = parseInt(evento.currentTarget.id);
            idElementoQueQuieroGuardar = parseInt(idElementoQueQuieroGuardar);
            let productoGuardar = productos.find(e => { return e.id === idElementoQueQuieroGuardar });

            window.location.href = `ampliacion.html?id=${encodeURIComponent(productoGuardar.id)}`;
        })

    })

})


//nav lateral desplegable desde BOTON HAMBURGUESA:

//apuntadores
botonHamburguesa = document.querySelector("#botonHamburguesa");
navLateral = document.querySelector("#navLateral");
iconos = document.querySelector(".iconos");
textoBanner = document.querySelector(".textoBanner")

//desplegamos con click el nav lateral
botonHamburguesa.addEventListener("click", () => {
    if (navLateral.style.display === "none") {
        navLateral.style.display = "block"
        navLateral.classList.toggle("activo");

    }
    else {
        navLateral.style.display = "none"
    }
})

//ahora cuando cliqueo cualquier elemento fuera y esta el nav lateral acrivo se remueve para que se oculte de nuevo

document.addEventListener("click", (e) => {
    if (
        !navLateral.contains(e.target) &&
        !botonHamburguesa.contains(e.target)
    ) {
        navLateral.classList.remove("activo");
    }
});


//nav lateral desde boton hamburguesa DINAMICO, asi recordamos la categoria guardada en el id para cuando vayamos a catalogo.html


const armarNav = () => {
    let listaNav = "";
    let productosCategorias = [];

    productos.forEach(element => {
        if (!productosCategorias.includes(element.categoria)) {
            productosCategorias.push(element.categoria)
        }
    });

    productosCategorias.forEach(element => {
        listaNav += `<ul class="listaNav">
                            <li><button class="botonCategorias" id="${element}">${element}</button></li>
                        </ul>`
    })

    navLateral.innerHTML = listaNav
}

armarNav()

//ahora hacer los elementos de la lista del nav lateral CLIQUEABLES y que me lleven a catalogo.html de forma dinamica recordando la categoria elegida

//(apuntadores):
botonCategorias = document.querySelectorAll(".botonCategorias");
// nav lateral ya lo apunte antes (navLateral = document.querySelector("#navLateral"))

botonCategorias.forEach(element => {
    element.addEventListener("click", (evento) => {
        let idClick = evento.target.getAttribute("id");

        let categoriaElegida = productos.filter(e => e.categoria == idClick);
        window.location.href = `catalogo.html?id=${encodeURIComponent(idClick)}`;

    })
});



