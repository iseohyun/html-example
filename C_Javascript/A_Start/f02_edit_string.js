var string1 = "안녕하세요. korean입니다.";
console.log('원문 : ' + string1);
console.log('길이 : ' + string1.length); // 길이 : 17
console.log('3번째 글자: ' + string1[3]); // 3번째 글자 : 세
console.log('korean 위치 : ' + string1.indexOf('korean')); //'안' = 0번째
console.log('중간글자 : ' + string1.slice(7, 13)); // korean
console.log('대문자 : ' + string1.toUpperCase()); // KOREAN
console.log('교체 : ' + string1.replace('korean', 'japanese')); // japanese입니다.