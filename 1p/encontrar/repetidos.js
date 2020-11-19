/*
Autor: Cortés Comparán Daniel
Fecha: 3 de noviembre del 2020
Estado: Completo
*/

console.time("Performance");

repetidos();

console.timeEnd("Performance");


function repetidos(){
    let number,
        flag = false;
    let s = [3,1,4,2,3];

    // recorrer el array desde índice o hasta su longitud máxima.
    for(let i=0; i<s.length; i++){
        number = s[i];
        
        //Compara elemento seleccionado con cada elemento del array
        for(let j=i; j<s.length; j++){
            
            if(number == s[j+1]){
                console.log(`Se repite el número ${number}`);
                flag= true;
            }
        }
    }
    if(flag==false){
        console.log("No se repiten números");
    }
}
console.log("Complejidad computacional: O(n^2) porque es directamente proporcional al cuadrado del número de elementos del array");