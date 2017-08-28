function cheer(){
  console.log("Wooohoo!");
}
// cheer();
// we could make this function as anonymous
// cheer now is the global function as application scope

// followed make function as local scope as setting it as a var
var cheerFunc = function(){
  console.log("Wooohoo!");
}
// cheerFunc();

// set timeout function
// OHHHH will log after 3000ms
// setTimeout(function(){
//   console.log("OHHHHHHH");
// }, 3000);

// use arrow as function declaration
// you would not need to name it
setTimeout(() => {
  console.log("OHHHHHHH");
}, 3000);

let cheerArrow = () => {
  console.log("cheerArrow!!!");
}

cheerArrow();


console.log("Class 48. Map and Filter Method");
let values = [20, 30, 40];
let double = (n) => {
  return n*2;
}
// it does make sense to double an array, so we can use "map" function
// map can go through every element in array
let doubled = values.map(double);  // [40, 60, 80]
console.log(doubled);

// you can also use this, we do not need double function expression,
// we can replace call back function
let doubled2 = values.map((n) => {
  return n*2;
})
console.log(doubled2); // [40, 60, 80]

// Arrow function do not need "return" keywords
// use this
let doubled3 = values.map((n) => n*2);
console.log(doubled3); // [40, 60, 80]

console.log("----- The filter Method");
// the filter method based on the original array and pass the certain text and value
let points = [7, 16, 21, 4 ,3 ,22, 5];
let highScores = points.filter((n) => {
  return n > 15;
})
console.log(highScores); // [16, 21, 22];

// as previous, the arrow method can be used to shorten the function declaration
let highScores2 = points.filter((n) => (n > 15));
console.log(highScores2); // [16, 21, 22];

// ES6 built-in hepler methods
// Librerys
// String Manipulation and Number Checking
// - "String.repeat()" returns a new string of concatenated copies
// - "Searching" with startsWith, endsWith, includes, and more...
// - "Number checking" for type and safety
console.log("Class 50. The String Helper Methods");
// large string in JS application, repeat()
let StringB = "Wooh" + "oo".repeat(50) + "oo";
console.log(StringB);
let StringC = `woo${"oo".repeat(50)}`; // template Strings
console.log(StringC);

// Searching Methods
// cheking the original string
console.log("butterfly".startsWith("butter")); // true
console.log("butterfly".startsWith("fly")); // false
console.log("butterfly".endsWith("butter")); // flase
console.log("butterfly".includes("caterpillar")); // flase

// Checking Numbers
const addToCart = (item, number) => {
  // input and check the number is ffinites
  // return Number.isFinite(number);// false
  return Number.isSafeInteger(number);// false
}
console.log(addToCart("shirt", Infinity)); //false
console.log(addToCart("shirt", Math.pow(2, 54))); //false

console.log("Class 51. Modules");
// Modules
// we do not use index.js  all the time
// import{ fellowship } from './fellowship';
// // const total = fellowship.leng;
// console.log(fellowship); // ["Frodo", "Samwise", "Gandalf"]
// // console.log(fellowship, total);

import{ fellowship , total} from './fellowship';
// const total = fellowship.leng;
console.log(fellowship, total); // ["Frodo", "Samwise", "Gandalf"]
// console.log(fellowship, total);

// import{add, multiply} from './math';
// console.log(add(5, 10));
// console.log(multiply(5, 10));

// use defulat key words, you do not need {} to export
import multiply from './math';
console.log(multiply(5, 10)); // 50
