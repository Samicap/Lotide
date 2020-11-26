const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);

  }
};

const findKeyByValue = function(myObject, value) {
  let newArrayOfKeys = Object.keys(myObject);
  //loop through object
  for (const key of newArrayOfKeys) {
    //if key value matches given value, return key
    if (myObject[key] === value) {
      return key;
    }
  }
  //if no key value matches value => return undefined.
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const worstMoviesGenre = {
  sciFi: "Avatar",
  comedy: "Mean Girls",
  drama:  "Schindler's List"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(worstMoviesGenre, "Schindler's List"), "drama");