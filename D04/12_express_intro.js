const express = require('express');

const app = express();


app.get('/', (req, res) => {
    // appears in browser
    res.send("Hello World")
})

app.get('/admin', (req, res) => {
    // appears in browser at : URL/admin
    res.send("Hello admin")
})


app.listen(1337)