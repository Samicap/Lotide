// let ld = require('lodash')

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

const anotherWithout = function(source, itemsToRemove) {
  // create an emtpy array
  let output = [];
  //iterate over source array
  for (const element of source) {
    //add the elements that are not in the itemsTORemove array
          //check if element is not part of itemsToRemove 
    if (!itemsToRemove.includes(element)) {
      output.push(element)
    }   
          //if true add to empty array
    
  }
  //return the new array
  return output;
};

// the following without function works but is terrible.
// const without = function(source, itemsToRemove) {
//   let sharedItems = [];
  
//   for (let i = 0; i < itemsToRemove.length; i++) {
//     for (let j = 0; j < source.length; j++) {
//       if(itemsToRemove[i] === source[j]) {
//         sharedItems.push(source[j]);
//       }
//     }
//   }

//   // remove items in shareItems from source
//   let keptItems = [];
//   for (let i = 0; i < source.length; i++){
//     for (let j = 0; j < sharedItems.length; j++){
//       if (source[i] !== sharedItems[j]){
//         keptItems.push(source[i])
//       }
//     }
//   }

//   return keptItems;
// };


console.log(anotherWithout([1, 2, 3], [1])) // => [2, 3]
console.log(anotherWithout(["one's", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
