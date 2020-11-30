const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


// const takeUntil = function(array, callback) {
//   let newArray = [];
//   // for (let i = 0; i < array.length; i++) { // Works!
//   //   if(array[i] > 0) {
//   //     newArray = array.slice(0, array[i]);
//   //   }
//   for (let number of array) {
//     const shouldStopTaking = callback(number);
//     if (shouldStopTaking) { // Boolean
//       return newArray;
//     } else {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// };


// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// [ 1, 2, 5, 7, 2 ]
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let number of array) {  // if get elements of array
    const shouldStopTaking = callback(number);
    if (!shouldStopTaking) {
      newArray.push(number);
    } else {
      return newArray;
    }
  }
};

const results1 = takeUntil(data1, x => x > 5);
console.log(results1);