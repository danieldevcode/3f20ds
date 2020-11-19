/*
Autor: Cortés Comparán Daniel
Fecha: 7 de noviembre del 2020
Estado: Completo

Pregunta: En una fiesta hay 3 invitados, 
si cada uno saluda a todos los demás, 
¿cuantos saludos ocurrieron?
*/

function saludos(n) {
    let saludosTotales;
    console.log(`En una fiesta hay ${n} invitados, si cada uno saluda a todos los demás, ¿cuántos saludos ocurrieron?`);
    saludosTotales = factorial(n) / ( factorial(2) * factorial(n-2) );
    console.log("Ocurrieron " + saludosTotales + " saludos");
}

function factorial(factorial) {
    for(let i= factorial-1; i>0; i--){
        factorial *= i;
    }
    return factorial;
}

saludos(3);