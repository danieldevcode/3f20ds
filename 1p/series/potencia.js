/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function potencia(){
    let x= 10,
        y= 1,
        n= 10,
        k= 1;
    
    for(k; k<=n; k++){
        console.log(x + " ^ " + y + " = " + Math.pow(x,y));
        y++;
    }
}

potencia();