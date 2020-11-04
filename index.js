var express = require('express'), path = require('path'),
 app = express();
 app.use(express.static(__dirname));
// app.get(['/', '/index.html'], function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.end('<h1>Header</h1><p>Hello, Node.js!</p>');
// });
app.get(['/', '/index.html'], function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});   
app.get('*', function (req, res) {
 res.writeHead(404, {'Content-Type': 'text/html'});
 res.end('<h1>404 - Wala na siya nag-paramdam!</h1><p>Ghosting?</p>');
});
var server = app.listen(80, '127.0.0.1');
console.log('Server running at http://127.0.0.1:80/');
