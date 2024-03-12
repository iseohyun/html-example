// 예제1: 필터
var data = [7, 3, 6, 1, 8, 4];
newData = data.filter((x) => (x % 2 === 0));

console.log(data);  // [ 7, 3, 6, 1, 8, 4 ]
console.log(newData);  // [ 6, 8, 4 ]

// 예제2: 사용자 정의 정렬
data2 = [
  { key: 7, value: "red" },
  { key: 3, value: "orange" },
  { key: 6, value: "yellow" },
  { key: 1, value: "green" },
  { key: 8, value: "blue" },
  { key: 4, value: "purple" }
]

newData = data2.filter((x) => (x.key%2 === 0));
console.log(newData);
// [
//   { key: 6, value: 'yellow' },
//   { key: 8, value: 'blue' },
//   { key: 4, value: 'purple' }
// ]
