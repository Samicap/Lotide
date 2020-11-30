const assertEqual = require('../assertEqual');

const tail = require('../tail');


// tail(words); // no need to capture the return value since we are not checking it
//this case doesn't really test tail function because it doesnt compare arrays.
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
