// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'] //* longitud 3
//* posiciones:      0          1               2
//! solucion 1.1
console.log(avengers[0])

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

//! solucion 1.2
avengers1.splice(0, 1, 'IRONMAN')
console.log(avengers1)

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers2 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

//! solucion 1.3
console.log(avengers2.length)

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']

//! solucion 1.4
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters)
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

//! solucion 1.5
const lastElementRemoved = rickAndMortyCharacters1.pop(5)
console.log(rickAndMortyCharacters1)

console.log(
  `Primer personaje: ${rickAndMortyCharacters1[0]}, y Último personaje: ${
    rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1]
  }`
)

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
//! solucion 1.6
rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2)
