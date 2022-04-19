const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request in server 1');
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end("response from server - 1.\n");
});

server.listen(1501, () => {
    console.log('running on http://localhost:1501/');
});