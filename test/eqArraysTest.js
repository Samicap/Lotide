const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), true);
assertEqual(eqArrays([1, 3, 4], [5, 6, 7]), false);