function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var cla=str1.toLowerCase().split("")
   var cle=str2.toLowerCase().split("")
  
   var net=[]


   for(var i=0; i<cla.length;i++){
      var t=cle.includes(cla[i])
      if(t==true && cle.length==cla.length)
         net.push(cla[i]   )
      else return false 
    
   }

if(net.length==cla.length)
   return true 



   /*
   if(cla.length==cle.length)
      for(var i=0;i<=cle.length;i++){
   for(var j=0;j<cle.length;j++){

   if( cle[i]===cla[j])
      net.push(cle[i])
   }
  
   }
   var ter=net.join('')
console.log(ter)
   if(net.length==cle.length)
return true 
else return false 


*/
}
esAnagrama('hola Mundo', 'mundo Hola')
module.exports = esAnagrama;

