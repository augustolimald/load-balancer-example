const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request in server 2');
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end("response from server - 2.\n");
});

server.listen(1502, () => {
    console.log('running on http://localhost:1502/');
});