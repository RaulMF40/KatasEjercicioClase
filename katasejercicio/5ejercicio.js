const number1 = 10
const number2 = 20
const number3 = 2

// ejemplo
if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10')
}

//* El ejercicio es completar la condicion correspondiente que esta dentro de if, fijandonos en lo que pone el console.log de cada uno. tambien haremos una prueba si es true o false de cada uno.

//? EJERCICIO 1-------------------------
/* if ( COMPLETAR) {
  console.log("number2 dividido entre number1 es igual a 2");
} */

//! SOLUCION 1-------------------.
if (number2 / number1 == 2) {
  console.log(number2 / number1 == 2)
  console.log('number2 dividido entre number1 es igual a 2')
}

//? EJERCICIO 2--------------------------
/* if (COMPLETAR) {
  console.log("number1 es estrictamente distinto a number2");
} */

//! SOLUCION 2-----------------
if (number1 !== number2) {
  console.log(number1 !== number2)
  console.log('number1 es estrictamente distinto a number2')
}

//? EJERCICIO 3 ----------------------
/* if ( COMPLETAR) {
  console.log("number3 es distinto number1");
} */

//! SOLUCION 3 ---------------------------
if (number3 != number1) {
  console.log(number2 != number1)
  console.log('number3 es distinto number1')
}

//? EJERCICIO 4---------------------------
/* if ( COMPLETAR ) {
  console.log("number3 por 5 es igual a number1");
} */

//! SOLUCION 4-----------------------
if (number3 * 5 === number1) {
  console.log(number3 * 5 === number1)
  console.log('number3 por 5 es igual a number1')
}

//? EJERCICIO 5 ------------------------------
/* if (COMPLETAR ) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
} */

//!SOLUCION 5--------------------------------------
if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(number3 * 5 == number1 && number1 * 2 == number2)
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  )
}

//? EJERCICIO 6 ------------------------------------------
/* if ( COMPLETAR ) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
} */

//! SOLUCION 6
if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(number2 / 2 == number1 || number1 / 5 == number3)
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  )
}
