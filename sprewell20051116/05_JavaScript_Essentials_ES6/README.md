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
console.log("use consts keywords");
const limit_const = 100;
console.log(limit_const);
// limit_let += 100; // Error
limit_const = 200;
// console.log(limit_const);
const emails = ["email1", "email2", "email3"];
// emails = []; Error, you cannot re-assign const variables
// You can use "push()" to add elemets"
emails.push("email4")
console.log(emails); // ["email1", "email2", "email3", "email4"];
```

### 變數的 scope
- `var` 關鍵字使用大括號 `{}` 不會影響他的 scoping
```js
var limit = 200;
{
  var limit = 10;
  console.log("backstage limit ", limit); // 10
}
console.log("overall venue limit limit", limit); // 10
```

- `let` 關鍵字可以使用大括號 `{}` 隔開 scope
```js
let limit = 200;
{
  let limit = 10;
  console.log("backstage limit", limit); // 10
}
console.log("overall venue limit", limit); // 200
```
