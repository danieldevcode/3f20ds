/*
Autor: Cortés Comparán Daniel
Fecha: 10 de noviembre del 2020
Estado: Completo
*/

let set = new Set(),
    weakSet = new WeakSet(),
    number = 5,
    object = {
        hello: "hello!"
    };

//1.- Los set almacenan valores únicos de cualquier tipo, los WeakSet
//solo almacenan referencias de objetos.

console.log("1- Los set almacenan valores únicos de cualquier tipo, los weakSet solo almacenan objetos debilmente");

set.add("Hola");
set.add(number);
set.add(object);
set.add(true);
console.log(set);

weakSet.add(object);
console.log(weakSet)

//2.- Los Set tienen más métodos que los WeakSet
console.log("\n2.- Los Set tienen más métodos que los WeakSet");
console.log(set.size);
console.log(weakSet.size);