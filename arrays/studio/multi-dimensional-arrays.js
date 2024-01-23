const readlineSync = require("readline-sync");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
// Splitting the strings into arrays and sorting them
let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

// Logging the sorted arrays
console.log("Food Cabinet:", foodCabinet);
console.log("Equipment Cabinet:", equipmentCabinet);
console.log("Pets Cabinet:", petsCabinet);
console.log("Sleep Aids Cabinet:", sleepAidsCabinet);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log("Cargo Hold:", cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const cabinetNumber = readlineSync.questionInt(
  "Please select a cabinet number (0-3): "
);
console.log("You selected cabinet number:", cabinetNumber);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetNumber >= 0 && cabinetNumber < cargoHold.length) {
  let selectedCabinetContents = cargoHold[cabinetNumber];
  console.log(
    `Contents of cabinet ${cabinetNumber}: ${selectedCabinetContents.join(
      ", "
    )}`
  );
} else {
  console.log("Invalid cabinet number. Please enter a number between 0 and 3.");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (cabinetNumber >= 0 && cabinetNumber < cargoHold.length) {
  // Query the user for an item
  const item = readlineSync.question(
    "Enter the name of the item you are looking for: "
  );
  // Check if the item is in the selected cabinet
  if (cargoHold[cabinetNumber].includes(item)) {
    console.log(`Cabinet ${cabinetNumber} DOES contain ${item}.`);
  } else {
    console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${item}.`);
  }
} else {
  console.log("Invalid cabinet number. Please enter a number between 0 and 3.");
}
