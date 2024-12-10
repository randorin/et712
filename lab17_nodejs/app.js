const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Internal Server Error');
            } else {
                response.end(data);
            }
        });
    } else {
        response.writeHead(200, {'Content-Type': 'application/json'});

        const user = {
            name: "Peter Pan",
            email: "peterpan@neverland.com"
        };

        response.end(JSON.stringify(user));
    }
});

// Server listening on port 3000
server.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});
