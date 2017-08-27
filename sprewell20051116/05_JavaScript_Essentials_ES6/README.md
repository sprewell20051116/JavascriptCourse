# 05 - JaveScript_Essentials - ES6 (Part1)

### 依照 Subject04 的方法建立 ES6 開發環境
### 變數 | 常數
- 使用 `var` 宣告變數
```js
var limit = 100;
console.log(limit);
limit += 100;
console.log(limit);
```

- 使用 `let` 宣告變數
```js
// use let keywords
console.log("use let keywords");
let limit_let = 100;
console.log(limit_let);
// limit_let += 100;
limit_let = 200;
console.log(limit_let);
```

- 使用 `const` 宣告常數  
```js
const limit_const = 100;
console.log(limit_const);
// limit_let += 100; // Error
limit_const = 200;

const emails = ["email1", "email2", "email3"];
// emails = []; Error, you cannot re-assign const variables
// You can use "push()" to add elements"
emails.push("email4")
console.log(emails); // ["email1", "email2", "email3", "email4"];
```

### 變數的 scope

- `var` 關鍵字使用大括號 `{}` 不會影響他的 scoping。
```js
var limit = 200;
{
  var limit = 10;
  console.log("backstage limit ", limit); // 10
}
console.log("overall venue limit limit", limit); // 10
```

- `let` 關鍵字可以使用大括號 `{}` 隔開 scope。
```js
let limit = 200;
{
  let limit = 10;
  console.log("backstage limit", limit); // 10
}
console.log("overall venue limit", limit); // 200
```

- `const` 的 scope 跟 `let` 一樣。  
```js
// const 則會被 scorping 影響
const limit_40_3 = 200;
{
  const limit_40_3 = 10;
  console.log("backstage limit limit_40_3", limit_40_3); // 10
}
console.log("overall venue limit limit_40_3", limit_40_3); // 200
```

### Template and Literals
ES6 容許通過語法 `${val}` 嵌入到字串中
```js
let a = `good`;
let greeting_41 = `good morning`;
let greeting_41_2 = `${a} morning`; // good morning
let greeting_41_3 = a + " " + "morning"; // of course you can use this
console.log(a);
console.log(greeting_41);
console.log(greeting_41_2);

let b = `birthday`;
let c = `Happy ${b}`; // happy birthday
console.log(c);
```

### Spread operator and Rest Parameters (...Objects)
ES6中，通過簡單的 value assignment， 把 array 內的第 n 值assign 到變數， 或 object 內對應的 key的值 assign 到變數
```js
let arrayA = [20, 30 ,40];
let arrayA = [10, 50];
let arrayB = [10, ...arrayA, 50]; // insert arrayA into arrayB
console.log(arrayB); // [10, 20, 30, 40, 50]

let stringArrayA = ["Dana", "Erick", "Frank"];
let stringArrayB = ["Alice", "Bob", "Carl", ...stringArrayA];// string array can also use spread operator to insert
console.log(stringB);  // ["Alice", "Bob", "Carl", "Dana", "Erick", "Frank"]
```
在 function 中使用則叫做 `Rest parameters`，"不確定的傳入參數值"
```js
function collect(...a) {
  console.log(a);
}

collect(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]
collect(3, 6, 9, 12, 15); //[3, 6, 9, 12, 15]
```
### Destructuring Assignment
ES6中，可使用下面的方法，將陣列或物件中的資料取出成獨立變數。
ref: Mozilla Foundation | https://goo.gl/3AItZ2
```js
let z = [4, 5, 6];
// let four = z[0];
// let five = z[1];
let [four, five] = z;
console.log(four, five); // 4, 5

let animals = ["Simba", "Zazu", "Ed"];
let [lion, bird] = animals;
console.log(lion, bird); // Simba, Zazu
```
