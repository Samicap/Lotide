
const assertEqual = require('./assertEqual'); //this does nothing


const tail = function(array) {
  let x = array.slice(1);
  return x;
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
// no need to capture the return value since we are not checking it

module.exports = tail;