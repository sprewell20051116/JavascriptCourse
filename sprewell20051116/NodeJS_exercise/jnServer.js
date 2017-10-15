var http = require('http');
var server = http.createServer(function(req, res) {
  var pageHead = {'Content-Type':'text/html'};
  var resObj = { message: "Hello World"};
  if (req.url == '/' ) {
    // home page
    res.writeHead(200, pageHead);
    // response JSON
    res.write(JSON.stringify( resObj ));
    res.end();

  }
});

server.listen(5000);
console.log('nodeJS Server is Running');
