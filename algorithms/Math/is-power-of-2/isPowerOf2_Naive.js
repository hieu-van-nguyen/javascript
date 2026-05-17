function isPowerOf2(n) {
    if (n < 1) {
        //2 ^ 0 is 1, smallest power of 2
        return false;
    }
    while (n > 1) {
        if (n % 2 != 0) {
            return false; //n is not an even number
        }
        n /= 2;
    }
    return true;
}

console.log(isPowerOf2(1)); //true
console.log(isPowerOf2(12)); //false
console.log(isPowerOf2(16)); //true
