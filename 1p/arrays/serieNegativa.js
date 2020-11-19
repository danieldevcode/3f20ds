/*
Autor: Cortés Comparán Daniel
Fecha: 2 de noviembre del 2020
Estado: Completo
*/

function serie(){
    let x = 1,
        y = 2;
        z = true,
        array = [],
        n=10,
        k=1;

    
    for(k; k<=n; k++){
        if (z==true){
            array.push(x*-1);
            z=false;
        }else{
            array.push(x);
            z=true;
        }
        x+=y;
    }
    console.log(array);
}

serie();