function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var arre=[]
  
var arre=array.find((x)=>x.length>=5);

return arre
}

module.exports = obtenerPrimerStringLargo;
