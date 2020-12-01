const assertEqual = require('../assertEqual');

const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 3, 4], [5, 6, 7]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);