const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain'); // Add the Content-Type header
  res.write('Hello, World!');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});