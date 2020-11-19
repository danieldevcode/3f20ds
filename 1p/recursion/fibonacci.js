/*
Autor: Cortés Comparán Daniel
Fecha: 17 de noviembre del 2020
Estado: Completo
*/

//Serie 1,1,2,3,5,8...
//Índice comienza en 1
function fibonacci(i){
    if (i >= 3){
        return fibonacci(i-1) + fibonacci(i-2);
    }else{
        return 1;
    }
}

fibonacci(5);