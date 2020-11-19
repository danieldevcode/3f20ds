/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo
*/

console.time("Performance");

min();

console.timeEnd("Performance");

function min(){
    let s = [3,1,4,2,3];
    let min = s[0];
    
    for(let i=0; i<s.length; i++){
        if(min > s[i]){
            min = s[i];
        }
    }
    
    console.log(`min = ${min}`);
}
console.log("Complejidad computacional: O(n) porque depende de la cantidad de elementos del array");