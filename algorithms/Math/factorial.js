function factorial_rec(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial_rec(n - 1) * n;
    }
}

function factorial_iter(n) {
    var product = 1;
    for (var i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial_rec(4)); //24
console.log(factorial_rec(5)); //120
console.log(factorial_rec(0)); //1

console.log(factorial_iter(4)); //24
console.log(factorial_iter(5)); //120
console.log(factorial_iter(0)); //1
