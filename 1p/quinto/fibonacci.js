/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/

function fibonacci(){
    let x = -1, 
        y = 1, 
        z = 0,
        array = [],
        n=10,
        k=1;
    
    for(k; k<=n; k++){
        z = x + y;
        x = y;
        y = z;
        array.push(y);
    }
    //Imprimir quinto número (número-1 en el array)
    console.log(array[4]);
}

fibonacci();