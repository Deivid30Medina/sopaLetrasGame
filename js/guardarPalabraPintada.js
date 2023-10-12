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
            pintarPalabraVerde(palabras.indexOf(palabraObtenida));
        }
    }
    return false;
}

function pintarPalabraVerde(indice){
    // Recuperar desde el almacenamiento en sesión
    const arrayDesdeSesion = JSON.parse(sessionStorage.getItem('arrayPrincipal'));
    ubicacionesPalabra = arrayDesdeSesion[indice];
    console.log(ubicacionesPalabra);
    ubicacionesPalabra.forEach(ubicaciones => {
        const idButton = `${ubicaciones[0]}-${ubicaciones[1]}`;
        const letraBoton = document.getElementById(idButton);
        letraBoton.classList.add("encontrada");
    });
}


/**
 * Limpia la lista de letras pintadas.
 */
function limpiarLetrasPintadas() {
    letrasPintadas = [];
}

