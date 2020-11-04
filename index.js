var http = require('http');
var server = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/plain'});
 res.end('<h1>Hello, Node.js!</h1>');
});
server.listen(80, '127.0.0.1');
console.log('Server running at http://127.0.0.1:80/');
