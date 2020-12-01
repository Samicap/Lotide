## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @samicap/lotide`

**Require it:**

`const _ = require('@samicap/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: This function takes in an array and returns the first element of that array.
* `tail(array)`: This function takes an array and returns the elements minus the first element.
* `middle(findTheMiddle)`: This function takes in an array and finds the middle element of that array.
* `assertEqual(actual, expected)`: This function takes in two parameters, the given argument and the expected out put.  It is used to determine if the arguments are equal.
* `eqArrays(a, b)`: This function takes in two array parameters and determines if they are equal.
* `assertArraysEqual(actual, expected)`: This function takes in two array arguments and outputs true if they are equal or false if not.

