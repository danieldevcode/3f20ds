/*
Autor: Cortés Comparán Daniel
Fecha: 7 de noviembre del 2020
Estado: Completo

Pregunta: De un alfabeto de n símbolos, ¿cuántas palabras 
de r símbolos podemos generar?
*/

function alfabeto(n,r) {
    let palabras;
    console.log(`De un alfabeto de ${n} símbolos, ¿cuántas palabras de ${r} símbolos podemos generar?`);
    palabras = factorial(n) / factorial(n-r);
    combinaciones = factorial(r+n-1) / (factorial(r) * factorial(n-1));
    console.log(`Se pueden generar ${palabras} palabras (permutaciones sin repetición)`);
    console.log(`Se pueden generar ${combinaciones} palabras (combinaciones con repetición)`);

}

function factorial(factorial) {
    if(factorial === 0){
        return 1;
    }else{
        for(let i= factorial-1; i>0; i--){
        
            factorial *= i;
        }
        return factorial;    
    }
}

alfabeto(10,7);