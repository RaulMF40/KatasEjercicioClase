// EJERCICIO 22 - Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

//! SOLUCION
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    // Busca una fruta que no esté ya en foodSchedule y la inserta en su lugar
    for (const fruit of fruits) {
      if (!foodSchedule.some((food) => food.name === fruit)) {
        foodSchedule.splice(i, 1, { name: fruit, isVegan: true })
        break // Salimos del bucle una vez que se haya reemplazado la comida no vegana
      }
    }
  }
}

console.log(foodSchedule)
