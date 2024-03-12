var sum = 0;
// 1부터 10(이전)까지 더하는 반복문: 5까지 수행하고, 정지
for (var i = 0; i < 10; i++) {
  sum += i;
  if (i == 5)
    break;
}
console.log(sum); // 1 + 2 + 3 + 4 + 5 = 15

sum = 0;
for (var i = 0; i < 10; i++) {
  if (i == 5)
    continue;
  sum += i;
}
console.log(sum); // 1 + 2 + 3 + 4 + 6 + 7 + 8 + 9 = 40