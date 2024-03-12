var fruits = ["apple", "banana", "orange"];

var fruits2 = fruits;
console.log(fruits2);

var fruits3 = [fruits];
var fruits4 = [...fruits]; // 전개연산자 spread operators
console.log(fruits3);
console.log(fruits4);

console.log((fruits == fruits2) ? true : false); // true, 1 = 2
// 메모리번지가 다르다.
console.log((fruits == fruits4) ? true : false); // false, 1 = 4

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

// 하지만, 내용은 같다.
console.log(arraysEqual(fruits, fruits4)); // true, 1 = 4