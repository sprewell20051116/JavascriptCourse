# 06 - JaveScript_Essentials - ES6 (Part2)
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
- `filter`幫助濾出陣列中符合條件的 element
```js
let points = [7, 16, 21, 4 ,3 ,22, 5];
let highScores = points.filter((n) => {
  return n > 15;
})
console.log(highScores); // [16, 21, 22];
```
- ES6 built-in hepler methods
- `repeat()`
```js
// large string in JS application, repeat()
let StringB = "Wooh" + "oo".repeat(50) + "oo";
console.log(StringB);
let StringC = `woo${"oo".repeat(50)}`; // template Strings
console.log(StringC);
```
- `Searching()` Method
```js
// cheking the original string
console.log("butterfly".startsWith("butter")); // true
console.log("butterfly".startsWith("fly")); // false
console.log("butterfly".endsWith("butter")); // flase
console.log("butterfly".includes("caterpillar")); // flase
```
- 數值相關的 Helper method
`isSafeInteger()` 確認這個數字是不是無限大或是安全的
```js
const addToCart = (item, number) => {
  // input and check the number is ffinites
  // return Number.isFinite(number);// false
  return Number.isSafeInteger(number);// false
}
console.log(addToCart("shirt", Infinity)); //false
console.log(addToCart("shirt", Math.pow(2, 54))); //false
```

### Modules
如何將 source code 模組化。`import` & `export`。
1. 在 app 資料夾中新增 `fellowship.js`
2. 在 `fellowship` 新增 module 的內容。`export {fellowship, total}`表示可以一次 `export`、`import` 多個 variable 或是 object。
```js
const fellowship = ["Frodo", "Samwise", "Gandalf"];
// How to let another file know this file : export
const total = fellowship.length;

export {fellowship, total} // export multiple parameters
```
3. 在 `index.js` 中使用 `import{ fellowship , total} from './fellowship'` 將 module 導入。
```js
import{ fellowship , total} from './fellowship';
// const total = fellowship.leng;
console.log(fellowship, total); // ["Frodo", "Samwise", "Gandalf"]
```
4. 也可以 `import function`。新增一個 `math.js` ，並在 `index.js` 中使用。
```js
// math.js
const add = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}

export{add, multiply};

// index.js
import{add, multiply} from './math';
console.log(add(5, 10));
console.log(multiply(5, 10));
```

- `export default` 預設匯出。
```diff
  const add = (a, b) => {
    return a + b;
  }

  const multiply = (a, b) => {
    return a * b;
  }

  export{add, multiply};
+ export default multiply;
```
所以在 `import` 時可以使用預設匯入，如此可以直接使用。
```js
import multiply from './math';
console.log(multiply(5, 10)); // 50
```
