function sum() {
    let res = 0;
    const n = arguments.length;
    for (let i = 0; i < n; i++) {
        res += arguments[i];
    }
    return res;
}

console.log(sum(1, 2, 3, 4)); // 10