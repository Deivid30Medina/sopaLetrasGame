/**
 * Inicializa el comportamiento de pintura de letras en los botones de la sopa de letras.
 * @param {NodeList} botones - Lista de nodos de botones donde se aplicará la pintura de letras.
 */
function inicializarPinturaCelular(botones) {
    let timeoutId;
    
    // Agrega el evento click a cada botón
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            pintarLetra(boton);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                subrayarPalabra(botones);
                limpiarLetras(botones);
            }, 2000); // Esperar 2 segundos antes de deshacer la acción
        });
    });

    /**
     * Pinta una letra en el botón si no tiene la clase 'active'.
     * @param {Element} boton - El botón en el que se pintará la letra.
     */
    function pintarLetra(boton) {
        if (!boton.classList.contains('active')) {
            boton.classList.add('active');
            const letra = boton.textContent;
            agregarLetraPintada(letra);
        }
    }

    /**
     * Limpia las letras pintadas en todos los botones. Cuando se levanta el dedo.
     * @param {NodeList} botones - Lista de nodos de botones donde se limpiará la pintura de letras.
     */
    function limpiarLetras(botones) {
        botones.forEach(boton => {
            if (boton.classList.contains('active')) {
                boton.classList.remove('active');
                limpiarLetrasPintadas();
            }
        });
    }

    function subrayarPalabra(botones){
        const palabraFormadaTexto = obtenerPalabraFormada();
        palabraFormada.textContent = palabraFormadaTexto;
        console.log(palabraFormadaTexto);
        validarPalabraObtenida(palabraFormadaTexto);
        limpiarLetras(botones);
    }
}

/**
 * Inicializa el comportamiento de pintura de letras en los botones de la sopa de letras.
 * @param {NodeList} botones - Lista de nodos de botones donde se aplicará la pintura de letras.
 */
function inicializarPinturaPC(botones) {
    let mousePresionado = false;
    let tocandoPantalla = false;
    // Agrega el evento mousedown, mouseover y mouseup a cada botón
    botones.forEach(boton => {
        boton.addEventListener('mousedown', () => {
            mousePresionado = true;
            pintarLetra(boton);
        });

        boton.addEventListener('mouseover', () => {
            if (mousePresionado) {
                pintarLetra(boton);
            }
        });

    });

    // Agrega un evento al documento para limpiar las letras cuando se suelta el clic en cualquier parte del documento
    document.addEventListener('mouseup', () => {
        mousePresionado = false;
        subrayarPalabra(botones);
    });

    /**
     * Pinta una letra en el botón si no tiene la clase 'active'.
     * @param {Element} boton - El botón en el que se pintará la letra.
     */
    function pintarLetra(boton) {
        if (!boton.classList.contains('active')) {
            boton.classList.add('active');
            const letra = boton.textContent;
            agregarLetraPintada(letra);
        }
    }

    /**
     * Limpia las letras pintadas en todos los botones. Cundo se levanta el mouse
     * @param {NodeList} botones - Lista de nodos de botones donde se limpiará la pintura de letras.
     */
    function limpiarLetras(botones) {
        botones.forEach(boton => {
            boton.classList.remove('active');
            limpiarLetrasPintadas();
        });
        
    }

    function subrayarPalabra(botones){
        const palabraFormadaTexto = obtenerPalabraFormada();
        palabraFormada.textContent = palabraFormadaTexto;
        validarPalabraObtenida(palabraFormadaTexto);
        limpiarLetras(botones);
    }
}


function valdiarCelular_o_PC(resolucionPantalla, botones){
    console.log(resolucionPantalla);
    if(resolucionPantalla <= 709){
        inicializarPinturaCelular(botones);
    }else{
        inicializarPinturaPC(botones);
    }
}

function nuevoJuego(){
    botonNewGame.addEventListener("click", function() {
        // Código que se ejecuta cuando el botón es clicado
        location.reload();
        // Puedes añadir más código aquí para realizar alguna validación o acción adicional
    });
}

// Uso de la función para inicializar la pintura de letras en los botones de la sopa de letras
const palabraFormada = document.getElementById("palabra-formada");
const botonNewGame = document.getElementById("idNewGame");
const botones = document.querySelectorAll('.classLetra');
let resolucion = screen.width;
valdiarCelular_o_PC(resolucion, botones);
nuevoJuego();
