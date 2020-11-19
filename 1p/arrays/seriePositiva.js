/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function serie(){
    let x = 1,
        y = 2,
        array = [],
        n=10,
        k=1;
    
    for(k; k<=n; k++){
        array.push(x);
        x+=y;
    }
    console.log(array);
}

serie();