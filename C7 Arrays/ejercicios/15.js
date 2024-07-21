function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  

may=array[0]
var pos=0
 for(var i=0;i<=array.length;i++){
    if(array[i]>may)
      may=array[i], pos=i
    
   
  }
  return pos
  

}

module.exports = encontrarIndiceMayor;
