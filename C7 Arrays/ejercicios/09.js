function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
  
   var  goe=array[Math.floor(Math.random() * array.length)]
   return   goe
}

module.exports = obtenerElementoAleatorio;
