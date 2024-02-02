// Code your selectRandomEntry function here:
function selectRandomEntry(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Code your buildCrewArray function here:
// Here are the candidates and the 'animals' array:
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];
let idNumbers = [291, 414, 503, 599, 796, 890];
let crew = [];

function luckyCandidateSelection(idNumbers, candidates) {
  let selectedCandidates = [];

  while (selectedCandidates.length < 3) {
    let candidate = selectRandomEntry(candidates);
    if (
      idNumbers.includes(candidate.astronautID) &&
      !selectedCandidates.includes(candidate)
    ) {
      selectedCandidates.push(candidate);
    }
  }

  let names = selectedCandidates.map((animal) => animal.name);
  let message = `${names.slice(0, -1).join(", ")}, and ${names.slice(
    -1
  )} are going to space!`;
  console.log(message);
  return selectedCandidates;
}

let selectedCrew = luckyCandidateSelection(idNumbers, animals);
// Code your template literal and console.log statements:
