/*
Autor: Cortés Comparán Daniel
Fecha: 17 de noviembre del 2020
Estado: Completo
*/

//Serie 1,3,5,7,9,11,13...
//Índice comienza en 1

let setSerie = new Set();

function seriePositiva(i){
    if(i > 1){
        setSerie.add(seriePositiva(i-1));
        return seriePositiva(i-1) + 2;
    }else{
        return 1;
    }
}

seriePositiva(11);
console.log(setSerie);