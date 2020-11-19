/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function lucas(){
    let a = 2,
        b = 1,
        c = 0,
        array = [],
        n=10,
        k=1;
    
    for(k; k<=n; k++){
        //Imprimir primeros 2 números y contar como 2 iteraciones
        if(a==2 || b==1){
            array.push(a);
            array.push(b);
            k=3;
        }
        c = a + b;
        a = b;
        b = c;
        array.push(c);        
    }
    console.log(array);
}
lucas();