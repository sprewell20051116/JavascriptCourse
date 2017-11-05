## mongo shell exercise
#### ref
```
http://andyyou.logdown.com/posts/177570-mongodb-notes
```
- 因為 MongoDB 是動態式架構(schema)。在建立一筆資料之前你也不需要事先定義 schema
- 插入任何一筆資料之前你是不需要自己建立集合

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
> db.[DB_NAME].insert([DOCUMENT]) # 插入資料
> db.[DB_NAME].find() # 列出資料庫中的資料
```
#### 建立一個 collection 並插入一筆 document
簡單的插入兩個 document 並確認資料庫中有這兩筆 document
```sh
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
# { "_id" : ObjectId("59fe810e89600d186c2f2552"), "name" : "mongo" }
# { "_id" : ObjectId("59fe811289600d186c2f2553"), "x" : 3 }
```  
官方文件提供了產生測試資料的教學
```sh
> for (var i = 1; i <= 25; i++) db.testData.insert( { x : i } )
> db.testData.find()
```
如果要快速在不同的資料庫，集合中建立資料，官方文件也提供 function 的方式：
```sh
> function insertData(dbName, colName, num) {
    var col = db.getSiblingDB(dbName).getCollection(colName);
    for (i = 0; i < num; i++) {
      col.insert({x:i});
    }
    print(col.count());
}
```
