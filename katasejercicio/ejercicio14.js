// EJERCICIO 14. Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
/* const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // insert code
} */

//! SOLUCION.
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(words) {
  const wordCount = {}

  // Recorre el array de palabras, utilizamos un foreach y funcion flecha
  words.forEach((word) => {
    // Si la palabra ya está en el objeto, incrementa su contador
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      // Si la palabra no está en el objeto, inicializa su contador en 1
      wordCount[word] = 1
    }
  })

  return wordCount
}

console.log(repeatCounter(counterWords))
