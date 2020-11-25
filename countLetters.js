

const assertEqual = function(actual, expected) {
  //JSON.stringify() works if the keys and values are in the same order.
  //update this when we get the equalObject function.
  // let actualString = JSON.stringify(actual);
  // let expectedString = JSON.stringify(expected);
  // console.log("actual", actual, "actualString", actualString);
  // console.log("excpected", expected, "expectedString", expectedString);
  if (actual === expected) {
    
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  let count = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!(sentence[i] in count)) {
        count[sentence[i]] = 1;
      } else {
        count[sentence[i]] += 1;
      }
    }
  }
  return count;
};

// console.log(countLetters("piesi"));
// console.log({"p": 1, "i": 2, "e": 1, "s": 1 });
let test1Res = countLetters("piesi");

assertEqual(test1Res["i"], 2);
assertEqual(test1Res["p"], 1);
assertEqual(test1Res["e"], 1);
assertEqual(test1Res["s"], 1);

// assertEqual((countLetters("piesi")), {"p": 1,  "e": 1,"i": 2, "s": 1 }); //FAILS is JSON.stringify() because the order is not the same.
//assert.deepEqual(countLetters("piesi"), {"p": 1, "i": 2, "e": 1, "s": 1 })