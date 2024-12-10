const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    if (request.url === '/' || request.url === '/home') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.end(data);
            }
        });
    } else if (request.url === '/about') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.end(data);
            }
        });
    } else if (request.url === '/styles.css') {
        response.writeHead(200, {'Content-Type': 'text/css'});
        fs.readFile(path.join(__dirname, 'styles.css'), (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.end(data);
            }
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.end(data);
            }
        });
    }
});

server.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});
