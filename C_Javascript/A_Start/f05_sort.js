// 예제1: 단순 정렬
var data = [7, 3, 6, 1, 8, 4];
data.sort();
console.log(data);
console.log(data.reverse());

// 예제2: 사용자 정의 정렬
newData = [
  { key: 7, value: "red" },
  { key: 3, value: "orange" },
  { key: 6, value: "yellow" },
  { key: 1, value: "green" },
  { key: 8, value: "blue" },
  { key: 4, value: "purple" }
]

function newRule(a, b) {
  return (a.key > b.key) ? 1 : -1;
}
newData.sort(newRule);
console.log(newData);

// 예제3: 사용자 정의 정렬(응용)
function newRule2(a, b, by = "key") {
  if (by == "value") {
    return (a.value > b.value) ? 1 : -1;
  } else {
    return (a.key > b.key) ? 1 : -1;
  }
}

newData.sort((a, b) => newRule2(a, b, "value"));
console.log(newData);