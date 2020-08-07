var http = require('http');

function onRequest(request, response) {
  response.writeHead(200.0, {'Content-Type' : 'text/plain'});

  response.write('Hello World') + "<br>";

  response.end();
}

http.createServer(onRequest).listen(8000);
