# 05 - JaveScript_Essentials - ES6 (Part2)
### Function !!!
- 簡單的 function 宣告如下
```js
function cheer(){
  console.log("Wooohoo!");
}

cheer();
```
- 也可以將 function 指給一個變數作為 callback function。
```js
var cheerFunc = function(){
  console.log("Wooohoo!");
}
cheerFunc();
```
- 還可以設定 timeout，比如說 `3 sec` 後才執行的 function。
```js
// OHHHH will log after 3000ms
setTimeout(function(){
  console.log("OHHHHHHH");
}, 3000);
```

### Arrow Function !!!
- 使用 Arrow 作為 function 的宣告方式，你可能就不需要 function 的名字。   
更多箭頭 function : https://goo.gl/kwrwbi
```js
setTimeout(() => {
  console.log("OHHHHHHH");
}, 3000);
```
- 將變數作為 function 但是不需要為 function 命名。
```js
let cheerArrow = () => {
  console.log("cheerArrow!!!");
}

cheerArrow();
```

### Map and Filter method
- `map` ，在陣列中的每個元素上呼叫定義的回呼函式，並傳回包含結果的陣列。   
ref : https://msdn.microsoft.com/zh-tw/library/ff679976
```js
// it does make sense to double an array, so we can use "map" function
// map can go through every element in array
let values = [20, 30, 40];
let double = (n) => {
  return n*2;
}
let doubled = values.map(double);  // [40, 60, 80]
console.log(doubled);
```
- 也可以有更簡短的寫法，把 `map` 放進 function 的宣告中。
```js
let values = [20, 30, 40];
let doubled2 = values.map((n) => {
  return n*2;
})
console.log(doubled2); // [40, 60, 80]
```
