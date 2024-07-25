// A Answer
// console.log("------------A Answer------------");
// let userName = "Reza";
// const pi = 314e-2;
// const red = "#FF0000";
// const googleDomain = "google.com";
// let userId = "1234";

// B Answer
// console.log("------------B Answer------------");
// console.log(typeof "bootcamp"); // String
// console.log(typeof (2 + 3)); // Number
// console.log(typeof (4 + "4")); // String
// console.log(typeof 122222332232322232323232232321n); // Bigint
// console.log(1 || 2); // ? Boolean-
// console.log(0 || 2); // ? Boolean-First True value
// console.log(typeof ("33" * 4)); // ? String-Number
// console.log(typeof ("1" + 1)); // String
// console.log(typeof (1 - undefined)); // Number
// console.log(typeof null); // ? Null-by company mistake Object

// C Answer
console.log("------------C Answer------------");
// Answer 1
// let item = 3;
// let temp = ++item;
// console.log(item)
// console.log(temp)
// item = temp++;
// console.log(item)
// console.log(temp)
// output error
// // Answer 2
// let stars = "***";
// console.log(typeof stars)
// stars = 2+"***"*3
// console.log(stars)
// console.log(typeof stars)
// Answer 3
// function namee(){
// let flag = false;
// return function a(){
//     flag = flag++;
//     return flag
//     };
// }
// let a = 1;
// console.log(namee()())
// console.log(namee()())
// console.log(++a)
// console.log(a++)

// D Answer
console.log("------------D Answer------------");
function varScope() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}

function letScope() {
  if (true) {
    let y = 20;
    console.log(y); // ReferenceError: y is not defined
  }
}
// console.log(x)
// console.log(y)
varScope();
letScope();

// console.log(a); // undefined
// var a = 5;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 5;

var c = 10;
var c = 20; // No error

let p = 10;
p = 20;
let p = 20; // SyntaxError: Identifier 'd' has already been declared

{
  // TDZ starts here
  console.log(e); // ReferenceError: Cannot access 'e' before initialization
  let e = 10; // TDZ ends here
}
