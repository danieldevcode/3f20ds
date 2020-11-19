/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo
Descripción: Serie de Taylor.

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/
const prompt = require("prompt-sync")();

function senx() {
    let x,
        n,
        mcLaurin = 1,
        flag = true;

    x = prompt("x: ");
    n = prompt("Iteraciones: ");

    process.stdout.write(`sen ${x} =`);
    for(let i = 1; i<=n; i++){
        if(flag == true){
            process.stdout.write(` + (${x}^${mcLaurin} / ${mcLaurin}!)`);
            flag = false;
        }
        else{
            process.stdout.write(` - (${x}^${mcLaurin} / ${mcLaurin}!)`);
            flag = true;
        }
        mcLaurin += 2;
    }
    process.stdout.write("\n");
}

senx();
