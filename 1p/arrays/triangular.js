/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
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
       console.log(array);
}

triangular();        