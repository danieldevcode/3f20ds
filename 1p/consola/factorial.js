/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo.

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/
const prompt = require("prompt-sync")();

function factorial() {
    let fact,
        i,
        n,
        k = 1;

    n = prompt("Iteraciones: ");

    for(k; k<=Number(n); k++){
        fact = k;
        i = fact-1;

        //Cálculo factorial.
        for(i; i>0; i--){
            fact*= i;
        }

    console.log(k+"! = " + fact);
    }

}

factorial();