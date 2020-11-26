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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!(sentence[i] in results)) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// console.log(letterPositions("helloo"));

let countArrayTest = letterPositions("hello");

// console.log(assertEqual(countArrayTest["h"], [0]));

assertArraysEqual(countArrayTest["h"], [0]);
assertArraysEqual(countArrayTest["e"], [1]);
assertArraysEqual(countArrayTest["l"], [2, 3]);
assertArraysEqual(countArrayTest["o"], [4]);

assertArraysEqual(letterPositions("hello").e, [1]);
