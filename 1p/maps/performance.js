/*
Autor: Cortés Comparán Daniel
Fecha: 11 de noviembre del 2020
Estado: Completo
*/

//retorna un set con "nombres" aleatorios de 10 letras y 2 números 
function genName(n){
    let lista = new Map();
    
    for(let i = 0; i < n; i++){
        let k = 10,             //Nombres de 10 letras
            name = "";
        
        for(let j = 0; j < k; j++){
            name = name.concat(genLetter(genNumber()));
        }
        name = name.concat(genNumber());
        lista.set(`persona${i+1}`,{nombre: name});
    }
    return lista;
}

//retorna un número aleatorio entre 1 y 27.
function genNumber(){
    let aleatorio = Math.floor(Math.random()*(27 - 1 + 1) + 1);
    return aleatorio;
}

//retorna una letra dependiendo del número de entrada (Entre 1 y 27)
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
        case 11:
            letter= "k";
            return letter;
        case 12:
            letter= "l";
            return letter;
        case 13:
            letter= "m";
            return letter;    
        case 14:
            letter= "n";
            return letter;    
        case 15:
            letter= "ñ";
            return letter;
        case 16:
            letter= "o";
            return letter;
        case 17:
            letter= "p";
            return letter;
        case 18:
            letter= "q";
            return letter;
        case 19:
            letter= "r";
            return letter;
        case 20:
            letter= "s";
            return letter;
        case 21:
            letter= "t";
            return letter;
        case 22:
            letter= "u";
            return letter;
        case 23:
            letter= "v";
            return letter;
        case 24:
            letter= "w";
            return letter;
        case 25:
            letter= "x";
            return letter;
        case 26:
            letter= "y";
            return letter;
        case 27:
            letter= "z";
            return letter;
        }
}

//La función genName requiere un parámetro de nombres a generar.

//n = 10e4
let n = Math.pow(10,4);
console.time("Performance 10e4");
console.log(genName(n));
console.timeEnd("Performance 10e4");

//n = 10e5
n = Math.pow(10,5);
console.time("Performance 10e5");
console.log(genName(n));
console.timeEnd("Performance 10e5");

// n = 10e6
n = Math.pow(10,6);
console.time("Performance 10e6");
console.log(genName(n));
console.timeEnd("Performance 10e6");