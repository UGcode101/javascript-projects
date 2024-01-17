let holdCabinet1 = ["duct tape", "gum", 3.14, false, 6.022e23];
let holdCabinet2 = ["orange drink", "nerf toys", "camera", 42, "parsnip"];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
let concatResult = holdCabinet1.concat(holdCabinet2);
console.log("Concatenated Result:", concatResult);
console.log("holdCabinet1 after concat:", holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
let sliceResult1 = holdCabinet1.slice(1, 3);
let sliceResult2 = holdCabinet2.slice(2, 4);
console.log("Slice Result from holdCabinet1:", sliceResult1);
console.log("Slice Result from holdCabinet2:", sliceResult2);
console.log("holdCabinet1 after slice:", holdCabinet1);
console.log("holdCabinet2 after slice:", holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
holdCabinet2.sort();
console.log("holdCabinet1 after reverse:", holdCabinet1);
console.log("holdCabinet2 after sort:", holdCabinet2);
//reverse, reverses the order. sort, sort, sorts the order of the array in assending order
//they both alter the original array
