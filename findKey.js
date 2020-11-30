// It should scan the object and return the first key for which the callback returns a truthy value.
//  If no key is found, then it should return undefined. 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])){
      return key;
    }
  }
  return undefined;
};

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)// => "noma"

let result1 = findKey({
  "balls": {stars: 3},
  "tennis": {stars: 7},
  "racket": {stars: 2},
  "lemur": {stars: 2}
}, x => x.stars === 2)

assertEqual(result, "noma");
assertEqual(result1, "racket");

