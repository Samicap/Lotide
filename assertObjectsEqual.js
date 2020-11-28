let eqArrays = function(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length === objectTwoKeys.length) {
    for (const keys of objectOneKeys) {
      if (object1[keys].isArray) {
        if (eqArrays(object1[keys], object2[keys])) {
          return false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚 Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`💔 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let object1 = {a: 1, b: 2};
let object2 = {a: 1, b: 2};
let object3 = {a: 1, b: 3};
assertObjectsEqual(object1, object2); // True
assertObjectsEqual(object1, object3); // False





