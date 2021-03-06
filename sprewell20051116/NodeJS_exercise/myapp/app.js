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
  insertDocuments(db, function() {
    // findDocuments(db, function () {
    // findDocumentsFilter(db, function () {
    // updateDocument(db, function () {
    indexCollection(db, function () {
      db.close();
    });
  });
});

//
// Insert document
//
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // insert some documents
  collection.insertMany( [
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Insert 3 documents into the collection");
    callback(result);
  })
}


//
// Find Documents
//
var findDocuments = function(db, callback) {
  var collection = db.collection('documents');
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

//
// Query filter
//
var findDocumentsFilter = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

//
// Update Document
//
var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
}

//
// index Documents
//
var indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { "a": 1 },
      null,
      function(err, results) {
        console.log(results);
        callback();
    }
  );
};
