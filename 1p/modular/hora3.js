/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/


function modular(){
    let horaInicial = 10,
        horaFinal = 5000,
        pregunta3 = `¿Si son las ${horaInicial} AM qué hora será en ${horaFinal} horas?`,
        respuesta3 = (horaFinal%24) + horaInicial;
        
    console.log(`${pregunta3} serán las ${respuesta3}:00`);
}

modular();