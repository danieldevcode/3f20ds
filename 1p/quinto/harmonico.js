/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/

function har() {
    let x = 1,
        n = 10,
        inc = 1,
        array = [];

    // process.stdout.write(`har=`);
    for(let i = 1; i<=n; i++){
        array.push(` + (${x} / ${inc})`);
        inc++;
    }
    
    //Imprimir quinto número (número-1 en el array)
    console.log(array[4]);
}

har();
