function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
var arr2=[]
  for(var i=0;i<numeros.length;i++){
    if(!arr2.includes(numeros[i]))
    arr2.push(numeros[i])
  else return numeros[i]

  
  }


}

module.exports = encontrarElementoRepetido;