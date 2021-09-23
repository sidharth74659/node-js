const express = require('express')
const path = require('path')

const app = express()

// loading a static file
app.get('/', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, './static/index.html')
    )
})


// loading a static asset (not a better way ..check for next chapter)
app.get('/background.css', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, './static/assets/background.css')
    )
})

app.listen(1337)