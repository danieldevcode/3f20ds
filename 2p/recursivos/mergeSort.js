function mergeSort (arrayDesordenado) {
    // Array vacio o con un elemento
    if (arrayDesordenado.length <= 1) {
      return arrayDesordenado;
    }
    // Partir el array por la mitad
    const medio = Math.floor(arrayDesordenado.length / 2);
    const izquierda = arrayDesordenado.slice(0, medio);
    const derecha = arrayDesordenado.slice(medio);
  
    // Recursión para combinar la parte izquierda y la parte derecha
    return merge(
      mergeSort(izquierda), mergeSort(derecha)
    );
  }
  
  // fusión del array izquierdo y derecho
  function merge (izquierda, derecha) {
    let arrayResultante = [], indexIzquierdo = 0, indexDerecho = 0;
  
    // Concatenar valores en el array en orden
    while (indexIzquierdo < izquierda.length && indexDerecho < derecha.length) {
      if (izquierda[indexIzquierdo] < derecha[indexDerecho]) {
        arrayResultante.push(izquierda[indexIzquierdo]);
        indexIzquierdo++; // Mover el cursor del array a la izquierca
      } else {
        arrayResultante.push(derecha[indexDerecho]);
              indexDerecho++; // Mover el cursor del array a la derecha
      }
    }
  
    // Cocatenar el array resultante
    return arrayResultante
            .concat(izquierda.slice(indexIzquierdo))
            .concat(derecha.slice(indexDerecho));
  }

  console.log(mergeSort([5,10,48,15,12,4,1,0]));