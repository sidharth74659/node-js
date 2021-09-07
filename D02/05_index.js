//  const { addNumbers } = require('./05_util');
const util = require('./05_util');  //this is how you access module export variables from other files

console.log(util);  // this will print the entire module
console.log(util.addNumbers(5, 7)); //will access the addNumbers function and print the result



