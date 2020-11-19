/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/

function pascal(n){
    let array = [],
        stringBuilder = "";
        
    for(let fila = 1; fila <= n; fila++){
        
        let c = 1;

        for(let i = 1; i <= fila; i++){
            // process.stdout.write(`${c}`);
            stringBuilder = stringBuilder.concat(c.toString());
            c = c * (fila - i) / i;
        }
        // process.stdout.write(`\n`);
        
        array.push(stringBuilder);
        stringBuilder = "";
        
        //Imprimir quinto renglón (número-1 en el array)
        if(fila == 5){
            console.log(array[4]);
            break;
        }
    }
}
pascal(10);