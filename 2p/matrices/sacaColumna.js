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
    sacaColumna(n){
        let column = [];
        for(let i = 1; i <= this.matrix.length; i++){
            column.push(this.matrix[i-1][n-1]);
        }
        console.log(column);
    }
}
function ejemplo(){
    let object = new Matrix([[1,2,3], [4,5,6], [7,8,9]]);
    console.log (object);
    console.log("Columna 3:");
    object.sacaColumna(3);
}
ejemplo();