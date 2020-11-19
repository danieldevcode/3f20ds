/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo
*/

console.time("Performance");

max();

console.timeEnd("Performance");

function max(){
    let s = [3,1,4,2,3];
    let max = s[0];
    
    for(let i=0; i<s.length; i++){
        if(max < s[i]){
            max = s[i];
        }
    }
    
    console.log(`max = ${max}`);
}
console.log("Complejidad computacional: O(n) porque depende de la cantidad de elementos del array");