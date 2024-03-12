// 객체= {키:값}의 쌍
var hello = {
  name: "Bob",  // 키 = name : 값 = "Bob"

  greeting: function (to) { // 키: greeting : 값 = (함수)
    name = to;
    console.log(`hello, ${name}!`);
  }
}

hello.greeting(hello.name); // 출력: hello, Bob!


// 예제 2: 값 변경하기
hello.name = "Jhon";
hello.greeting(hello.name); // 출력: hello, Jhon!
