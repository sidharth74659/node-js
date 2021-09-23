const express = require('express')
const path = require('path')

const app = express()

//loads index.html on '/'
app.get('/', (req, res) => {
    res.sendFile(
        path.resolve(__dirname, './static/index.html')
    )
})

// you can access the files inside the directory that we specified in app.use(Route, static_path)
// like we can access background.css || secret.txt in static, public folders from localhost:1337/background.css and localhost:1337/public/secret.txt respectively


//when assets like background.css(inside index.html) are required on the '/', the following path is used for finding those assets
app.use('/', express.static(path.resolve(__dirname, 'static/assets')))



//as the default file name for a webpage is index.html, the following can be used
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.listen(1337)