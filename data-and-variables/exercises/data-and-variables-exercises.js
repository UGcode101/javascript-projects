// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKilometer = .621
console.log (typeof shuttleName)
console.log (typeof shuttleSpeedMph)
console.log (typeof distanceToMarsKm)
console.log (typeof distanceToMoonKm)
let milesToMars = distanceToMarsKm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
console.log (shuttleName + " will take " + daysToMars + " days to reach Mars.");
let milesToMoon = distanceToMoonKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log (shuttleName + " will take " + daysToMoon + " days to reach Moon.")