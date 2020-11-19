/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
Notas: Efectivo para los primeros 100 números primos. Método
       por Criba de Eratóstenes

Nota: Este programa requiere del módulo PROMPT-SYNC.
    1.- Node y NPM deben estar instalados
    2.- Para instalar módulo: npm install prompt-sync
*/
const prompt = require("prompt-sync")();

function primos(){
    let x = 1,
        k = 1,
        n;
   
    while(true){
        n = prompt("Iteraciones: ");
        if(n > 100 || n < 1){
            console.log("Mínimo 1 y máximo 100 iteraciones");
        }else{
            break;
        }
    }
  
   for(k; k<=n; k++){
       if(x==1 || x%2==0 || x%3==0 || x%5==0 || x%7==0){
            if(x==2 || x==3 || x==5 || x==7){
                console.log(x);
            }
        }else{
        console.log(x);
       }
       x++;
   }
}

primos();