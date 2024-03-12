let obj1 = {};
var key1 = 'color';
var value1 = 'red';
var key2 = 'size';
var value2 = '10cm';
var name = 'name1';

obj1 = {
  name, // name : 'name1'
  [key1]: value1,
  [key2]: value2,
}

console.log(obj1); // 출력: { name: 'name1', color: 'red', size: '10cm' }

// 예제2: 삭제하기
delete obj1.size;
console.log(obj1); // { name: 'name1', color: 'red' }

// 예제3: 추가하기
obj1['style'] = 'bold';

console.log(obj1); // { name: 'name1', color: 'red', style: 'bold' }

