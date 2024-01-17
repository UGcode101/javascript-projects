let str = "In space, no one can hear you code.";
let arr = ["B", "n", "n", 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let splitResult = str.split(" ");
console.log("Split Result:", splitResult);

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joinResult = arr.join("-");
console.log("Join Result:", joinResult);

//3) Do split or join change the original string/array?

//they do not change the original string/array. They create new values leaving the original unchanged.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoArray = cargoHold.split(",");
cargoArray.sort();
let newCargoHold = cargoArray.join(",");
console.log("Alphabetized cargoHold:", newCargoHold);
