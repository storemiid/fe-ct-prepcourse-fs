function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
 /* switch (num){
    case num%3==0:
      return "fizz"
    case num%5==0:
      return "buzz"
    case num%3==0 && num%5==0:
        return "fizzbuzz"
    
    default :return false

  */
    if(num%3==0 && num%5==0)  return "fizzbuzz"
 if( num%3==0)   return "fizz"
 if(num%5==0)       return "buzz"
 if(num%3==0 && num%5==0)  return "fizzbuzz"
 else return false

}

module.exports = fizzBuzz;
