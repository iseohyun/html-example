let obj1 = {};

obj1 = {
  key1: 'value1',
  key2: 'value2',
  key3: function (input) { this.key1 = input; }, // this.key1 = 'value1'
}

console.log(obj1.key1); // 출력: value1

// 값을 변경함
obj1.key3('text text');

console.log(obj1.key1); // 출력: text text
