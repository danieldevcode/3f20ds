/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/

const prompt = require("prompt-sync")();

function potencia(){
    let x,
        n,
        k = 1;
    
    x = prompt("Base x: ");
    
    n = prompt("Itearaciones: ")

    for(k; k<=Number(n); k++){
        console.log(x + " ^ " + k + " = " + Math.pow(Number(x),k));
    }
}

potencia();