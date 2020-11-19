/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo
*/

function potencia() {
  let arrayS = [3, 1, 4, 2, 3];

  return (function ps(lista) {
      if (lista.length === 0) {
          return [[]];
      }
      let cabeza = lista.pop();
      let cola = ps(lista);
      
      return cola.concat(cola.map(function(e) { return [cabeza].concat(e); }));
  })(arrayS.slice());
}

console.time("Performance");
console.log(potencia(arrayS));
console.timeEnd("Performance");
console.log("Complejidad computacional: O(n) porque depende de la cantidad de elementos del array");