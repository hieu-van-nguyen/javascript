function multiplyByTwo(a, b, c, callback) {
    const arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = callback(arguments[i] * 2);
    }
    return arr;
}

function addOne(a) {
    return a + 1;
}

const res = multiplyByTwo(1, 2, 3, addOne);
console.log(res);