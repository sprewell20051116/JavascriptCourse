console.log("Subject 12 ES7");
// let a = Math.pow(2, 5); // 32
let a = 2**5; // 32
console.log(a);

// string check
let b = "wonderful".includes("wonder");
console.log(b);
// includes also can use on arrays
let check_Array = [2, 3, ,4 ,5 ,6].includes(5);
console.log(check_Array);

console.log("Subject 12 ES8");
let obj = {a: "one",
           b: "two",
           c: "three"};
let keys = Object.keys(obj);
console.log(keys);
let values = Object.values(obj);
console.log(values);
let entries = Object.entries(obj);
console.log(entries);
for (let entry of entries) {
  console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}

console.log("Subject 12 Class 90");

async function async_one() {
  return "One";
}

// throw keyword
async function async_two() {
  throw new Error('Issue with async!');
}

// await keyword
async function async_three() {
  const one = await async_one();
  console.log(one);
  const two = await async_two();
  console.log(two);
}

async function async_four() {
  const ["res_one", "res_two"] = await Promise.all(
    [async_one(), async_two()]
  )
  console.log(res_one, res_two);  
}

async_one().then(response => console.log(response));
async_two().catch(error => console.log(error));
async_three();
async_four();
