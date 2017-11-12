## mongo shell exercise
#### ref
- http://andyyou.logdown.com/posts/177570-mongodb-notes
```
因為 MongoDB 是動態式架構(schema)。在建立一筆資料之前你也不需要事先定義 schema
M插入任何一筆資料之前你是不需要自己建立集合
```

#### 啟動 mongodb  
```sh
$ mongod
$ mongod --dbpath [YOUR_DB_PATH]
```
#### 連線資料庫
```sh
$ mongo # 進入 shell
$ mongo --hostname 0.0.0.0 --port 27017 # remote URL
$ mongo [HOSTNAME]:[PORT]/[DB_NAME] # remote URL
```
#### SHELL 常用指令
```sh
> db # 當前資料庫
> show dbs # 資料庫清單
> use [DB_NAME] # 切換資料庫
> db.auth('account', 'password'); # 登入身份
> show collections # 列出資料表
> mongo [DB_NAME] --eval "db.dropDatabase()" # 移除資料庫
> DBQuery.shellBatchSize = x # 讀取資料時迭代一次取回幾筆資料
> printjson() # 將 document 以 JSON 方式輸出
# --- 資料庫操作 ---
> db.[DB_NAME].insert([DOCUMENT]) # 插M入資料
> db.[DB_NAME].find() # 列出資料庫中的資料
```
#### 建立一個 collection 並插入一筆 document
簡單的插入兩個 document 並確認資料庫中有這兩筆 document
```
$ mongod # 進入 mongo shell
# 建立 j 以及 k 這兩個 document (object)
> j = { name : "mongo" }
> k = { x : 3 }
# 將 j 以及 k 兩個 document (object) 插入 testData 這個 collection
# 你也可以在這之前使用 db.createCollection("testData") 建立 collection
# 不過如同之前所述，建立一筆資料之前不須事前定義。
> db.testData.insert(j);
> db.testData.insert(k);
# 確認資料有被插入至 testData 這個 collection
> db.testData.find();
  { "_id" : ObjectId("59fe810e89600d186c2f2552"), "name" : "mongo" }
  { "_id" : ObjectId("59fe811289600d186c2f2553"), "x" : 3 }
```  
官方文件提供了產生測試資料的教學
```
> for (var i = 1; i <= 25; i++) db.testData.insert( { x : i } )
> db.testData.find()
```
如果要快速在不同的資料庫，集合中建立資料，官方文件也提供 function 的方式：
```
> function insertData(dbName, colName, num) {
    var col = db.getSiblingDB(dbName).getCollection(colName);
    for (i = 0; i < num; i++) {
      col.insert({x:i});
    }
    print(col.count());
  }
####
```
將 document 指定給一個 variable 然後取用
```
> var doc = db.testData.find();
# 列出 testData 這個 collection 中所有的 document
> while ( doc.hasNext() ) printjson( doc.next() )
# 也可以用 printjson() 方法指定要印出的 index
> printjson(doc[4])
```
#### 查詢指定的 document
透過傳遞一個物件參數，我們可以找到 collection 中的特定筆資料
```
> db.testData.find({ x : 18 });
  { "_id" : ObjectId("59fe816d89600d186c2f2565"), "x" : 18 }
```
限制查詢回傳的資料數量
```
> db.testData.find().limit(3);
  { "_id" : ObjectId("59fe810e89600d186c2f2552"), "name" : "mongo" }
  { "_id" : ObjectId("59fe811289600d186c2f2553"), "x" : 3 }
  { "_id" : ObjectId("59fe816d89600d186c2f2554"), "x" : 1 }
```

## mongo NodeJS exercise
#### ref
- http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/

#### 環境
建立 NodeJS_Mondodb 環境
```sh
# 安裝 package
$ npm init
$ npm install mondodb --save
# 啟動 mongo db server
$ mongod
```
#### Connect to MongoDB
新增一個檔案 `app.js`，連接 mongoDB 中的 `myproject` 資料庫。
```js
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
```
測試看看
```
$ node app.js
```
#### CRUD
- Insert a Document
```js
// Function: insertDocuments
// Description:
// The insert command returns an object with the following fields:
//
// result Contains the result document from MongoDB
// ops Contains the documents inserted with added _id fields
// connection Contains the connection used to perform the insert
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

// call insertDocuments method
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() {
    db.close();
  });
});
```
- Find all Documents
```js
// Function: findDocuments
// Description:
// The insert command returns an object with the following fields:
//
// result Contains the result document from MongoDB
// ops Contains the documents inserted with added _id fields
// connection Contains the connection used to perform the insert
var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

//call findDocuments method
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});

```
- Find Documents with query filter  
使用 collection.find({``'a': 3}``).toArray()

```js
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

//call findDocumentsFilter method
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    findDocumentsFilter(db, function() {
      db.close();
    });
  });
});

```
```
$ node app.js
connection successfully to server
Insert 3 documents into the collection
Found the following records
[ { _id: 5a0678bbc6fcb113c2807956, a: 3 } ]
```


- Update a document
使用 `updateOne()` 方法 Update documents.  
下面的方法是將 `{a : 2}` 這個物件更新成為 `{b : 1}`.
```js
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

//call updateDocument method
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  insertDocuments(db, function() {
    updateDocument(db, function() {
      db.close();
    });
  });
});
```
```
$ node app.js
connection successfully to server
Insert 3 documents into the collection
Found the following records
[ { _id: 5a0678bbc6fcb113c2807956, a: 3 } ]
```
