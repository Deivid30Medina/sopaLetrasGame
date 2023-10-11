function colocarPalabrasEnSopa(palabras) {
    const filas = 12;
    const columnas = 14;
    const orientaciones = [
        [0, 1], [1, 0], [-1, 0], [0, -1], // horizontal, vertical, vertical invertida, horizontal invertida
        [1, 1], [-1, -1], [1, -1], [-1, 1]  // diagonal descendente, diagonal ascendente, diagonal ascendente invertida, diagonal descendente invertida
    ];

    const sopa = Array.from({ length: filas }, () => Array(columnas).fill(''));

    function palabraCabeEnPosicion(palabra, fila, columna, orientacion) {
        let filaActual = fila;
        let columnaActual = columna;
        for (let i = 0; i < palabra.length; i++) {
            if (filaActual < 0 || filaActual >= filas || columnaActual < 0 || columnaActual >= columnas || (sopa[filaActual][columnaActual] !== '' && sopa[filaActual][columnaActual] !== palabra[i])) {
                return false;
            }
            filaActual += orientacion[0];
            columnaActual += orientacion[1];
        }
        return true;
    }

    function colocarPalabra(palabra) {
        const orientacion = orientaciones[Math.floor(Math.random() * orientaciones.length)];
        const pasoFila = orientacion[0];
        const pasoColumna = orientacion[1];
        const longitud = palabra.length;

        let filaInicial = Math.floor(Math.random() * filas);
        let columnaInicial = Math.floor(Math.random() * columnas);

        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                const filaActual = (filaInicial + i * pasoFila) % filas;
                const columnaActual = (columnaInicial + j * pasoColumna) % columnas;

                if (palabraCabeEnPosicion(palabra, filaActual, columnaActual, orientacion)) {
                    for (let k = 0; k < longitud; k++) {
                        sopa[filaActual + k * pasoFila][columnaActual + k * pasoColumna] = palabra[k];
                    }
                    return true;
                }
            }
        }
        return false;
    }

    palabras.forEach(palabra => {
        let colocada = false;
        while (!colocada) {
            colocada = colocarPalabra(palabra);
        }
    });

    return sopa;
}

const palabras = ['PRESTAMO', 'PLATAFORMAS', 'DISTRIBUCION', 'VENTA', 'ALQUILER'];
const sopa = colocarPalabrasEnSopa(palabras);
console.log(sopa);
