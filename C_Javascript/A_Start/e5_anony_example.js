// 익명함수 연결
var myFunc = x => y => z => console.log(`${x} ${y} ${z}`);
myFunc(2)(3)(4); // 2 3 4

// 같은 함수
myFunc = function myfunc1(x) {
  return function myfunc2(y) {
    return function myfunc3(z) {
      console.log(`${x} ${y} ${z}`);
    }
  }
}
myFunc(5)(6)(7); // 5 6 7

// 1단계: 함수명 삭제
myFunc = function (x) {
  return function (y) {
    return function (z) {
      console.log(`${x} ${y} ${z}`);
    }
  }
}

// 2단계: 익명함수
myFunc = (x) => {
  return (y) => {
    return (z) =>
      console.log(`${x} ${y} ${z}`);
  }
}

// 3단계: 1줄 명령어 괄호{} 삭제
myFunc =
  (x) =>
    (y) =>
      (z) =>
        console.log(`${x} ${y} ${z}`);

// 4단계: 한줄로 줄이기
myFunc = (x) => (y) => (z) => console.log(`${x} ${y} ${z}`);