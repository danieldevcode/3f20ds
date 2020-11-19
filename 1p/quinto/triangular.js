/*
Autor: Cortés Comparán Daniel
Fecha: 9 de noviembre del 2020
Estado: Completo
*/

function triangular(){
       let x = 1,
           array = [],
           stringBuilder="",
           n=10,
           k=1;

       for(k; k<=n; k++){
              for(let i=1; i<=k; i++){
                     stringBuilder = stringBuilder.concat(x.toString());
                     x++;
              }              
              array.push(stringBuilder);
              stringBuilder = "";
              x=1;
       }
       //Imprimir quinto número (número-1 en el array)
       console.log(array[4]);
}

triangular();