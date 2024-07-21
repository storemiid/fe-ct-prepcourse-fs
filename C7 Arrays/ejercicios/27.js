function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var strind=""
  palabras.forEach(element => {
    strind+=element+" "
    
  });
 strind=strind.substring(0,strind.length-1)
return strind
}

module.exports = dePalabrasAFrase;
