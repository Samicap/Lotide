const assertArraysEqual = function(actual, expected) {
  if (arrayEquals(actual, expected)) {
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let arrayEquals = function(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 3, 4], [5, 6, 7]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
