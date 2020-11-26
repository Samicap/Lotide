const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

const eqObjects = function(object1, object2) {
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  // They have the same number of keys
  if (objectOneKeys.length !== objectTwoKeys.length) {
  }
  // The value for each key in one object is the same as the value for that same key in the other object
  for (const keys of objectOneKeys) {
    if (!object1[keys] === object2[keys]) {
      // As soon as there is not a match, we can return false
      return false 
    }
    // check if the key valus is an array and use eqArrays to check equality
    // if(Array.isArray(keyOne)) {
    //       eqArrays(object[keyOne], objectB[keyOne])
        }
  return true;
  }
// }


// let found = 0
  // if (found == objectOneKeys.length){
  //   return true
  // }else {
  //   return false
  // }
// }

// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/  //ERM YEAH.......GOT IT TILL THAT LAST FUNCTION
// for (const keyOne of objectOneKeys) {
//   const val1 = object1[keyOne];
//   const val2 = object2[keyOne];
//   const areObjects = isObject(val1) && isObject(val2);
//   if (areObjects && !deepEqual(val1, val2) ||
//     !areObjects && val1 !== val2) {
//       return false;
//     }
// return true
// } 

// function isObject(object) {
//   return object != null && typeof object === 'object';
// }
// }




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const abcd = {a: "1", b: "7"};
console.log(eqObjects(ab, abcd)); // => false




// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), true);
