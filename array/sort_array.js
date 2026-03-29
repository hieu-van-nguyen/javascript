const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

// ASC order
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// DESC order
const numbersDesc = [40, 100, 1, 5, 25, 10];
numbersDesc.sort(function(a, b) {
  return b - a; // Reverse the subtraction
});
console.log(numbersDesc);

// Sorting an array using custom lambda function
const nums = [3, 1, 2];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 3]