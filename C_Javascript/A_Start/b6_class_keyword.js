// 예제1: java문법에 의한 class생성 예제
class Animal { }

class Person extends Animal {
  name = "Tom";
  speach = function () { alert('hello') };
}

var me = new Person;
console.log(me.name); // Tom

// 예제2: javascript의 객체생성
var you = {name: 'John'}
console.log(you.name); // John