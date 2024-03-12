// 예제1: 함수 수행 예제
var visitor = '홍길동';
var sir;
console.log('입력: ' + visitor);  // 1. 홍길동 출력
sir = myFunction(visitor);
console.log('출력: ' + sir);  // 3. 홍길동님 출력

function myFunction(string) {
  console.log("함수 수행 중..."); // 2. 함수 수행 중... 출력
  return string + "님";
}

// 예제2: 입력이 여러개인 함수
console.log('비교: ' + max(10, 15));
console.log('비교: ' + max(10, -15));

// 입력받은 2값 중, 더 큰 값을 반환합니다.
function max(a, b) {
  if (a > b)
    return a;
  else
    return b;
}

// 예제3: 덮어쓰기, default parameter
function plusN(a) { console.log(a + 2) }
plusN(2); // 5, 아래 코드가 없다면 4출력

function plusN(a, b) { console.log(a + b) } // 덮어쓴다.
plusN(2, 3); // 5

function plusN(a, b = 3) { console.log(a + b) } // 덮어쓴다.
plusN(2, 4); // 6

// 예제4: return
function multiplyN(a, b=5) { return a * b; }
var result = multiplyN(5);
console.log(result); // 25