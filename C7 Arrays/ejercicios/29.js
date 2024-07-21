function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  var arr2=numeros[0]
  for(var i=0;i<numeros.length;i++){
    if(arr2===numeros[i])
      arr2=arr2+1
    else return arr2
  
  }
  return null
}

module.exports = encontrarNumeroFaltante;