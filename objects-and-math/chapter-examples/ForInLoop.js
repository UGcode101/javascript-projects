let tortoiseOne = {
  species: "Galapagos Tortoise",
  name: "Pete",
  weight: 919,
  age: 85,
  diet: ["pumpkins", "lettuce", "cabbage"],
};
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
for (let key in tortoiseOne) {
  console.log(tortoiseOne[key]);
}
