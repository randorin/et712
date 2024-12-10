const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});
    const url = req.url;

    if (url === '/home' || req.url === '/') {
        fs.createReadStream('index.html').pipe(res)
    } else if (url === '/about') {
        fs.createReadStream('about.html').pipe(res)
    } else {
        res.write('Page does not exist! Please go back home')
    }
})

server.listen(3200, () => {
    console.log('Server is running...')
})