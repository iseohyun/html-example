var arr_ABC = ['a', 'b', 'c', 'd', 'e'];
var arr_123 = [1, 2, 3];
var arr_hangle = ["가", "나"];
var myArray = [arr_ABC, arr_123];

console.log(myArray); // 출력: [ [ 'a', 'b', 'c', 'd', 'e' ], [ 1, 2, 3 ] ]
console.log(myArray[0][0]); // 출력: a
console.log(myArray[1][1]); // 출력: 2

myArray[1][2] = 'f';
console.log(myArray); // 출력: [ [ 'a', 'b', 'c', 'd', 'e' ], [ 1, 2, 'f' ] ]