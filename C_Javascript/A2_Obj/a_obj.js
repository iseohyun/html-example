let obj1 = {};
let func1 = function(text) { console.log(text); };

obj1 = {
  key1: 'value1',
  key2: 'value2',
  key3: func1,
}

console.log(obj1.key1); // 출력 : value1
console.log(obj1['key2']); // 출력 : value2
obj1.key3('value3'); // 출력 : value3