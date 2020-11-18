/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function factorial() {
    let fact, i
        n=10,
        k=1;
    
    for(k; k<=n; k++){
        fact=k;
        i = fact-1;
        
        for(i; i>0; i--){
            fact*= i;
        } 
    console.log(k+"! = " + fact);
    }
}

factorial();