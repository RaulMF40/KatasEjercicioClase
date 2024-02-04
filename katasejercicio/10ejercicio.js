// Ejercicio 10 Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
/* const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
} */

//! SOLUCION.
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numbers) {
  let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum / numbers.length
}

console.log(average(numbers))
