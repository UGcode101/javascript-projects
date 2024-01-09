// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:
let engineIndicatorLight = "green blinking";
let spaceSuitOn = true;
let shuttleCabinReady = true;
let commandOveride = true;
let crewStatus = spaceSuitOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 21000;
let engineTemperature = 12000;
if (engineIndicatorLight === "green") {
  console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
  console.log("engines are preparing to start");
} else {
  console.log("engines are off");
}
if (crewStatus) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}
if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!");
}
if (shuttleSpeed >= 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed <= 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable Speed.");
}
if (crewStatus && computerStatusCode === 200 && spaceSuitOn) {
  console.log("all systems go");
} else {
  console.log("WARNING. Not ready");
}
if (
  fuelLevel < 1000 ||
  engineTemperature > 3500 ||
  engineIndicatorLight === "red blinking"
) {
  console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
} else {
  console.log("Fuel and engine status pending...");
}
if (
  (fuelLevel > 20000 && engineIndicatorLight !== "red blinking") ||
  commandOveride === true
) {
  console.log("Cleared to launch!");
} else console.log("Launch Scrubbed!");

// checking my solution
if (
  fuelLevel < 1000 ||
  engineTemperature > 3500 ||
  engineIndicatorLight === "red blinking"
) {
  console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
} else {
  console.log("Fuel and engine status pending...");
}
