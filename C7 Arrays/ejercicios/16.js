function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var newarr=array.map((x,i)=>x*i)
  return newarr
}

module.exports = multiplicarElementosPorIndice;
