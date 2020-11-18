/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function lucas(){
    let a= 2,
        b= 1,
        c= 0,
        n=10,
        k=1;
    
    for(k; k<=n; k++){
        //Imprimir primeros 2 números y contar como 2 iteraciones
        if(a==2 || b==1){
            console.log(a);
            console.log(b);
            k=3;
        }
        c = a + b;
        a = b;
        b = c;
        console.log(c);        
    }
}
lucas();