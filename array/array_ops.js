const nums = [1, 2, 3, 4, 5];

// Map: Create a new array with each element doubled
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter: Create a new array with only even numbers
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// Reduce: Calculate the sum of all numbers
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// ForEach: Log each number to the console
nums.forEach(n => console.log(n));

// Find: Find the first number that meets a condition
const users = [{id: 1}, {id: 2}];
const user = users.find(u => u.id === 2);
console.log(user); // {id: 2}

// Some: Check if there is at least one even number
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true

// Every: Check if all numbers are even
const even_nums = [2, 4, 6];
const allEven = even_nums.every(n => n % 2 === 0);
console.log(allEven); // true

// Includes: Check if an array includes a certain value
const fruits = ['apple', 'banana'];
console.log(fruits.includes('apple')); // true

// Slice: Create a new array that is a portion of the original array
const arr = [1, 2, 3, 4];
const sub = arr.slice(1, 3);
console.log(sub); // [2, 3]
console.log(arr); // [1, 2, 3, 4] (original array remains unchanged)

arr.splice(1, 1); // remove 1 item at index 1
console.log(arr); // [1, 3, 4] (original array is modified)

// Concat: Merge two arrays into a new array
const a = [1, 2];
const b = [3, 4];
const result = a.concat(b);
console.log(result); // [1, 2, 3, 4]

const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1, 2, 3]

// Chaining array methods
const combined = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);

console.log(combined); // 12