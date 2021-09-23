// import express module to handle various request types...this returns a function
const express = require('express');

// call that function and store the return values/methods in 'app'
const app = express()

// use one of the method known 'get' to handle requests to send something on a respective path

// app.get('path', function to do when on path)
app.get('/', (req, res) => {
    res.send("Helo wRold");
})

//loads the 'URL:/post' page with the "post wRold"
app.get('/post', (req, res) => {
    res.send("post wRold");
})

// not visible on the page, but can be seen in console when you use 'fetch' with a 'post' method
app.post('/post', (req, res) => {
    // console.log(req);
    
    res.send(" name: 'asfsafasfasgasgsaf' ")
    // res.send({ name: "asfasf" }) 
})



// listen to port for any route change
app.listen(1337)