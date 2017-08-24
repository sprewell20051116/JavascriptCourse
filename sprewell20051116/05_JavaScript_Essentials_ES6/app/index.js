console.log("Hi!!!!!!! This is 05_JavaScript_Essentials_ES6!!!");
var limit = 100;
console.log(limit);
limit += 100;
console.log(limit);

// use let keywords
console.log("use let keywords");
let limit_let = 100;
console.log(limit_let);
// limit_let += 100;
limit_let = 200;
console.log(limit_let);

console.log("use consts keywords");
const limit_const = 100;
console.log(limit_const);
// limit_let += 100;
// limit_const = 200;
// console.log(limit_const);

const emails = ["email1", "email2", "email3"];
// emails = []; // no re-assign
emails.push("email4") // however you can use "push()" to add elemets" ["email1", "email2", "email3", "email4"];
console.log(emails);

console.log("--- Class 40 - Control with block scorping ---");
let limit_40 = 200;
{
  let limit_40 = 10;
  console.log("backstage limit", limit_40); // 10
}
console.log("overall venue limit", limit_40); // 200

// Test!! "var" 關鍵字不會因為 block 而影響他的 scorping
var limit_40_2 = 200;
{
  var limit_40_2 = 10;
  console.log("backstage limit limit_40_2", limit_40_2); // 10
}
console.log("overall venue limit limit_40_2", limit_40_2); // 10

// const 則會被 scorping 影響
const limit_40_3 = 200;
{
  const limit_40_3 = 10;
  console.log("backstage limit limit_40_3", limit_40_3); // 10
}
console.log("overall venue limit limit_40_3", limit_40_3); // 200


// function 內的 let 關鍵字不會被影響 la
function hello(){
  let message = "Hello";
  console.log(message);
}

function greeting(){
  let message = "How are you";
  console.log(message);
}

hello();
greeting();

console.log("--- Class 41 - Template and Literals");
// Template Literals
let a = `good`;
let greeting_41 = `good morning`;
let greeting_41_2 = `${a} morning`; // template String
let greeting_41_3 = a + " " + "morning"; // of course you can use this
console.log(a);
console.log(greeting_41);
console.log(greeting_41_2);

let b = `birthday`;
let c = `Happy ${b}`;
console.log(c);

// let a = "good";
// let greeting_41 = "good morning";
// let greeting_41_2 = "${a} morning";
// console.log(a);
// console.log(greeting_41);
// console.log(greeting_41_2);

console.log("--- Class 42 - Spread Operator and Rest Parameters ")
let a_42 = [20, 30 ,40];
let b_42 = [10, 50];
let b_42_2 = [10, ...a_42, 50]; // insert a_42 into b_42_2 = [10, 20, 30, 40, 50]
console.log(b_42_2);

let stringA = ["Dana", "Erick", "Frank"];
let stringB = ["Alice", "Bob", "Carl", ...stringA];// string array can also use spread operator to insert
console.log(stringB);  // ["Alice", "Bob", "Carl", "Dana", "Erick", "Frank"]

function collect(...a) {
  console.log(a);
}

collect(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5]
collect(3, 6, 9, 12, 15); //[3, 6, 9, 12, 15]

console.log("--- Class 43 - Destructuring Assignment on Array and Objects");
let z = [4, 5, 6];
// let four = z[0];
// let five = z[1];
let [four, five] = z;
console.log(four, five); // 4, 5

let animals = ["Simba", "Zazu", "Ed"];
let [lion, bird] = animals;
console.log(lion, bird); // Simba, Zazu

// let king = {name: "Mufasa", kids: 1};
// let name = king.name;
// let kids = king.kids;
// console.log(name, kids);
// 
// let {nameObj, kidsObj} = king;
// console.log(nameObj, kidsObj);

let son = {name: "Simba", parents: 2};
let name, parents;
// {name, parents} = son;
({name, parents} = son); // fix complile error, since name and parents are conflict
console.log(sonName, parents);
