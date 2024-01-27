const input = require("readline-sync");

function getValidInput(prompt, isValid) {
  let userInput = input.question(
    "Enter a string starting with 'a': ",
    isValidInput
  );
  while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
  }
}
return userInput;
function isValidInput(input) {
  return input.startsWith("a");
}
console.log("Valid input:", userInput);

// TODO 1: write a validator
// that ensures input starts with "a"
//changed the code above to answer the question

// TODO 2: write a validator
// that ensures input is a vowel
function getValidInput(prompt, isValid) {
  let userInput = input.question(prompt);

  while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
  }

  return userInput;
}
function isValidVowel(input) {
  return ["a", "e", "i", "o", "u"].includes(input.toLowerCase());
}
let userInput = getValidInput("Enter a vowel: ", isValidVowel);
console.log("Valid input:", userInput);

// Be sure to test your code!
