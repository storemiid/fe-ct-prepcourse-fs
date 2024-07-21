function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
var arreglo=[2,5,13,56,12,13]
var arrmay=[]
var cont=0
  for(var i=0;i<=array.length;i++){
    if(array[i]>10)
    cont=cont+1 , arrmay.push(array[i])
    


  }
return array,cont
}

module.exports = contarElementosMayoresA10;
