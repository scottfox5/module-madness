var http = require('http');
var modThree = require('./module-three');


http.createServer(function(req, res){
  res.writeHead(200);

  res.write(modThree.introString());
  res.write(modThree.finalNumber());

  res.end();
}).listen(3000);
