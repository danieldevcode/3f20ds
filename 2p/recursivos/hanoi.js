function torreDeHanoi(nDiscos, inicio, auxiliar, destino){

    if(nDiscos == 1){
        console.log(`Disco ${nDiscos} de ${inicio} -> ${destino}`);
        return;
    }else{
        torreDeHanoi(nDiscos-1, inicio, destino, auxiliar);
        console.log(`Disco ${nDiscos} de ${inicio} -> ${destino}`);
        torreDeHanoi(nDiscos-1, auxiliar, inicio, destino);
    }
}

torreDeHanoi(3,"A","B","C");