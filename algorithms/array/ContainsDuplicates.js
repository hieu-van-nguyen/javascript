const containsDuplicates = (nums) => {
    const numsSet = new Set(nums);
    const isEqual = numsSet.size === nums.length;
    return !isEqual; 
}

console.log(containsDuplicates([1, 3, 4, 1, 2])); // true
console.log(containsDuplicates([1, 2, 3, 4, 5])); // false


console.log("---------------------------------------------------");

const containsDuplicates_V2 = (nums) => {
    const numsSet = new Set();
    for (const num of nums) {
        if (numsSet.has(num)) {
            return true;
        }
        numsSet.add(num);
    }
    return false;
}

console.log(containsDuplicates_V2([1, 3, 4, 1, 2])); // true
console.log(containsDuplicates_V2([1, 2, 3, 4, 5])); // false

console.log("---------------------------------------------------");

const containsDuplicates_V3 = (nums) => {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates_V3([1, 3, 4, 1, 2])); // true
console.log(containsDuplicates_V3([1, 2, 3, 4, 5])); // false