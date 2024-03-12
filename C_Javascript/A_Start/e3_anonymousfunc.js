function plus(a, b) {
  return a + b;
}

var minus = (a, b) => {
  return a - b;
}

// function을 인자로 받는 경우
function calc(a, func, b) {
  return func(a, b);
}

console.log("1 + 2 = " + calc(1, plus, 2));
console.log("2 - 1 = " + calc(2, minus, 1));