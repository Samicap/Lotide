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


const words = ["rabbit", "bunny", "dog", "dragon", "cat", "bird"];
const apples = ['pink', 'red', 'green'];
const dogs = ['big', 'dark', 'small'];


// words.map((words) => words[1]);

const map = function(array, callback){
  const results = [];
  for (let item of array) {
  results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(apples, word => word[0]);
const dogs2 = map(dogs, word => word[0]);

assertArraysEqual(results1, ['r', 'b', 'd', 'd', 'c', 'b']);
assertArraysEqual(results2, ['p', 'r', 'g']);
assertArraysEqual(dogs2, ['b', 'd', 's']);


