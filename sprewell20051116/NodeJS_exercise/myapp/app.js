// var express = require('express');
// var app = express();
//
// // define routs here...
// var server = app.listen(5050, function() {
//   console.log('NodeJS server is running');
// })

var mongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// connection url
var url = 'mongodb://localhost:27017/myproject'

// Use conect method to connect to the server
mongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('connection successfully to server');
  db.close();
});
