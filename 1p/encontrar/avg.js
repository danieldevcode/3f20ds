/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo
*/

console.time("Performance");

avg();

console.timeEnd("Performance");

function avg(){
    let avg = 0;
    let s = [3,1,4,2,3];

    for(let i=0; i<s.length; i++){
        avg += s[i];
    }
    avg /= s.length;
    console.log(`avg = ${avg}`);
}

console.log("Complejidad computacional: O(n) porque depende de la cantidad de elementos del array");