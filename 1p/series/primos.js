/*
Autor: Cortés Comparán Daniel
Fecha: 26 de octubre del 2020
Estado: Completo
Notas: Efectivo para los primeros 100 números primos. Método
       por Criba de Eratóstenes
*/

function primos(){
   let x=1,
       n=30,
       k=1;
   
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