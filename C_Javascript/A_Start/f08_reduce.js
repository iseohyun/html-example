// 예제1: 필터
var data = [7, 3, 6, 1, 8, 4];
newData = data.reduce((a, b) => (a + " > " + (b + 1)), "시작");

console.log(data);  // [ 7, 3, 6, 1, 8, 4 ]
console.log(newData);  // 시작 > 8 > 4 > 7 > 2 > 9 > 5

// 예제2: 사용자 정의 정렬
data2 = [
  { key: 7, value: "red" },
  { key: 3, value: "orange" },
  { key: 6, value: "yellow" },
  { key: 1, value: "green" },
  { key: 8, value: "blue" },
  { key: 4, value: "purple" }
]

newData = data2.reduce((a, b) => (`${a} ${b.value[0]}`), ": "); // :  r o y g b p
console.log(newData);