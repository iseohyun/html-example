var num1 = 5; // 재선언 가능, 변경가능
let num2 = 10; // 재선언 불가, 변경가능
const num3 = 15; // 재선언 불가, 변경불가

// 재선언
var num1 = 5;
// let num2 = 10;
// const num3 = 15;

// 변경
num1 = 6;
num2 = 16;
console.log(num1); // 6
console.log(num2); // 16
console.log(num3); // 15

var num4;
console.log(num4); // undefined

// 그냥 선언
what = '20';
console.log(what, typeof what); // 20 string