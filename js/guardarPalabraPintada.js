// Esta variable almacenará las letras pintadas
let letrasPintadas = [];

/**
 * Agrega una letra a la lista de letras pintadas.
 * @param {string} letra - La letra que se va a agregar.
 */
function agregarLetraPintada(letra) {  
    letrasPintadas.push(letra);
}

/**
 * Obtiene la palabra formada por las letras pintadas.
 * @returns {string} - La palabra formada por las letras pintadas.
 */
function obtenerPalabraFormada() {
    let palabraFormada = letrasPintadas.join('');
    console.log(letrasPintadas);
    return palabraFormada;
}

function validarPalabraObtenida(palabraObtenida){
    const palabras = ['PRESTAMO', 'PLATAFORMAS', 'DISTRIBUCIÓN', 'VENTA', 'ALQUILER'];
    for(let i = 0; i < palabras.length; i++){
        if(palabraObtenida == palabras[i]){
            const idPalabra = `id${palabras[i]}`;
            // Obtén la palabra por su ID
            const palabraSubrayar = document.getElementById(idPalabra);
            palabraSubrayar.classList.add('classSubrayar');
            return true;
        }
    }
    return false;
}


/**
 * Limpia la lista de letras pintadas.
 */
function limpiarLetrasPintadas() {
    letrasPintadas = [];
}

