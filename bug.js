const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the Content-Type header, the response may not be handled correctly by some clients.
  res.write('Hello, World!');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});