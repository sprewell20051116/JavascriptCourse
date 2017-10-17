// 注意！在這例子中，app.get()裡的回傳函式，
// 我們要以物件 res 回應一個 “靜態文件“，
// 也就是我們另外新增好的 'index.html'，
// 它必須用絕對路徑，
// 所以，我們加了 __dirname，
// 它是node.js關鍵字，
// 用來返回目前這個.js檔的絕對路徑，
// 後面附上 '/檔名'

// TEST:
// $ curl --data 'firstName=Casper&lastName=Chang' http://localhost:5000/submit-student-data



var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html'); // response static document
});

app.post('/submit-student-data', function(req, res) {
  var name = req.body.firstName + ' ' + req.body.lastName;
  res.send(name + ' submit-student-data successfully\n');
});

var server = app.listen(5000, function () {
  console.log('Node server is running ');
});
