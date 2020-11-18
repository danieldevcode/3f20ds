/*
Autor: Cortés Comparán Daniel
Fecha: 26 de octubre del 2020
Estado: Completo
*/

function triangular(){
       let x = 1,
           n=10,
           k=1,
           stringBuilder="";

       for(k; k<=n; k++){
              
              for(let i=1; i<=k; i++){
                     stringBuilder= stringBuilder.concat(x);
                     x++;
              }
       console.log(stringBuilder);
       stringBuilder = "";
       x=1;
       }
}

triangular();      