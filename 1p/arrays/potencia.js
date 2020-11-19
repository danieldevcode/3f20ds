/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function potencia(){
    let n = 10,
        k = 1,
        array = [],
        x = 10;
    
    for(k; k<=n; k++){
        array.push(x + " ^ " + k + " = " + Math.pow(x,k));
    }
    console.log(array);
}

potencia();