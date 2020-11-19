/*
Autor: Cortés Comparán Daniel
Fecha: 17 de noviembre del 2020
Estado: Completo
*/
let setFactorial = new Set();

function factorial(n){
    if(n > 1){
        setFactorial.add(`${n-1}! = ${factorial(n-1)}`);
        return n * factorial(n-1);
    }else{
        return 1;
    }
}

factorial(11);
console.log(setFactorial);