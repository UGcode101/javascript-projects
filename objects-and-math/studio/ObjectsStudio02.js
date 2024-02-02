// Candidate data & crew array.
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

let crew = [candidateA, candidateC, candidateE];
const numOrbits = 5;

// Code your orbitCircumference function here:
const calculateOrbitCircumference = (radius) => {
  const circumference = 2 * Math.PI * radius;
  return Math.round(circumference);
};

// Code your missionDuration function here:
const missionDuration = (
  numOrbits,
  orbitRadius = 2000,
  orbitalSpeed = 28000
) => {
  const orbitCircumference = calculateOrbitCircumference(orbitRadius);
  const distance = numOrbits * orbitCircumference;
  const timeInHours = distance / orbitalSpeed;
  const roundedTime = timeInHours.toFixed(2);
  return parseFloat(roundedTime);
};

function selectRandomEntry(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const oxygenExpended = (candidate, numOrbits, orbitRadius, orbitalSpeed) => {
  const spacewalkTime = missionDuration(numOrbits, orbitRadius, orbitalSpeed);
  const oxygenUsed = candidate.o2Used(spacewalkTime);
  return `${
    candidate.name
  } will perform the spacewalk, which will last ${spacewalkTime.toFixed(
    2
  )} hours and require ${oxygenUsed.toFixed(3)} kg of oxygen.`;
};

let orbitRadius = 2000;
let orbitalSpeed = 28000;
const selectedCandidate = selectRandomEntry(crew);
const spacewalkInfo = oxygenExpended(
  selectedCandidate,
  numOrbits,
  orbitRadius,
  orbitalSpeed
);

console.log(
  `The circumference of the orbit is approximately ${calculateOrbitCircumference(
    orbitRadius
  )} kilometers.`
);

const duration = missionDuration(numOrbits, orbitRadius, orbitalSpeed);
console.log(
  `The mission will travel ${
    calculateOrbitCircumference(orbitRadius) * numOrbits
  } km around the planet, and it will take ${duration} hours to complete.`
);

console.log(spacewalkInfo);
