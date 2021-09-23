const http = require('http');

const server = http.createServer((req, res) => {
    // req is useful in handlin url_paths....but express is much better..so we'll be looking it in next section
    res.write("server");
    res.end();
})


server.listen(1337, () => {console.log("listening server");}
);