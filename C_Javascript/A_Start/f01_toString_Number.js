var num1 = 3.141592;
console.log("반올림(2자리) : " + num1.toFixed(2));
console.log("반올림(3자리) : " + num1.toFixed(3));

num2 = num1.toString(); // 문자로 변경
console.log("문자열 : " + (num2 + 90) + ", " + typeof(num2));

num2 = Number(num2); // 숫자로 변경
console.log("문자열 : " + (num2 + 90) + ", " + typeof(num2));