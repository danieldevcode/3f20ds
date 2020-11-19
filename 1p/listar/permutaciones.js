/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo

Heap's algorithm
*/
let arrayS = [3,1,4,2,3];

const permutaciones = arr => {

    const output = [];
  
    const intercambio = (intercambioArray, indexA, indexB) => {
      const temporal = intercambioArray[indexA];
      intercambioArray[indexA] = intercambioArray[indexB];
      intercambioArray[indexB] = temporal;
    };
  
    const generar = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }
  
      generar(n - 1, heapArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          intercambio(heapArr, i, n - 1);
        } else {
          intercambio(heapArr, 0, n - 1);
        }
        generar(n - 1, heapArr);
      }
    };
  
    generar(arr.length, arr.slice());
  
    return output;
};
console.time("Performance");
console.log(permutaciones(arrayS));
console.timeEnd("Performance");
console.log("Complejidad computacional: O(n) porque depende de la cantidad de elementos del array");
