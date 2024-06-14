function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  arr=[x,y]
  var may=arr[0]
  for(var i=0;i<=arr.length;i++){
if(may<=arr[i])
may=arr[i]


  }
  return may 

}

module.exports = obtenerMayor;
