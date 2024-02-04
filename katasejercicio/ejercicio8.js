// Ejercicio 8 - Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:
/* const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
} */

//! solucion
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(words) {
  let longest = words[0]

  for (const word of words) {
    if (
      word.length > longest.length ||
      (word.length === longest.length &&
        words.indexOf(word) < words.indexOf(longest))
    ) {
      longest = word
    }
  }
  return longest
}

console.log(findLongestWord(avengers))
