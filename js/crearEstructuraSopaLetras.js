function crearEstructuraBotonesSopaLetras(x, y) {
    const puzzleContainer = document.querySelector('.classPuzzle');
    
    for (let i = 1; i <= x; i++) {
        const fila = document.createElement('div');
        fila.className = 'classPuzzleFila';
        
        for (let j = 1; j <= y; j++) {
            const boton = document.createElement('button');
            boton.id = `${i}-${j}`;
            boton.className = 'classLetra';
            fila.appendChild(boton);
        }
        
        puzzleContainer.appendChild(fila);
    }
}

// Llamada a la función para crear una sopa de letras de 5 filas y 12 columnas
crearEstructuraBotonesSopaLetras(9, 12);
