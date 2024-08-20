function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var newarr=[]
   for(var i=0;i<arrayOfStrings.length;i++){
      if(arrayOfStrings[i][0]==='a')
         newarr.push(arrayOfStrings[i])
   }
   return newarr
}
filter(['ana','casa','arbol','anastacio','gasa'])

module.exports = filter;
