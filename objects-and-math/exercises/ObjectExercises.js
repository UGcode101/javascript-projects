let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 2,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 3,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let goodDog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 4,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

let waterBear = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  astronautID: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
};

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, goodDog, waterBear];

// Print out the relevant information about each animal.
let crewReports = function (crew) {
  let reports = [];

  for (let i = 0; i < crew.length; i++) {
    let animal = crew[i];
    let report = `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
    reports.push(report);
  }
  return reports;
};

let crewReportsArray = crewReports(crew);

for (let i = 0; i < crewReportsArray.length; i++) {
  console.log(crewReportsArray[i]);
}

// Start an animal race!
function fitnessTest(animal) {
  let results = [],
    numSteps,
    turns;
  for (let i = 0; i < animal.length; i++) {
    numSteps = 0;
    turns = 0;
    while (numSteps < 20) {
      numSteps += animal[i].move();
      turns++;
    }
    results.push(`${animal[i].name} took ${turns} turns to take 20 steps.`);
  }
  return results;
}
let fitnessTestResults = fitnessTest(crew);
for (let i = 0; i < fitnessTestResults.length; i++) {
  console.log(fitnessTestResults[i]);
}
