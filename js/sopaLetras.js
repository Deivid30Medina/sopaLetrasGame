function generarSopaLetras(filas, columnas) {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const sopaLetras = [];

    // Inicializar la matriz con letras aleatorias
    for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
            const letra = letras[Math.floor(Math.random() * letras.length)];
            fila.push(letra);
        }
        sopaLetras.push(fila);
    }

    return sopaLetras;
}

function insertarPalabrasEnSopa(sopa, palabras) {
    const filas = sopa.length;
    const columnas = sopa[0].length;

    palabras.forEach(palabra => {
        const longitud = palabra.length;
        const orientacion = Math.floor(Math.random() * 8); // 8 orientaciones posibles

        let filaInicial = Math.floor(Math.random() * filas);
        let columnaInicial = Math.floor(Math.random() * columnas);

        // Horizontal
        if (orientacion === 0) {
            if (columnaInicial + longitud <= columnas) {
                for (let i = 0; i < longitud; i++) {
                    sopa[filaInicial][columnaInicial + i] = palabra[i];
                }
            }
        }
        // Vertical
        // ... similar a horizontal, pero en la dirección vertical

        // Diagonal Positiva
        // ... similar a horizontal, pero en la dirección diagonal positiva (/)

        // Diagonal Negativa
        // ... similar a horizontal, pero en la dirección diagonal negativa (\)

        // Otras orientaciones...

    });

    return sopa;
}


document.addEventListener('DOMContentLoaded', function () {
    const filas = 12;
    const columnas = 12;
    const palabras = ['PRESTAMO', 'PLATAFORMAS', 'DISTRIBUCION', 'VENTA', 'ALQUILER'];

    // Generar sopa de letras
    const sopa = generarSopaLetras(filas, columnas);

    // Insertar palabras en la sopa de letras
    const sopaConPalabras = insertarPalabrasEnSopa(sopa, palabras);

    // Asignar letras a los botones en el HTML
    const botones = document.querySelectorAll('.classLetra');
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            botones[i * filas + j].textContent = sopaConPalabras[i][j];
        }
    }
});

