/*
Autor: Cortés Comparán Daniel
Fecha: 10 de noviembre del 2020
Estado: Completo
*/

//retorna un set con "nombres" aleatorios
function genName(n){
    let nameSet = new Set();
    
    for(let i = 0; i < n; i++){
        let k = 10,            //Nombres de 10 letras
            name = "";
        
        for(let j = 0; j < k; j++){
            name = name.concat(genLetter(genNumber()));
        }
        name = name.concat(genNumber());
        nameSet.add(name);
    }
    return nameSet;
}

//retorna un número aleatorio entre 1 y 10.
function genNumber(){
    let aleatorio = Math.floor(Math.random()*(10 - 1 + 1) + 1);
    return aleatorio;
}

//retorna una letra dependiendo del número de entrada (Entre 1 y 10)
function genLetter(letter){
    switch(letter){
        case 1:
            letter= "a";
            return letter;
        case 2:
            letter= "b";
            return letter;
        case 3:
            letter= "c";
            return letter;
        case 4:
            letter= "d";
            return letter;
        case 5:
            letter= "e";
            return letter;
        case 6:
            letter= "f";
            return letter;
        case 7:
            letter= "g";
            return letter;
        case 8:
            letter= "h";
            return letter;
        case 9:
            letter= "i";
            return letter;
        case 10:
            letter= "j";
            return letter;
        default:
            letter= "x";
            return letter;
        }
}

//La función genName requiere un parámetro de nombres a generar.
let n = 55;
console.log(genName(n));