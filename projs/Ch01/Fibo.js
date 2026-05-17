function fibonacci(n) {
    if (n < 0) {
        return -1; //error case
    }
    if (n == 0 || n == 1) {
        return n; //f0 = 0 and f1 = 1
    }
    let a = 0, b = 1, fibo = 0;
    for (let i = 2; i <= n; i++) {
        fibo = a + b;
        a = b;
        b = fibo;
    }
    return fibo;
}

for (let i = 0; i < 10; i++) {
    console.log('fibo(' + i + ') = ' + fibonacci(i));
}
