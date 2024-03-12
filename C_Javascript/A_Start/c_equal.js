// 대조 연산
console.log(10 == 15); // false

// value만 일치 vs. type도 일치
console.log(5 == 5) // true
console.log(5 === 5); // true

console.log(5 == '5'); // true
console.log(5 === '5'); // false

console.log("----------------------");
// 0 == ''
console.log(0 == ''); // true
console.log(0 === ''); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(null == undefined); // true
console.log(null === undefined); //false