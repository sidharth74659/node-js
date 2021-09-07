function addNumbers(a, b) {
    return a + b;
}


//al these module exports values are now be available in the other files, try to print them in the other files
module.exports.a = 100
module.exports.letter = 'a';
module.exports.func = () => { console.log("from export") }
module.exports.addNumbers = addNumbers;


//few people dont use module which works fine but it is not good practice, as there is an exception for that : which is if you ever use a variable/ parameter name as 'module', now it overrides the module.exports variable.
exports.no_module = 100

