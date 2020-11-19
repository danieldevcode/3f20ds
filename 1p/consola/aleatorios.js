/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Ejecute en la consola: npm install prompt-sync
*/

const prompt = require("prompt-sync")();

function aleatorio(){
    let nCantidad,
        k=1;

    nCantidad = prompt("Cantidad de números aleatorios: ");
    
    for(k; k<=Number(nCantidad); k++){
        console.log(Math.floor( Math.random() * (Number(nCantidad)) + 1) );
    }
}

aleatorio();