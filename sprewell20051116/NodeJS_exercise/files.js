// 'node debug files.js' could open debug mode
// details: https://ithelp.ithome.com.tw/articles/10185502
// Node Inspector: https://ithelp.ithome.com.tw/articles/10185570

var fs = require('fs');

fs.open('TestFile.txt', 'r+', function(err, fd) {
  if (err) throw err;
  console.log('File open success!!!');
  var buff = new Buffer(1024);
  debugger;
  fs.read(fd, buff, 0, buff.length, 0, function(err, bytes) {
    if (err) throw err;
  debugger;
    if (bytes > 0) {
      console.log(bytes + ' charectars are read');
      console.log(buff.slice(0, bytes).toString());
    }
    fs.close(fd, function(err) {
      if (err) throw err;
    });
  });
});
