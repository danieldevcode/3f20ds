/*
Autor: Cortés Comparán Daniel
Fecha: 5 de noviembre del 2020
Estado: Completo
*/

function combinaciones() {
	let arrayS = [3, 1, 4, 2,3],
	resultado = [];
	
	for (let i = 0; i < arrayS.length - 1; i++) {
		for (let j = i + 1; j < arrayS.length; j++) {
		  resultado.push(`${arrayS[i]} ${arrayS[j]}`);
		}
	}	  
	console.log(resultado);
}

console.time("Performance");
combinaciones();
console.timeEnd("Performance");
console.log("Complejidad computacional: O(n^2) porque se recorre al cuadrado el array");