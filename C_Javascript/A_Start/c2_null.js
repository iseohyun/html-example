// 0 == ''
console.log(0 == ''); // true
console.log(0 === ''); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); //false

console.log("----------------------");
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