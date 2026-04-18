const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const comp = target - num;
        if (map.has(comp)) {
            return[i, map.get(comp)];
        }
        map.set(num, i);
    }
    return [-1, -1];
}

console.log(twoSum([1, 3, 5, 6, 7], 9)); // [3, 1]