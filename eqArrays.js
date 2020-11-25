const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);

  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

let arrayEquals = function(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

assertEqual(arrayEquals([1, 2, 3], [1, 2, 3, 4]), true);
assertEqual(arrayEquals([1, 3, 4], [5, 6, 7]), false);

//another way to check if arrays are equal, however this JSON doesnt work for objects. So JSON works for these small test cases but isn't good for the real word.
//JSON only checks primitive data types. It wont check for "deeper values" like those in objects.

// let eqArrays = function(array1, array2) {
//   if (JSON.stringify(array1) === JSON.stringify(array2)) {
//     return true;
//   } else {
//     return false;
//   }
// };

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);