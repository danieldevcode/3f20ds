/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/

function modular(){
    let horaInicial = 10,
        pregunta2 = `¿Si son las ${horaInicial} AM qué hora fue hace 2500 horas?`,
        respuesta2 = horaInicial - (2500%24);
    
    console.log(`${pregunta2} fueron las 0${respuesta2}:00`);
}

modular();