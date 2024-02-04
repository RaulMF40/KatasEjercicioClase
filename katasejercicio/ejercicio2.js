// 1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.
const character = { name: 'Jack Sparrow', age: 10 }

//! solucion 1.1:
character.age = 25
console.log(character)

// 1.2 Declara 3 variables con los nombres y valores siguientes
/*firstName = 'Jon';
lastName = 'Snow';
age = 24; */
// Muestralos por consola de esta forma:
;('Soy Jon Snow, tengo 24 años y me gustan los lobos.')

//! solucion 1.2
let firstName = 'Jon'
let lastName = 'Snow'
let age = 24
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

// 1.3 Dado el siguiente código, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }

//! solucion 1.3
const total = toy1.price + toy2.price
console.log(`La suma del precio de los dos juguetes es: ${total}`)

// 1.4 Dado el siguiente código, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }

//!solucion 1.4
globalBasePrice = 25000
car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice
console.log(`Coche ${car1.name}: Precio final: ${car1.finalPrice}`)
console.log(`Coche ${car2.name}: Precio final: ${car2.finalPrice}`)
