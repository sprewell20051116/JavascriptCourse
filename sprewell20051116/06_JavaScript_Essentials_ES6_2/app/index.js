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
