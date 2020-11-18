/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function aleatorio(){
    let n=10,
        k=1;

    for(k; k<=n; k++){
        console.log(Math.ceil(Math.random()*10));
    }
}

aleatorio();