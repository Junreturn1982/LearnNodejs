// declare variable
let a = 'Hello World';
// declare constant
const pi = 3.14;
a = 1000;
// == so sanh gia tri, === compare value, data type

console.log(a);

let b = true;
let c = false;
let nothing;
console.log(b || 0);
console.log(c || 0);
console.log(nothing || 5);

let d = 10;
console.log(a > 99 || d++ >10); // d ko tăng do xét dk trước đã đúng
console.log("bien d: " + d);
// comma, tính toan bieu thức bên trai, xuất ra bieu thuc ben phai
let num1 = 11;
console.log((++num1, num1));
// type of operator
console.log(typeof num1);
// ?: operator
console.log(d > num1 ? d : num1);