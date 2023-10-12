/**
 * Inicializa el comportamiento de pintura de letras en los botones de la sopa de letras.
 * @param {NodeList} botones - Lista de nodos de botones donde se aplicará la pintura de letras.
 */
function inicializarPinturaLetras(botones) {
    let mousePresionado = false;
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
        subraarPalabra(botones);
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
     * Limpia las letras pintadas en todos los botones.
     * @param {NodeList} botones - Lista de nodos de botones donde se limpiará la pintura de letras.
     */
    function limpiarLetras(botones) {
        botones.forEach(boton => {
            boton.classList.remove('active');
            limpiarLetrasPintadas();
        });
        
    }

    function subraarPalabra(botones){
        const palabraFormadaTexto = obtenerPalabraFormada();
        palabraFormada.textContent = palabraFormadaTexto;
        validarPalabraObtenida(palabraFormadaTexto);
        limpiarLetras(botones);
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
inicializarPinturaLetras(botones);
nuevoJuego();



/*
1. Evento mousedown:
Este evento ocurre cuando el botón del mouse es presionado
 mientras el cursor está sobre el elemento. En el contexto del
 código proporcionado, el evento mousedown se utiliza para iniciar
 la pintura de una letra cuando el usuario hace clic en un botón de la sopa
 de letras. Cuando el usuario presiona el botón del mouse sobre un botón, se añade
 la clase active al botón, indicando que esa letra está siendo pintada.
 
 boton.addEventListener('mousedown', () => {
    mousePresionado = true;
    pintarLetra(boton);
});

2. Evento mouseover:
Este evento ocurre cuando el cursor se mueve sobre
 el elemento, es decir, cuando el usuario pasa el mouse
 sobre el botón sin presionar el botón del mouse. 
 En el contexto del código, el evento mouseover se utiliza para 
 continuar pintando letras cuando el usuario mantiene presionado 
 el botón del mouse y pasa el cursor sobre otros botones. Si el mouse 
 está presionado (mousePresionado es true), se llama a la función 
 pintarLetra(boton) para pintar la letra en el botón sobre el cual 
 está el cursor.
 
boton.addEventListener('mouseover', () => {
    if (mousePresionado) {
        pintarLetra(boton);
    }
});

3. Evento mouseup:
Este evento ocurre cuando el botón del mouse es liberado después
 de ser presionado. En el contexto del código, el evento mouseup 
 se utiliza para limpiar todas las letras pintadas cuando el usuario 
 suelta el botón del mouse en cualquier parte del documento. Cuando el 
 usuario suelta el botón del mouse, mousePresionado se establece a false, 
 y se llama a la función limpiarLetras(botones) para quitar la clase active 
 de todos los botones, eliminando así las letras pintadas.

document.addEventListener('mouseup', () => {
    mousePresionado = false;
    limpiarLetras(botones);
});

*/