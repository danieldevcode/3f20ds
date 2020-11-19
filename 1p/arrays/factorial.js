/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function factorial() {
    let fact, 
        i,
        n=10,
        k=1,
        array = [];
    
    for(k; k<=n; k++){
        fact=k;
        i = fact-1;
        for(i; i>0; i--){
            fact*= i;
        } 
    array.push(k+"! = " + fact);
    }
    console.log(array);
    
}

factorial();