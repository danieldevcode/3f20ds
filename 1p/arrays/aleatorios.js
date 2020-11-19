/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function aleatorio(){
    let n = 10,
    k = 1,
    array = [];
    
    for(k; k<=n; k++){
        array.push(Math.ceil(Math.random()*10));
    }
    console.log(array);
}

aleatorio();