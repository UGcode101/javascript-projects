const { normalize } = require("path");
const input = require("readline-sync");
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3).concat(str.slice(0,3));
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original string: ${str} is modified as ${newStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numToMove = input.question("Enter the number of letters to relocate: ");
noOfLetters = Number(noOfLetters)
let modifiedStr = str.slice(3) + str.slice(0.3);
console.log (`Original string ${str}) is modified as ${modifiedStr}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (noOfLetters > str.length) {
    modifiedStr = str.slice(3) = str.slice(0.3)
    console.log(`Original Word ${str} is modified as ${modifiedStr}.`)
    console.log(`You asked ${noOfLetters} letters to be moved which is longer than the word's length ${str.length}, we moved 3 letters`); 
} else {
    modifiedStr = str.slice(noOfLetters) + str.slice (0, noOfLetters);
    console.log(`Original Word ${str} is modified as ${modifiedStr}.`)
}
