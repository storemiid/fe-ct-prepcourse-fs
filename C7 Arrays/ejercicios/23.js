function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de 
  //iteraciones coinciden, debe interrumpirse la ejecución y retornar
  // el string: "Se interrumpió la ejecución".
  // Tu código:
 /* var areh=[]
  i=0
  do{
i=+2
areh[i]=num+i
if(num==areh[i])
  return  "Se interrumpió la ejecución"

  }while(i<=10)
console.log( areh)
*/
 var areh=[]
 for(var i=0;i<10;i++){
  num=num+2
areh[i]=+num
if(i==num)
  return "Se interrumpió la ejecución"
 }
return areh
}

module.exports = breakStatement;
