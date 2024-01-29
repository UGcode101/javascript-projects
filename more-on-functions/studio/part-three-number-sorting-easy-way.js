//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

arrayName = [nums1, nums2, nums3];

//Sort each array in ascending order.
arrayName.forEach((arr) => arr.sort((a, b) => a - b));
console.log(arrayName);

//Sort each array in decending order.
arrayName.forEach((arr) => arr.sort((a, b) => b - a));
console.log(arrayName);
