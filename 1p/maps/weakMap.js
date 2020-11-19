/*
Autor: Cortés Comparán Daniel
Fecha: 11 de noviembre del 2020
Estado: Completo
*/

//El objeto Map almacena cualquier tipo de valor 
//(objetos y valores primitivos)
//Los WeakMap solo son del tipo Objeto

let map = new Map(),
    weakMap = new WeakMap(),
    number = 10,
    // undefined,
    object = {color: "rojo",
                tipo: "fruta",
                nombre: "manzana"};
console.log("1.- El objeto Map almacena cualquier tipo de valor, los weakMap solo son del tipo objeto");
map.set("Tipo string");
map.set(number);
// map.set(undefined);
map.set(true);
map.set(object);

weakMap.set(object);

console.log(map);
console.log(weakMap);

//Map tiene más métodos que weakMap
console.log("\n2.- Map tiene más métodos que weakMap");
console.log(map.size);
//cosole.log(weakMap.size); i.e. No tiene el método size.