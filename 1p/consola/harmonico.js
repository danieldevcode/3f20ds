/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/
const prompt = require("prompt-sync")();

function har() {
    let x = 1,
        n,
        inc = 1;

    n = prompt("Iteraciones: ");

    process.stdout.write(`har=`);
    for(let i = 1; i<=n; i++){
        process.stdout.write(` + (${x} / ${inc})`);
        inc++;
    }
    process.stdout.write("\n");
}

har();
