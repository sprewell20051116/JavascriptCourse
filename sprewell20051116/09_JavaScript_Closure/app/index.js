console.log("Subject 09 Class 70 71 : Closure and scopting");
let call = () => {
  let secret = "ES6 rocks";
  let reveal = () => {
    console.log(secret);
  }
  // reveal();
  return reveal; // to retrun reveal function entirely
};

// console.log(secret); // secret is not define!!!
// call(); // ES6 rocks


let unveil = call();
call(); // print nothing
unveil(); // ES6 rocks

console.log("Subject 09 Class 72: function Factories");
const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h); // happiness


// ---
const product = (x) => {
  return y => {
    return y * x;
  }
}

let mult5 = product(5);
console.log(mult5(3)); // 5 * 3 = 15
let double = product(2);
console.log(double(9)); // 2 * 9 = 18

// ---
const product2 = (x) => {
  return y => y * x;
}
let mult5_2 = product2(5);
console.log(mult5(3)); // 5 * 3 = 15
let double_2 = product2(2);
console.log(double(9)); // 2 * 9 = 18

const product3 = x => y => y * x;
let mult5_3 = product3(5);
console.log(mult5_3(3)); // 5 * 3 = 15
let double_3 = product3(2);
console.log(double_3(9)); // 2 * 9 = 18

console.log("Subject 09 Exercise Adding Factory (Closures)");
const addFactory = (x) => {
    return y => {
        return x + y;
    };
  // TODO
  // return an inner function with one parameter, y;
  // the inner funcion returns x + y;
};
// also
// const addFactory = x => y => x + y;
const add50 = addFactory(50);
const add30 = addFactory(30);
console.log(add50(10)); // 60

console.log("Subject 09 Class 74: Private Methods");
const budget = () => {
  let balance = 0;
  let changeBal = (val) => {
    return balance += val;
  };

  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;

  return {
    deposit20: deposit20, // return a object
    withdraw20: withdraw20,
    check: check
  };
  // return {deposit20, withdraw20, check};
}

let wallet = budget();
console.log(wallet);
wallet.deposit20();
console.log(wallet.check());
console.log(wallet.balance); // private variable!!
console.log(wallet.withdraw20()); // private variable!!
