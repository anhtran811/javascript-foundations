// function createDragon(name, rider, temperament) {
//   return {
//     name: name,
//     rider: rider,
//     temperament: temperament,
//     timesEaten: 0,
//     hungry: true
//   };
// }

// arrow function: 

const createDragon = (name, rider, temperament) => (
    { 
      name, 
      rider, 
      temperament, 
      timesEaten: 0, 
      hungry: true 
    }
  )

// function greetRider(dragon) {
//   return `Hi, ${dragon.rider}!`
// }

// arrow function

const greetRider = (dragon) => {
  return `Hi, ${dragon.rider}!`
}
  
// function eat(dragon) {
//   const newDragon = { ...dragon }
//   newDragon.timesEaten++
//   newDragon.hungry = newDragon.timesEaten < 3
//   return newDragon
// }

// arrow function

const eat = (dragon) => {
  const newDragon = { ...dragon }
  newDragon.timesEaten++
  newDragon.hungry = newDragon.timesEaten < 3
  return newDragon
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}