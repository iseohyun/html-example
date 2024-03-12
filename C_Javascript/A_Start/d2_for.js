var sum = 0;
// 1부터 10(이전)까지 더하는 반복문
for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// 같은 동작을 하는 반복문(do ~ while)
sum = 0;
i = 1;
do {
  sum += i;
  i++;
} while (i < 10);
console.log(sum);

// 같은 동작을 하는 반복문(while)
sum = 0;
i = 1;
while (i < 10) {
  sum += i;
  i++;
}
console.log(sum);