/*
Autor: Cortés Comparán Daniel
Fecha: 10 de noviembre del 2020
Estado: Completo
*/

function modular(){
    let diaInicial = "Lunes",
        nDias = 36,
        dia,
        pregunta1 = `¿Si hoy es ${diaInicial} qué día será en 11 días?`,   
        respuesta1;
        
        //Asignar número a día.
        switch(diaInicial){
            case "Lunes":
                dia = 1;
                break;     
            
            case "Martes":
                dia = 2;
                break;     
            
            case "Miércoles":
                dia = 3;
                break;     
            
            case "Jueves":
                dia = 4;
                break;     
            
            case "Viernes":
                dia = 5; 
                break;     
            
            case "Sábado":
                dia = 6; 
                break;     
            
            case "Domingo":
                dia = 7; 
                break;     
        }
    
    //Calcular número correspondiente a día.
    respuesta1 = ((dia+11)%7);      
        
    //Imprimir respuesta;
    console.log(`${pregunta1} Será ${respuesta(respuesta1, diaInicial)}`);
}

function respuesta(respuesta, diaInicial){
    //Día correspondiente a número.
    switch(respuesta){
        case 1:
            return "Lunes";     
  
        case 2:
            return "Martes";     

        case 3:
            return "Miércoles";     

        case 4:
            return "Jueves";     

        case 5:
            return "Viernes";          

        case 6:
            return "Sábado";       

        case 7:
            return "Domingo";
        
        default:
            return diaInicial;         
    }
}

modular();