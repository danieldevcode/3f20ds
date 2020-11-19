/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/


function modular(){
    let horaInicial = 10,
        pregunta1 = `¿Si son las ${horaInicial} AM qué hora será en 2500 horas?`, 
        
        respuesta1 = (2500%24) + horaInicial;

    console.log(`${pregunta1} serán las ${respuesta1}:00`);
}

modular();