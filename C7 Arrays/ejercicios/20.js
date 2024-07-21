function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
 var nuevo=[]
  var igual=array[0]
for(var i=0;i<=array.length;i++){
if(igual==array[i])
  nuevo.push(array[i])
}
if(nuevo.length===array.length)
  return true
else return false
}
module.exports = todosIguales;
