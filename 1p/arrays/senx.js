/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo
Descripción: Serie de Taylor.
*/

function senx() {
    let x = 3,
        n = 10,
        mcLaurin = 1,
        flag=true,
        array=[];

    for(let i = 1; i<=n; i++){
        if(flag == true){
            array.push(`+ (${x}^${mcLaurin} / ${mcLaurin}!)`);
            flag = false;
        }
        else{
            array.push(`- (${x}^${mcLaurin} / ${mcLaurin}!)`);
            flag = true;
        }
        mcLaurin += 2;
    }
    console.log(array);
}

senx();
