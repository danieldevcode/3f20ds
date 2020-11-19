/*
Autor: Cortés Comparán Daniel
Fecha: 17 de noviembre del 2020
Estado: Completo
*/

function triangular(n){
    if(n == 0){
        return 1;
    }
    return triangular(n-1);
}

triangular(5);