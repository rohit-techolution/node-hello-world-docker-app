const http = require('http');
const PORT = 5000;

http.createServer((req, res) => {
    res.end('Hello World');
}).listen(PORT);

console.log('Server running at http://127.0.0.1:' + PORT);