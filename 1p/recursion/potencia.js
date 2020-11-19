/*
Autor: Cortés Comparán Daniel
Fecha: 17 de noviembre del 2020
Estado: Completo
*/
let setPotencia = new Set();

function potencia(x,y){
    if(y == 0){
        return 1;
    }else{
        setPotencia.add(`${x} ^ ${y} = ${x * potencia(x,y-1)}`);
        return x * potencia(x,y-1);
    }
}

potencia(2,10);
console.log(setPotencia);