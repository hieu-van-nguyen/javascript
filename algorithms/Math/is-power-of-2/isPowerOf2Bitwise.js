function isPowerOf2Bitwise(n) {
    if (n < 1) {
        //2 ^ 0 is 1, smallest power of 2
        return false;
    }

    /*
     * Powers of two in binary look like this:
     * 1: 0001
     * 2: 0010
     * 4: 0100
     * 8: 1000
     *
     * Note that there is always exactly 1 bit set.
     * number & (number - 1) => clear the right most set bit
     */
    return (n & (n - 1)) === 0;
}

console.log(isPowerOf2Bitwise(1)); //true
console.log(isPowerOf2Bitwise(12)); //false
console.log(isPowerOf2Bitwise(16)); //true
