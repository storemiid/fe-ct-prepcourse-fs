function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
 var suma=0
var prome=0
var indice=0
  resultadosTest.forEach((element) => {
    suma=element+suma ,indice++
    
  });
  return  prome =suma/indice
}

module.exports = promedioResultadosTest;
