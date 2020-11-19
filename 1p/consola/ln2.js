/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/
const prompt = require("prompt-sync")();

function ln2() {
    let x = 1,
        n,
        ln = 1,
        flag = true;

    n = prompt("Iteraciones: ");

    process.stdout.write(`Ln 2 =`);
    for(let i = 1; i<=n; i++){
        if(flag == true){
            process.stdout.write(` + (${x} / ${ln})`);
            flag = false;
        }
        else{
            process.stdout.write(` - (${x} / ${ln})`);
            flag = true;
        }
        ln++;
    }
    process.stdout.write("\n");
}

ln2();
