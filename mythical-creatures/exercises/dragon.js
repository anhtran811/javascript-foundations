function createDragon(name, rider, temperament) {
  return {
    name: name,
    rider: rider,
    temperament: temperament,
  };
}

// arrow function: 

// const createDragon = (name, rider, temperament) => (
//     { name, rider, temperament }
//   )

// function greetRider(dragon) {
//   return `Hi, ${dragon.rider}!`
// }

// arrow function

const greetRider = (dragon) => {
  return `Hi, ${dragon.rider}!`
}
  

module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}