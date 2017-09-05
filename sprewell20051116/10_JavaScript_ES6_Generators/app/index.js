console.log("Subject 10 Generators");
function* letterMaker() {
  yield 'a';
  yield 'b';
  yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen.next().value); // a
console.log(letterGen.next().value); // b
console.log(letterGen.next().value); // c
console.log(letterGen.next().value); // undefined

function* countMaker() {
  let count = 0;
  while (count < 4) {
    yield count += 1;
  }
}

let countGen = countMaker();
console.log(countGen.next().value); // 1
console.log(countGen.next().value); // 2
console.log(countGen.next().value); // 3
console.log(countGen.next().value); // 4

console.log("Subject 10 Class 79 Controlling flow with Generators");
function* evens() {
  let count = 0;
  while(true) {
    count += 2;
    let reset = yield count;
    if (reset == true) {
      count = 0;
    }
  }
}
let sequence = evens();
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 4
console.log(sequence.next().value); // 6
console.log(sequence.next().value); // 8
console.log(sequence.next().value); // 10
console.log(sequence.next(true).value); // reset the sequence, 2
console.log(sequence.next().value); // 4

console.log("Subject 10 Class 80 Generators vs iteration");
const arrayIterator = (array) => {
  let index = 0;
  return {
    next: () => {
      if (index < array.length) {
        let next = array[index];
        index += 1;
        return next;
      }
    }
  }
}

let it = arrayIterator([1, 2, 3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log("Subject 10 replace iteration by gemerator");

function* arrayIterator_2() {
  // for (let arg of arguments) {
  //   yield arg;
  // }
  yield* arguments;
}
var it_2 = arrayIterator_2(1, 2, 3);
console.log(it_2.next().value); // 1
console.log(it_2.next().value); // 2
console.log(it_2.next().value); // 3
console.log(it_2.next().value); // undefined
