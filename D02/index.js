//  const { addNumbers } = require('./05_util');
//  ./ is used  to let node know it is a relative path
const util = require('./05_util');  //this is how you access module export variables from other files

console.log(util);  // this will print the entire module
console.log(util.addNumbers(5, 7)); //will access the addNumbers function and print the result


const { createFile } = require('./06_filesystem');
// createFile('test.txt', 'This is created using file_system')

//file system a.k.a fs module provides several methods that are both in sync and async way
//async function is used when you want to wait for a function to finish before you continue
//sync function, is like a single-threaded
const _fs = require('fs');
console.log(_fs.readdirSync('.'));   //[ '.git', '.gitattributes', '.gitignore', 'D02', 'test.txt' ]

const fs = _fs.promises;
(async () => {

    console.log(await fs.readdir('.'));   //[ '.git', '.gitattributes', '.gitignore', 'D02', 'test.txt' ]

})();

console.log(fs);    //prints the available methods of file system module 


