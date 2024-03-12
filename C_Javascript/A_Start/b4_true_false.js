///////////// 참거짓
var flag1 = true;
console.log("참거짓 : " + flag1);
console.log("num1 < num2 : " + (num1 < num2));

// false == 0 == '0' == ''
console.log(false == ''); // true
console.log(false == '0'); // true
console.log(false == 0); // true

console.log("----------------------");
// true == 1 == '1'
console.log(true == '1'); // true
console.log(true == 1); // true
console.log(true == "string1"); // false
console.log("string1" ? true : false); // true