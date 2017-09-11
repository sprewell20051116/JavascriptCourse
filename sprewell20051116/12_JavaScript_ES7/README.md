# Test Env for JavaScript Course

### Download project
```
Git : https://github.com/sprewell20051116/JavascriptCourse.git
Manule Download by "Download zip" Button
```
##### Install webpack
```sh
$ npm install --save-dev webpack
```
#### Install bable
```sh
$ npm install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --save-dev
```

### Install es2016 (Subject12)
```sh
$ npm install babel-preset-es2016 --save-dev
```
add "es2016" in `package.json`
```diff
...
"bable": {
  "presets": [
     "es2015",
+    "es2016"
  ]
},
...
```
### Install es2017 (Subject12)
```sh
$ npm install babel-preset-es2017 --save-dev
```
add "es2016" in `package.json`
```diff
...
"bable": {
  "presets": [
     "es2015",
     "es2016",
     "es2017"
  ]
},
...
```

#### Build Modules
```js
$ npm run build
```
#### Start Server
```js
$ npm start
```
### Open localhost
```
http://localhost:3000/
```
