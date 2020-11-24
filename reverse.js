const string = function(words) {
  // console.log(words);

  let apple = [];
  for (let j = 0; j < words.length; j++) {
    let newString = "";
    // console.log(words[j]);
    // console.log(words[j].length);
    for (let i = words[j].length - 1; i >= 0; i--) {
      newString += words[j][i];
      // console.log("hello");
    }
    apple.push(newString);
  }
  return apple;
};

const core = function(apple) {
  for (let i = 0; i < apple.length; i++) {
    console.log(apple[i]);
  }
};

const args = process.argv;
let reverse = string(args.slice(2));

core(reverse);



//this code take input in this format in the termial:  node reverse.js hello 1 james