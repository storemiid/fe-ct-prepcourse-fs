function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var i=1
  


while (i<numero){
  
  i=i*2
  if(i==numero)return true

}
return false




}

module.exports = esPotenciaDeDos;
