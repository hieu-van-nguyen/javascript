function getMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}

function getMinMaxV2(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    return {
        min: sortedArr[0],
        max: sortedArr[arr.length - 1]
    }
}

console.log(getMinMax([1, 10, 2, 9, 3, 7, 4, 6, 5]));
console.log(getMinMaxV2([1, 10, 2, 9, 3, 7, 4, 6, 5]));