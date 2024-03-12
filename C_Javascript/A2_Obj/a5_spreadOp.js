var obj1 = { color: 'red', size: '10cm' }
var obj2 = {
  color: 'green',
  style: 'bold',
  ...obj1,
  size: '12mm'
}

console.log(obj2);
