console.log("Subject 08 Class 64,65 Writing a Set");

let a = new Set();
a.add(5);
a.add(43);
a.add("!?!?!?!?");
a.add({x: 50, y: 200});
console.log(a);
console.log(a.size); // 4
console.log(a.has(5)); // true
console.log(a.has(7)); // false


let numbers = [5, 7, 8, 13, 17];
let numSet = new Set(numbers);
console.log(numSet);

//
// values() : go through every values in sets
//
for (let elements of numSet.values()) {
  console.log(elements);
}

//
// Exercise : What would it presents if the values of the Set are different types
//
for (let elements of a.values()) {
  console.log(elements); // check log
}

let chars = "103890283upiawlkdnvliaurehlgij";
let chars_arr = chars.split(""); // to sepereate each char as cell in array;
let chars_set = new Set(chars_arr);
console.log(chars_set);
console.log(chars_set.has("u"));

// Exercise : Does this Word Contain this Letter? (Sets)
const contains = (word, letter) => {
  let letters = word.split("");
  let lettersSet = new Set(letters);
  console.log(lettersSet.has(letter));
  return lettersSet.has(letter);
  // if (lettersSet.has(letter)) {
  //   return true;
  // } else {
  //   return false;
  // }

};

let true_check = contains("west", "e");
let false_check = contains("north", "e");
console.log(true_check);
console.log(false_check);

console.log("Subject 08 Class66, 67  Map function");
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Map
//Map 物件是簡單的鍵/值映射。 鍵和值可以是任意的值(物件或原始型別)。
//Iterable 是一個陣列或其他iterable物件，該物件的元素皆是鍵/值成對的(如兩個元素的陣列)。成對的鍵/值會被新增到新的Map。null會被作為undefined。
//Map function allowes every kind of type as key
let a_map = new Map();
// key and value
let key_1 = "String Key"; // string key
let key_2 = {a: 'key'}; // object key
let key_3 = function() {};

a_map.set(key_1, "return value for a string key");
a_map.set(key_2, "return value for a object key");
a_map.set(key_3, "return value for a function key");
console.log(a_map);

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);
console.log(valMap);
// iteration
for (let [key, value] of valMap.entries()) {
  console.log(`${key} points to ${value}`); //1 points to one, points to two, points to three
}

// to count the number of letter in the string
// set letter as key and number of the letter as value
// set() to set value of the kye / get() to get the value of the key in the map
let string = '123awrefbxlidurhgisluenrg';
let letters = new Map();
for (let i =0; i<string.length; i++) {
  let letter = string[i];
  if (!letters.has(letter)) {
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}
console.log(letters);

// Exercise : How Many Times Does this Letter Appear? (Maps)
let test_string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
  // TODO Create a map called 'letters'
  let letters = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      // TODO set the letter in the map to 1
      letters.set(letter, 1);
    } else {
      // TODO update the value of letter in letters to its value + 1
      letters.set(letter, letters.get(letter) + 1);
    }
  }
  return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');
