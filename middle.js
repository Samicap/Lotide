
const assertArraysEqual = require('./assertArraysEqual'); // doesnt do anything

const middle = function(findTheMiddle) {
  let output = [];
  if (!Array.isArray) {
    return [];
  } else if (findTheMiddle.length > 2) {
    let middleElements = Math.floor(findTheMiddle.length / 2);
    if (findTheMiddle.length % 2 === 0) {
      output.push(findTheMiddle[middleElements - 1], findTheMiddle[middleElements])
    } else {
      output.push(findTheMiddle[middleElements])
    }
  }
  return output;
  };

  module.exports = middle;

//i need to find the middle element of an array

  //do not return an element if the array only has one, or two elements, return empty array
  //if the array has an odd number of elements retunr the one in the middle
  //the the array has an even number of elements return 2 middle elements
 


// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]
