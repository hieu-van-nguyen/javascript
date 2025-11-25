// removing elements
var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept); // Raymond,Cynthia,Danny
console.log(cisDept); // Mike,Clayton,Terrill,Jennifer

// Adding element
const fruits = ["apple", "banana", "cherry"];
fruits.splice(2, 0, "grape", "lemon"); // At index 2, remove 0 elements, then add "grape" and "lemon"

console.log(fruits); // Output: ["apple", "banana", "grape", "lemon", "cherry"]

// Replacing Element
const numbers = [1, 2, 3, 4, 5];
const replacedNumbers = numbers.splice(1, 1, 10); // At index 1, remove 1 element (2), then add 10

console.log(numbers);        // Output: [1, 10, 3, 4, 5]
console.log(replacedNumbers); // Output: [2]

// Inserting at the Beginning (like unshift())
const animals = ["cat", "dog"];
animals.splice(0, 0, "bird"); // At index 0, remove 0 elements, then add "bird"

console.log(animals); // Output: ["bird", "cat", "dog"]

// Removing all elements from a specific index
const items = ["A", "B", "C", "D", "E"];
const removedItems = items.splice(2); // Removes all elements starting from index 2 ("C", "D", "E")

console.log(items);        // Output: ["A", "B"]
console.log(removedItems); // Output: ["C", "D", "E"]
