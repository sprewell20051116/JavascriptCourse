## Jade 樣版引擎(Template Engine)
#### Install and setup
安裝 Jade 以及建立一個 myViews 資料夾，將 jade 檔案放在這裡面
```
npm install jade --save
mkdir /myapp/myViews
```
建立簡單的 `sample.jade` 檔案
```html
<!-- myapp/myViews/sample.jade -->
doctype html
html
    head
        title Jade Page
    body
        h1 This page is produced by Jade engine
        p some paragraph here..
```
建立 serverjade.js 編譯 sample.jade
```js
var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade")
app.set("views","myViews")

app.get('/', function (req, res) {
    res.render('sample');
});

var server = app.listen(3000, function () {
    console.log('Node server is running..');
});

```
```
$ node serverjade.js
```

#### use default create server
這裡例子裡，直接引入 `jade module`，並使用其 `renderFile()` 直接將指定的樣版完成編繹後，
將產生的 html 存到data裡，再由 `res.write()` 將 html 呈現在瀏覽器上

```js
// 1 - Import Node.js core module
var http = require('http');
var jade= require('jade');

var data=jade.renderFile('./myViews/sample.jade');

// 2 - creating server
var server = http.createServer(function (req, res) {   

    if (req.url == '/') { //check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write(data);
        res.end();
    }else
        res.end('Invalid Request!');
});

server.listen(3000); //3 - listen for any incoming requests
console.log('Node.js web server at port 3000 is running..')
```


ref:
- https://ithelp.ithome.com.tw/articles/10186637
- Jade: http://naltatis.github.io/jade-syntax-docs/
