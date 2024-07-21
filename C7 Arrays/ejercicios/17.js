function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  suma=0
  arrayOfNums.forEach(element => {
    suma=element+suma
  });
  return suma
}

module.exports = agregarNumeros;
