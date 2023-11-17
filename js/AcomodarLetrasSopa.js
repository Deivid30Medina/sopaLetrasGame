const palabraUbicacion = [,,,];
const palabras = ['PRESTAMO', 'PLATAFORMAS', 'DISTRIBUCIÓN', 'VENTA', 'ALQUILER', 'AUTOR'];
const filas = 12;
const columnas = 12;
const sopa = colocarPalabrasEnSopa(palabras, filas, columnas);
const ubicacionPalabras = document.getElementById("idLabelUbicaciones");



/**
 * Genera una matriz vacía (sopa de letras) con las dimensiones especificadas.
 * @param {number} filas - Número de filas de la sopa de letras.
 * @param {number} columnas - Número de columnas de la sopa de letras.
 * @returns {Array} - Una matriz vacía con las dimensiones especificadas.
 */
function generarSopa(filas, columnas) {
    return Array.from({ length: filas }, () => Array(columnas).fill(''));
}

/**
 * Valida si una posición dada está dentro de los límites de la sopa de letras.
 * @param {Array} sopa - La sopa de letras.
 * @param {number} fila - Índice de la fila.
 * @param {number} columna - Índice de la columna.
 * @returns {boolean} - true si la posición está dentro de los límites, false en caso contrario.
 */
function validarPosicion(sopa, fila, columna) {
    return fila >= 0 && fila < sopa.length && columna >= 0 && columna < sopa[0].length;
}

/**
 * Verifica si una palabra cabe en una posición específica de la sopa de letras con una orientación dada.
 * @param {Array} sopa - La sopa de letras.
 * @param {string} palabra - La palabra que se intenta colocar en la sopa.
 * @param {number} fila - Índice de la fila donde se intenta colocar la palabra.
 * @param {number} columna - Índice de la columna donde se intenta colocar la palabra.
 * @param {Array} orientacion - La orientación en la que se intenta colocar la palabra (por ejemplo, [1, 0] para vertical).
 * @returns {boolean} - true si la palabra cabe en la posición y orientación especificadas, false en caso contrario.
 */
function palabraCabeEnPosicion(sopa, palabra, fila, columna, orientacion) {
    let filaActual = fila;
    let columnaActual = columna;
    for (let i = 0; i < palabra.length; i++) {
        if (!validarPosicion(sopa, filaActual, columnaActual) || (sopa[filaActual][columnaActual] !== '' && sopa[filaActual][columnaActual] !== palabra[i])) {
            return false;
        }
        filaActual += orientacion[0];
        columnaActual += orientacion[1];
    }
    return true;
}

/**
 * Coloca una palabra en una posición específica de la sopa de letras con una orientación dada.
 * @param {Array} sopa - La sopa de letras.
 * @param {string} palabra - La palabra que se va a colocar en la sopa.
 * @param {number} fila - Índice de la fila donde se colocará la palabra.
 * @param {number} columna - Índice de la columna donde se colocará la palabra.
 * @param {Array} orientacion - La orientación en la que se colocará la palabra (por ejemplo, [1, 0] para vertical).
 */
function colocarPalabraEnSopa(sopa, palabra, fila, columna, orientacion, cont) {
    const pasoFila = orientacion[0];
    const pasoColumna = orientacion[1];
    const palabraFormada = [];
    for (let i = 0; i < palabra.length; i++) {
        sopa[fila + i * pasoFila][columna + i * pasoColumna] = palabra[i];
        palabraFormada.push([fila + i * pasoFila +1,columna + i * pasoColumna +1]); 
    }
    palabraUbicacion.splice(cont,0,palabraFormada);
}

/**
 * Función que colcoa letras en los espacios vacios de la sopa de letras
 * @param {Array} sopa - Un array de de palabras acomodadas en la sopa de letras 
 * @param {*} filas - Número de filas de la sopa de letras
 * @param {*} columnas - Número de columnas de la sopa de letras
 * @returns {Array} - Retorna la matriz completa de la sopa de letras con todos los campos con letras
 */
function completarSopaLetras(sopa,filas,columnas){
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0; i < filas; i++){
        for(let j = 0; j < columnas; j++){
            if(sopa[i][j] == ""){
                const letra = letras[Math.floor(Math.random() * letras.length)];
                sopa[i][j] = letra;
            }
        }
    }
    return sopa;
}


/**
 * Coloca las palabras en la sopa de letras de forma aleatoria y garantiza que no se superpongan.
 * @param {Array} palabras - Un array de palabras que se colocarán en la sopa de letras.
 * @param {number} filas - Número de filas de la sopa de letras.
 * @param {number} columnas - Número de columnas de la sopa de letras.
 * @returns {Array} - La sopa de letras con las palabras colocadas.
 */
function colocarPalabrasEnSopa(palabras, filas, columnas) {
    const orientaciones = [
        [0, 1], [1, 0], [-1, 0], [0, -1], // horizontal, vertical, vertical invertida, horizontal invertida
        [1, 1], [-1, -1], [1, -1], [-1, 1]  // diagonal descendente, diagonal ascendente, diagonal ascendente invertida, diagonal descendente invertida
    ];

    const sopa = generarSopa(filas, columnas);
    let cont = 0;
    palabras.forEach(palabra => {
        let colocada = false;
        while (!colocada) {
            const orientacion = orientaciones[Math.floor(Math.random() * orientaciones.length)];
            const filaInicial = Math.floor(Math.random() * filas);
            const columnaInicial = Math.floor(Math.random() * columnas);

            if (palabraCabeEnPosicion(sopa, palabra, filaInicial, columnaInicial, orientacion)) {
                colocarPalabraEnSopa(sopa, palabra, filaInicial, columnaInicial, orientacion, cont);
                colocada = true;
                cont += 1;
            }
        }
        
    });
    sessionStorage.setItem('arrayPrincipal', JSON.stringify(palabraUbicacion));
    completarSopaLetras(sopa,filas,columnas);
    return sopa;
}





// Recorre la matriz y asigna los valores a los botones
for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
        // Obtén el ID del botón correspondiente a la posición en la matriz
        const botonId = `${fila + 1}-${columna + 1}`;
        
        // Obtén el botón por su ID
        const boton = document.getElementById(botonId);
        
        // Asigna el valor de la matriz al texto del botón
        boton.textContent = sopa[fila][columna];
    }
}

