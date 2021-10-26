const http = require('http');

http.createServer((req, res) => {
    console.log('New incoming request');
    res.writeHeader(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(3005, () => console.log('Listening on port 3005...'));
