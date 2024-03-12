// 예제1: 필터
var data = [7, 3, 6, 1, 8, 4];
newData = data.find((x) => (x % 2 === 0));

console.log(data);  // [ 7, 3, 6, 1, 8, 4 ]
console.log(newData);  // 6

// 예제2: 사용자 정의 정렬
data2 = [
  { key: 7, value: "red" },
  { key: 3, value: "orange" },
  { key: 6, value: "yellow" },
  { key: 1, value: "green" },
  { key: 8, value: "blue" },
  { key: 4, value: "purple" }
]

newData = data2.find((x) => (x.key % 2 === 0)); // { key: 6, value: 'yellow' },
console.log(newData);

// 예제2-1: findIndex
myIndex = data2.findIndex((x) => (x.value === "green"));
console.log(myIndex); // 3
console.log(data2[myIndex]); // { key: 1, value: 'green' }