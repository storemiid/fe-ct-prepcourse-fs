function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var uy=[]
array.forEach(element => {
    if(element%2==0)
      uy.push(element)
  });
  return uy

}

module.exports = filtrarNumerosPares;
