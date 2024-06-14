function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

var may=a
var men=b
if(a<b)
may=b
if(a<b)
 men=a
var mult=1

var arr=[]
if(men<0)
return 0
  for(var i=men;i<=may;i++){
arr[i]=men++
mult=arr[i]*mult


    }
  return mult

}

module.exports = productoEntreNúmeros;