## 常大課程專用資料夾
### ID : sprewell20051116

### Download project
```
Git : https://github.com/sprewell20051116/JavascriptCourse.git
Manule Download by "Download zip" Button
```
##### Goto 00_NodeJS_testEnv
```
$ cd [Your Project Path]/00_NodeJS_testEnv
```

##### Install webpack
```sh
$ npm install --save-dev webpack
```
#### Install bable
```sh
$ npm install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --save-dev
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

### Simple Hello World
```
<!-- index.html -->
...
  <div id="app"></div>
...
```
```js
// index.js
ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('app')
)
```

### Simple Class usage

```js
// Here is the class definition of PomodoroTimer
class PomodoroTimer extends React.Component {
  render() {
    return(
      <h2> Hello Hello! </h2>
    )
  }
}

// here is to render class PomodoroTimer
ReactDOM.render(
  <PomodoroTimer />,
  document.getElementById('app')
)
```
