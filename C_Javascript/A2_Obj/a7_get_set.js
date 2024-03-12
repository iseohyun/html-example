class Person {
  #name;  // private 변수
  age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  get info(){
    return `(${this.age}) ${this.#name}`
  }

  // private 변수에 접근한다.
  set name(name) { // 인자는 1개
    this.#name = name;
  }
}

var person1 = new Person('홍길동', 20);
console.log(person1.info); // (20) 홍길동

// private 변수는 노출되지 않는다.
console.log(person1); // Person { age: 20 }

person1.name = '임꺽정'; // 변수처럼 입력(함수X)

console.log(person1.info); // (20) 임꺽정