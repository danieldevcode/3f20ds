/*
Autor: Cortés Comparán Daniel
Fecha: 26 de octubre del 2020
Estado: Completo
*/

function fibonacci(){
    let x=-1, 
        y=1, 
        z=0,
        n=10,
        k=1;
    
    for(k; k<=n; k++){
        z = x + y;
        x = y;
        y = z;
        console.log(y);
    }
}

fibonacci();