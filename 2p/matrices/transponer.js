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
    //Filas a columnas y columnas a filas
    transponer(){
        //Matriz copia con 0
        let matrixCopy = [];
        for(let i = 0; i < this.matrix.length; i++){
            matrixCopy.push([]);
            for(let j = 0; j < this.matrix.length; j++){
                matrixCopy[i].push(0);
            }
        }
        
        //Transponer
        for(let y = 0; y < this.matrix.length; y++){
            for(let x = 0; x <this.matrix.length; x++){
                matrixCopy[x][y] = this.matrix[y][x];
            }
        }
        console.log(matrixCopy);
    }
}

function ejemplo(){
    let object = new Matrix([[1,2,3], [4,5,6], [7,8,9]]);
    console.log (object);
    console.log("Resultado:")
    object.transponer();    
}
ejemplo();