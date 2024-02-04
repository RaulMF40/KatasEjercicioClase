// EJERCICIO12. Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
//? pista (cuando eliminamos algo de un array, su longitud se verá afectada)
/* const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}*/

//! SOLUCION.
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(array) {
  // utilizamos el metodo set, asi almacenamos los elementos unicos que no se repiten, y crea un conjunto de elementos únicos a partir del array, y luego utilizamos el operador spread `...` donde convertimos este conjunto de nuevo en un array, y garantiza que solo se mantendrán los elementos unicos en el resultado final
  return [...new Set(array)]
}
console.log(removeDuplicates(duplicates)) // Resultado Final con los elementos unicos: ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']
