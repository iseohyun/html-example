function log(arg1, arg2, arg3) {
  console.log(arguments);
}

log("apple", "banana", "orange");

function log2(...arguments) {
  arguments.forEach((arg) => console.log(arg));
}

log2("apple", "banana", "orange", "melon", "strawberry", "blackberry");