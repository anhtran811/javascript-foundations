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
  

module.exports = {
  createDragon, 
  // greetRider, 
  // eat, 
  // findFireBreathers
}