///////////// 숫자
var num1 = 20;
var num2 = 15;

// 연산 +, - , * , /, %
console.log("20 + 15 : " + num1 + num2); // 2015
console.log("(20 + 15) : " + (num1 + num2)); // 35
console.log("10100 ^ 01111: " + (num1 ^ num2)); // 16 + 8 + 2 + 1

console.log("문자열", '변수 예제'); // 문자열 변수 예제

///////////// 특수 문자
// excape문자
console.log("문자열\n변수");

// 템플릿 리터럴(feat. 백틱(`))
var string1 = "테스트";
console.log(`템플릴 리터럴
    : ${string1}`);