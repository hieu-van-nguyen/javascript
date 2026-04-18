var nums = [2, 3, 4, 5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
    nums[i] = nums[i - 1];
}
nums[0] = newnum;
console.log(nums); //Array(5) [1, 2, 3, 4, 5]
console.log(nums.join('-')); //1-2-3-4-5
console.log(nums.toString()); // 1,2,3,4,5

//using unshift in add element at the beginning
nums.unshift(0);
console.log(nums); // 0,1,2,3,4,5
