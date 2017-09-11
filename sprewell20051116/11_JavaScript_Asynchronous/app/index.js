console.log("Subject 11 Promimse and Asynchronous");
let p = new Promise((resolve, reject) => {
  // resolve('Resolved promise data');
  // reject("rejected promise data"); //Uncaught (in promise) rejected promise data
  setTimeout(() => resolve("resolved promise data"), 3000); // schedule 3 sec
})

p.then(response => console.log(response))
  .catch(error => console.log(error)); // rejected promise data

console.log("after promise consumption");


// ================================================
console.log("Subject 11 Class85 - APIs and ES6 Fetch");
const root = "https://jsonplaceholder.typicode.com/posts/1";
fetch(root, {
  method: "GET"
})
  // .then(response => console.log(response));
  .then(response => response.json())
  .then(json => console.log(json)); // full data
