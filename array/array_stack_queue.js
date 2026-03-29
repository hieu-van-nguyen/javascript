// Stack and Queue using Array

// Stack (LIFO - Last In First Out)
const stack = [1, 2];
stack.push(3); 
console.log(stack); // [1, 2, 3]
stack.pop();   
console.log(stack); // [1, 2]

// Queue (FIFO - First In First Out)
const queue = [1, 2];
queue.push(3); 
console.log(queue); // [1, 2, 3]
queue.shift(); // [2, 3]
console.log(queue); // [2, 3]
queue.unshift(1); // [1, 2, 3]
console.log(queue); // [1, 2, 3]