var http = require('http');

// var randomNum = require('./random');
// var usd = require('./usd');
var modules = require('./modules');

http.createServer(function (req, res) {
  res.writeHead(200);

  // res.write('Great job, you!'); // test to make sure it's running properly
  // res.write('' + randomNum(100, 1000000)); // my own test to understand
  // res.write(usd); // test
  res.write(modules.finalAnswer(2));
  res.write('' + modules.answer());
  res.end();
}).listen(3000);
