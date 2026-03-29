const arr = ['a', 'b', 'a'];

const count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 2, b: 1 }   