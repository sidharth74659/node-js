// we don't need to use ./, because filesystem is a global object and is built-in within node

const fs = require('fs')
const { CLIENT_RENEG_LIMIT } = require('tls')

function createFile(name, contents) {
    //the difference between writeFile and writeFileSync is, one is async and the other is sync..which means one will return a promise and the other one will return a value

    // fs.writeFile(name, contents)
    fs.writeFileSync(name, contents)    
}
    
module.exports = {createFile}