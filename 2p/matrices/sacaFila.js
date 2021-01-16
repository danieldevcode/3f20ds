/*
  Crear objeto: let nombreObjeto = new Matrix([ [...], [...] ... [] ])
  
  Ejemplos:
  let object = new Matrix([[1,2,3,4,5], [6,7,8,9,10], [4,3,5,0,12],[1,1,1,1,1]]);
  let object = new Matrix([[1,2,3], [4,5,6], [7,8,9]]);
*/

class Matrix {
    constructor(matrix){
        this.matrix = matrix;
    }
    sacaFila(n){
        console.log(this.matrix[n-1]);
    }
}

function ejemplo(){
    let object = new Matrix([[1,2,3], [4,5,6], [7,8,9]]);
    console.log(object);
    console.log("Fila 2:");
    object.sacaFila(2);
}
ejemplo();