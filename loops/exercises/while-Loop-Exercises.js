//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel = 100;
let numberOfAstronauts = 5;
let altitudeReached = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

while (
  startingFuelLevel <= 0 ||
  startingFuelLevel < 5000 ||
  startingFuelLevel >= 30000 ||
  !Number.isInteger(startingFuelLevel)
) {
  startingFuelLevel = parseInt(
    prompt("Enter the starting fuel level (between 5000 and 30000, inclusive):")
  );
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (
  numberOfAstronauts <= 0 ||
  numberOfAstronauts > 7 ||
  !Number.isInteger(numberOfAstronauts)
) {
  numberOfAstronauts = parseInt(
    prompt("Enter the number of astronauts (up to 7):")
  );
}

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let fuelLevel = startingFuelLevel;
let currentAltitude = altitudeReached;

while (fuelLevel > 0 && currentAltitude < 300) {
  fuelLevel -= numberOfAstronauts * 100;
  currentAltitude += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

if (currentAltitude >= 2000) {
  console.log(`The shuttle gained an altitude of ${currentAltitude} km.`);
  console.log("Orbit achieved!");
} else {
  console.log(`The shuttle gained an altitude of ${currentAltitude} km.`);
  console.log("Failed to reach orbit.");
}
