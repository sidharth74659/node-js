//if we want to use 'import' keyword, it doesn't work .js extension file
// import fs from 'fs';    //throws an error, it works only with .mjs extension file, as it works with ES6 module resolution system

//create a .mjs file and run this command
import fs from 'fs';            //for files with .mjs extension only

// const fs = require('fs');    //for files with .js extension

console.log(
    fs.readFileSync('07_esm_intro.mjs', 'utf8')
);
