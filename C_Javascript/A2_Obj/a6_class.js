// 객체명은 대문자 시작을 권고
class Person {
  // 주석처리해도 자동 인식, 단, 유지보수 부적합
  // name; 
  // age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return `저는 ${this.age}살 ${this.name}입니다.`;
  }
}

var person1 = new Person('홍길동', 20);
console.log(person1.sayHi());