function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:var 
  arreglo=["a","e","i","o","u"]
  for(var i=0;i<=arreglo.length;i++){
    if(arreglo[i]==letra)
    return "Es vocal"
  }
  return "Dato incorrecto"
}

module.exports = esVocal;
