//example 1 makeLine(size)
function makeLine(size) {
  let line = "";
  for (let i = 0; i < size; i++) {
    line += "#";
  }
  return line;
}

//example 2 makeSquare(size)
function makeSquare(size) {
  let square = "";
  for (let i = 0; i < size; i++) {
    square += makeLine(size);
    if (i < size - 1) {
      square += "\n";
    }
  }
  return square;
}

//example 3 makeRectangle(width, height)
function makeRectangle(width, height) {
  let rectangle = "";
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width);
    if (i < height - 1) {
      rectangle += "\n";
    }
  }
  return rectangle;
}

//example 4 makeDownwardStairs(height)
function makeDownwardStairs(height) {
  let stairs = "";
  for (let i = 0; i < height; i++) {
    stairs += makeLine(i + 1) + "\n";
  }
  return stairs.slice(0, -1);
}

//example 5 makeSpaceLine(numSpaces, numChars)
function makeSpaceLine(numSpaces, numChars) {
  let spaces = " ".repeat(numSpaces);
  let chars = "#".repeat(numChars);
  return spaces + chars + spaces;
}

//example 6 makeIsoscelesTriangle(height)
function makeIsoscelesTriangle(height) {
  let triangle = "";
  for (let i = 0; i < height; i++) {
    triangle += makeSpaceLine(height - i - 1, 2 * i + 1) + "\n";
  }
  return triangle.slice(0, -1);
}
//example 7 makeDiamond(height)
function makeDiamond(height) {
  let diamond = makeIsoscelesTriangle(height);
  for (let i = height - 2; i >= 0; i--) {
    diamond += makeSpaceLine(height - i - 1, 2 * i + 1) + "\n";
  }
  return diamond;
}

console.log("makeLine(5)");
console.log(makeLine(5));
console.log("\n");
console.log("makeSquare(5)");
console.log(makeSquare(5));
console.log("\n");
console.log("makeRectangle(5,3)");
console.log(makeRectangle(5, 3));
console.log("\n");
console.log("makeDownwardStairs(5)");
console.log(makeDownwardStairs(5));
console.log("\n");
console.log("makeSpaceline(3, 5)");
console.log(makeSpaceLine(3, 5));
console.log("\n");
console.log("makeIsoscelesTriangle(5)");
console.log(makeIsoscelesTriangle(5));
console.log("\n");
console.log("makeDiamond(5)");
console.log(makeDiamond(5));
