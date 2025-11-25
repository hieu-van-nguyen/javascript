const nums = [1,2,3,4,5];
console.log(nums); // 1,2,3,4,5
nums.push(6);
console.log(nums); // 1,2,3,4,5,6

const first = nums.shift(); // remove 1
console.log(first); // 1
console.log(nums) // 2, 3, 4, 5, 6

nums.unshift(0); // insert 0 at the beginning of the array
console.log(nums) // 0, 2, 3, 4, 5, 6

const last = nums.pop();
console.log(last);
console.log(nums); // 0, 2, 3, 4, 5