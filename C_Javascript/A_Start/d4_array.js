var array1 = [1, 2, 3, 4, 5];

console.log(array1);
array1[3] = "강아지";

// 방법1
for (var i = 0; i < array1.length; i++) {
  console.log(array1[i]); // 1, 2, 3, 강아지, 5
}

// 방법2
console.log("--------------------------------");
array1.forEach(function (e) {
  console.log(e); // 1, 2, 3, 강아지, 5
});