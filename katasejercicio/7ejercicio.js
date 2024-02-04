// Ejercicio 7. Completa la función que tomando dos números como argumento devuelva el más alto.
/*function sum(numberOne , numberTwo) {
  // insert code
} */

//! solucion
function sum(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo)
}

//? Ejemplo de uso 1 le damos valores de 9 y 4:
console.log(sum(9, 4))
//? Ejemplo de uso 2 le damos valores de 5 y 10:
console.log(sum(5, 10))
