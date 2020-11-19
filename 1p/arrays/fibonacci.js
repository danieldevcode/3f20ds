/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
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
    console.log(array);
}

fibonacci();