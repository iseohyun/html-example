///////////////////////////////////////////
// 출력해도 되는 값이면, 출력
var person = "Tom";
console.log(valid(person) && person); // Tom : 오른쪽

person = "Peter";
console.log(valid(person) && person); // false : 왼쪽



///////////////////////////////////////////
// 처음으로 등장하는 true출력
var person1 = "Peter";
var person2 = "Simon";
var person3 = "John";
// false > false > (false) <-- 출력
console.log(valid(person1) || valid(person2) || valid(person3));

var person3 = "Jacob"; // 야곱
// false > false > true(야곱) <-- 출력
console.log(valid(person1) || valid(person2) || valid(person3));

var person2 = "Judas"; // 유다
// false > true(유다) <-- 출력 .. 뒤는 안 봄
console.log(valid(person1) || valid(person2) || valid(person3));

var person1 = "Pilate"; // 빌라도
// true(빌라도) <-- 출력 .. 뒤는 안 봄
console.log(valid(person1) || valid(person2) || valid(person3));


// backlist
function valid(person) {
  switch (person) {
    case "Peter": // 1 베드로
    case "James": // 2 야고보
    case "John":  // 3 요한
    case "Andrew": // 4 안드레아
    case "Matthew": // 5 마태
    case "Simon": // 6 시몬
    case "Bartholomew": // 7 바르톨로메오
    case "James": // 8 야고보(Alphaeus의 아들)
    case "Thaddaeus": // 9 타대오
    case "Thomas": // 10 토마스
    case "Philip": // 11 필립보
      //case "Judas": // 12 유다
      return false;
      break;
    default: return person;
  }
}