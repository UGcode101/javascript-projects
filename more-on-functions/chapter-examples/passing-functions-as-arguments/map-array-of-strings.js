let names = [
  "Chris",
  "Jim",
  "Sally",
  "Blake",
  "Paul",
  "John",
  "Courtney",
  "Carly",
];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (n) {
  return n.charAt(0);
});

console.log(firstInitials);
