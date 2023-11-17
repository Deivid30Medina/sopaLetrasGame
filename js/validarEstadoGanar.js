let estadoGanar = 6;

function palabrasEncontrada(){
    estadoGanar -= 1;
}

function validarOpcionGanar(){
    palabrasEncontrada();
    if (estadoGanar == 0){
        alert("ganaste");
    }
}
