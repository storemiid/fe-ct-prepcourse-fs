/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {

  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].

  // Tu código:
  

return Object.entries(objeto)

}
deObjetoAarray({D: 1, B: 2, C: 3})
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde
  // cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  /*
  var ord=string.split("")

  ord.sort()
  console.log(ord)
  var obj={}
  var contad=0
var areg=[]
 
for(var i=0;i<ord.length;i++){
for(var j=0;j<ord.length;j++){
if(ord[i]==ord[j] )
  

if(ord[i]!=areg[areg.length-1])
  areg.push(ord[i]) 


}
 console.log(contad)
obj[areg[i]]=contad
  
}
console.log(obj)
console.log(areg)

*/
var ord=string.split("")

ord.sort()
var obje={}
ord.forEach((value) => {
  obje[value] = (obje[value] || 0) + 1;
});
return obje

}
numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var fai=[]
  var fai2=[]
  var cont=0
  var text=string.split('')
  console.log(text)
  text.forEach((element,i )=> {
if(element===element.toLowerCase())
 fai.push(element)
if(element===element.toUpperCase())
  fai2.push(element)



  });
var num=fai2.concat(fai)
 return num.join('')
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"

  var arr=[]
  var vra= frase.split(' ')
 for(var i=0;i<vra.length;i++){

  arr.push(vra[i].split('').reverse().join(''))

 }
 

    return arr.join(' ')

}asAmirror('The Henry Challenge is close!')


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
var car=numero.toString()
var gol=car.split('').reverse().join('')

if(gol===car)
return "Es capicua"
else return "No es capicua"

}capicua(1234)

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let vail=[]
  let mui=[]
  vail=string.split("")
  console.log(vail)
mui=vail.filter((a)=>a !== 'a' && a !=='b'&& a !=='c')
    
return mui.join("")
}
deleteAbc("cabeza")

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras 
  //ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
 // Tu código:
 var blur=[]
blur=arrayOfStrings.sort((a,b)=>a.length-b.length)

return blur
  }


sortArray(["You", "are", "beautiful", "looking"] )

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden
  // los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var gal=array2
  var cool=array1
var hue=[]
  if(array1.length<array2.length)
gal=array1 , cool=array2

  
for(let i=0;i<gal.length;i++){
  for(let j=0;j<cool.length;j++){
if(gal[i]==cool[j]&& cool[j]!=hue[i])
hue.push(gal[i]) 
}
}
return  hue
}
buscoInterseccion([4,2,3,4] , [1,3,4] )

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
