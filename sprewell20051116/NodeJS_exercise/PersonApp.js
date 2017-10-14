var person = require('./Person.js');
var person1 = new person('James', 'Bond');
// Create a person Object, Named person1

console.log(person1.fullName());

// 因為如此，
// 在上一個app.js例子中，
// nodeJS把整個utility資料夾，
// 當成一個package，
// 所以，
// 它會自動在這資料夾裡去找package 定義檔，
// 預設為package.json，之後，
// 再根據定義檔裡面的關鍵字 main所描述的檔名，
// 載入檔案。
