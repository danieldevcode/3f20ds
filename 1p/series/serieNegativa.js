/*
Autor: Cortés Comparán Daniel
Fecha: 26 de octubre del 2020
Estado: Completo
*/

function serie(){
    let x = 1,
        y = 2;
        z = true
        n = 10,
        k = 1;
    
    for(k; k<=n; k++){
        if (z==true){
            console.log(x*-1)
            z=false;
        }else{
            console.log(x);
            z=true;
        }
        x+=y;
    }
}

serie();