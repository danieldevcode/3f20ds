/*
Autor: Cortés Comparán Daniel
Fecha: 15 de noviembre del 2020
Estado: Completo
*/

// Variables globales
let inversiones = 0,
    n = Math.pow(10,4), //10e4
    aleatorio = 0,
    array = [];

function genNumbers(){

    // Generación de números de i hasta n
    for(i=0; i<n; i++){
       array.push(aleatorio = Math.floor(Math.random()*(9999)));
    }
    // Retornar array ordenado
    return array.sort(compare);
}

// Condición de ordenación
function compare (a,b){
    
    // Conteo de inversiones
    inversiones+=1;
    
    // Retorno de comparación
    return a-b;
}

console.time("Performance");

console.log(genNumbers());
console.log("Inversiones: " + inversiones);

console.timeEnd("Performance");

console.log("\nPruebas en Node: ");
console.log("¿Cuántas inversiones requiere en promedio? 128,511.67 inversiones");
console.log("¿Cuánto tiempo toma en promedio? 30.47734ms");
console.log("¿Podemos mejorar el tiempo de ejecución? ¿Cómo? Se está utilizando quicksort, quizás cambiando el algoritmo de ordenamiento se mejore el tiempo, también influyen las características de la pc.");


/* PREGUNTAS
Pruebas realizadas en una VM con S.O. Debian 10 y ejecutando Node.

1.- ¿Cuántas inversiones requiere en promedio?
    R = 128,511.67 inversiones

2.- ¿Cuánto tiempo toma en promedio?
    R = 30.47734ms

3.- ¿Podemos mejorar el tiempo de ejecución? ¿Cómo?
    R = Se está utilizando quicksort, quizás cambiando el
    algoritmo de ordenamiento se mejore el tiempo, también
    influyen las características de la pc.

PRUEBAS:
    Prueba 1:
        Inversiones = 130,068
        Performance = 31.029ms
    
    Prueba 2:
        Inversiones = 128,098
        Performance = 30.216ms

    Prueba 3:
        Inversiones = 127,369
        Performance = 30.187ms
*/