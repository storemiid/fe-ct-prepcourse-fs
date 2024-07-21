function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var i=-1
  var num=0
  ni=3

  var carl=[3,4,4,5,6,7,9,12]
  
 /* while(i<=secuencia.length){
 i++
  num=+secuencia[i]

  if(secuencia[i]%n==0)
   break
  return num
}*/
for(var i=0;i<=secuencia.length;i++){
  num=+secuencia[i]
  if(num%n==0)
    return num
}
return undefined

  

}

module.exports = encontrarPrimerMultiploDeN;