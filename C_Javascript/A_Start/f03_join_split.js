var friends = ['이순신', '이황', '이이', '세종', '신사임당'];
console.log(friends);

console.log(friends.toString()); // 콤마(,)로 구분
// console.log(friends); // 원본 보존

var strings = friends.join('/'); // 주어진 기호(/)로 구분
console.log(strings); // 출력: 이순신/이황/이이/세종/신사임당

console.log(strings.split('/')); // [ '이순신', '이황', '이이', '세종', '신사임당' ]
