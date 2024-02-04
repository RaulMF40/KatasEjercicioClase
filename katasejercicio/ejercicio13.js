// EJERCICIO 13. Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
/* const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  // insert code
} */

//! SOLUCION.
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(array, element) {
  const index = array.indexOf(element)
  return index !== -1 ? { found: true, index } : { found: false }
}

// Aqui buscamos segun nombre de personajes de marvel para ver si estan en el array y en que posición o no.
console.log(finderName(nameFinder, 'Logan'))
console.log(finderName(nameFinder, 'Thor Odinson'))
