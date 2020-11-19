/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
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
    //Imprimir quinto número (número-1 en el array)
    console.log(array[4]);
    
}

factorial();