function fn1() { return 1;}

var fnv = fn1;
console.log(fnv());

var fnv = fn1();
console.log(fnv);
