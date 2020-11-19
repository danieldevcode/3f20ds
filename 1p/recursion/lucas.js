/*
Autor: Cortés Comparán Daniel
Fecha: 17 de noviembre del 2020
Estado: Completo
*/

// 2,1,3,4,5,6,11,18...
//Índice comienza en 0
function lucas(n){
    if (n == 0){
        return 2;
    }
    if (n == 1){
        return 1;
    }
    return lucas(n - 1) + lucas(n - 2);
}

lucas(9);