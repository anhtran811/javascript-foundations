// function createDragon(name, rider) {
//   return {
//     name: name,
//     rider: rider,
//   };
// }

// arrow function: 

const createDragon = (name, rider) => (
    { name, rider }
  )
  

module.exports = {
  createDragon, 
  // greetRider, 
  // eat, 
  // findFireBreathers
}