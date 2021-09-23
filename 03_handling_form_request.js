const express = require('express')
const path = require('path')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/', express.static(path.resolve(__dirname, 'form')))

app.post('/data', (req, res) => {
    console.log(req.body);

    res.json({ status: 'ok' })
})




app.listen(1337)
