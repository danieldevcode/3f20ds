/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/
const prompt = require("prompt-sync")();

function ln() {
    let x,
        n,
        ln = 1,
        flag = true;

    x = prompt("x: ");
    n = prompt("Iteraciones: ");

    process.stdout.write(`Ln (1 + ${x}) = `);
    for(let i = 1; i<=n; i++){
        if(flag == true){
            process.stdout.write(` + (${x}^${ln} / ${ln})`);
            flag = false;
        }
        else{
            process.stdout.write(` - (${x}^${ln} / ${ln})`);
            flag = true;
        }
        ln++;
    }
    process.stdout.write("\n");
}

ln();
