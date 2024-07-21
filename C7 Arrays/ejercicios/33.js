function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var maystr=Math.max(str1.length,str2.length,str3.length)
  console.log(maystr)
  var acum=''
 for(var i=0;i<maystr;i++){
 if(str1[i]!=undefined) acum=acum+str1[i]
 if(str2[i]!=undefined)acum=acum+str2[i]
 if(str3[i]!=undefined)acum=acum+str3[i]

 }
 return acum
}


module.exports = combine;